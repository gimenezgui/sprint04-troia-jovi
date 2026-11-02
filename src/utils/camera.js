export function generateCapture(mode) {
  const confidence = Math.round(
    84 + Math.random() * 15,
  );

  const fileSize = Math.round(
    (1.8 + Math.random() * 2.7) * 10,
  ) / 10;

  return {
    id: Date.now(),
    modeId: mode.id,
    modeName: mode.name,
    confidence,
    fileSize,
    createdAt: new Date().toLocaleString('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
    }),
  };
}