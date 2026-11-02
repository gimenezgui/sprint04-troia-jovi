import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem('jovi-user') || 'null');
    } catch {
      return null;
    }
  });

  function login(name) {
    const newUser = { name };
    sessionStorage.setItem('jovi-user', JSON.stringify(newUser));
    setUser(newUser);
  }

  function logout() {
    sessionStorage.removeItem('jovi-user');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }

  return context;
}