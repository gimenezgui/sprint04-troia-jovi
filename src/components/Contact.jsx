import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import SectionTitle from './SectionTitle';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const [, setMessages] = useLocalStorage(
    'troia-contact-messages',
    [],
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newMessage = {
      id: Date.now(),
      ...form,
      createdAt: new Date().toLocaleString('pt-BR'),
    };

    setMessages((currentMessages) => [
      newMessage,
      ...currentMessages,
    ].slice(0, 10));

    setForm(initialForm);
    setSubmitted(true);
  }

  return (
    <section
      id="contato"
      className="section contact light-section"
      aria-labelledby="contact-title"
    >
      <SectionTitle
        number="06"
        eyebrow="Contato"
        title="Vamos transformar o próximo momento?"
        description="Conheça a proposta, teste a experiência e compartilhe sua percepção com o Grupo Tróia."
        titleId="contact-title"
        light
      />

      <div className="contact-content">
        <div className="contact-copy">
          <span>PROJETO ACADÊMICO</span>

          <h3>JOVI Scene</h3>

          <p>
            Uma proposta criada pelo Grupo Tróia para o
            Challenge JOVI 2026.
          </p>

          <ul>
            <li>Experiência desenvolvida em React</li>
            <li>Interface responsiva</li>
            <li>Dados armazenados localmente</li>
          </ul>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <label>
            <span>Seu nome</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Como podemos chamar você?"
              required
            />
          </label>

          <label>
            <span>Seu e-mail</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="voce@exemplo.com"
              required
            />
          </label>

          <label>
            <span>Mensagem</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Conte o que achou da proposta"
              rows="5"
              required
            />
          </label>

          <button type="submit">
            Registrar mensagem
            <span aria-hidden="true">↗</span>
          </button>

          <p className="form-note">
            Demonstração acadêmica: os dados permanecem
            somente neste navegador.
          </p>

          {submitted && (
            <p
              className="form-success"
              role="status"
              aria-live="polite"
            >
              Mensagem registrada com sucesso.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}