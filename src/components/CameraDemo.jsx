import { useState } from 'react';
import { cameraModes } from '../data/modes';
import useLocalStorage from '../hooks/useLocalStorage';
import { generateCapture } from '../utils/camera';
import SectionTitle from './SectionTitle';

export default function CameraDemo() {
  const [selectedModeId, setSelectedModeId] = useState(
    cameraModes[0].id,
  );

  const [captures, setCaptures] = useLocalStorage(
    'troia-capture-history',
    [],
  );

  const selectedMode =
    cameraModes.find((mode) => mode.id === selectedModeId) ??
    cameraModes[0];

  function handleCapture() {
    const newCapture = generateCapture(selectedMode);

    setCaptures((currentCaptures) => [
      newCapture,
      ...currentCaptures,
    ].slice(0, 5));
  }

  function handleClearHistory() {
    setCaptures([]);
  }

  return (
    <section
      id="demo"
      className="section camera-demo"
      aria-labelledby="demo-title"
    >
      <SectionTitle
        number="03"
        eyebrow="Demonstração"
        title="Experimente a Scene AI."
        description="Selecione um contexto e simule como a câmera interpreta cada momento."
        titleId="demo-title"
      />

      <div className="camera-interface">
        <div className="camera-controls">
          <p className="control-label">
            Selecione o contexto
          </p>

          <div
            className="mode-selector"
            aria-label="Modos disponíveis"
          >
            {cameraModes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                className={
                  selectedModeId === mode.id
                    ? 'mode-button active'
                    : 'mode-button'
                }
                onClick={() => setSelectedModeId(mode.id)}
              >
                <span>{mode.number}</span>
                {mode.name}
              </button>
            ))}
          </div>

          <div className="selected-mode-copy">
            <span style={{ color: selectedMode.accent }}>
              SCENE AI · {selectedMode.label}
            </span>

            <h3>{selectedMode.name}</h3>

            <p>{selectedMode.description}</p>

            <strong>{selectedMode.benefit}</strong>
          </div>

          <button
            type="button"
            className="capture-button"
            onClick={handleCapture}
          >
            Simular captura
            <span aria-hidden="true">↗</span>
          </button>
        </div>

        <div className="camera-preview">
          <img
            src={selectedMode.image}
            alt={`Prévia do ${selectedMode.name}`}
            style={{
                objectPosition: selectedMode.previewPosition,
            }}
          />

          <div className="camera-frame" aria-hidden="true">
            <span className="corner top-left" />
            <span className="corner top-right" />
            <span className="corner bottom-left" />
            <span className="corner bottom-right" />
          </div>

          <div className="context-status">
            <span>CONTEXTO DETECTADO</span>
            <strong>{selectedMode.name}</strong>
          </div>
        </div>
      </div>

      <div className="capture-history">
        <div className="history-header">
          <div>
            <span>HISTÓRICO LOCAL</span>
            <h3>Capturas simuladas</h3>
          </div>

          {captures.length > 0 && (
            <button
              type="button"
              onClick={handleClearHistory}
            >
              Limpar histórico
            </button>
          )}
        </div>

        {captures.length === 0 ? (
          <p className="empty-history">
            Nenhuma captura realizada. Escolha um modo e
            faça a primeira simulação.
          </p>
        ) : (
          <ul className="history-list">
            {captures.map((capture) => (
              <li key={capture.id}>
                <div>
                  <strong>{capture.modeName}</strong>
                  <span>{capture.createdAt}</span>
                </div>

                <div>
                  <span>
                    Confiança: {capture.confidence}%
                  </span>
                  <span>{capture.fileSize} MB</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}