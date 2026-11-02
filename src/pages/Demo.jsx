import CameraDemo from '../components/CameraDemo';
import { Link } from 'react-router-dom';

export default function Demo() {
  return (
    <main className="min-h-screen bg-[#0b0d0c] text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <Link to="/" className="text-lime-300 hover:underline">
          ← Voltar ao início
        </Link>
      </div>
      <CameraDemo />
    </main>
  );
}