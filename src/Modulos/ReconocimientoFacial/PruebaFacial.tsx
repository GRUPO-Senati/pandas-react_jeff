import React, { useState } from 'react';

export const PruebaFacial: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);

  const handleStartScan = () => {
    setIsScanning(true);
    // Aquí conectarás tu API / backend para autenticar por rostro
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}>
      <div style={facialStyles.scanBox}>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
          {isScanning ? '🔍 Escaneando rostro...' : 'Posiciona tu rostro frente a la cámara'}
        </p>

        <div style={facialStyles.videoPlaceholder}>
          📷 Área de cámara / Video Stream
        </div>

        <button type="button" onClick={handleStartScan} style={facialStyles.scanBtn}>
          {isScanning ? 'Procesando...' : 'Iniciar Escaneo Facial'}
        </button>
      </div>
    </div>
  );
};

const facialStyles: Record<string, React.CSSProperties> = {
  scanBox: {
    width: '100%',
    padding: '1.2rem',
    background: '#1e293b',
    borderRadius: '16px',
    textAlign: 'center',
    border: '1px solid #334155',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.8rem',
  },
  videoPlaceholder: {
    width: '100%',
    height: '200px',
    background: '#0f172a',
    borderRadius: '12px',
    border: '1px dashed #475569',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#64748b',
    fontSize: '0.85rem',
  },
  scanBtn: {
    marginTop: '0.5rem',
    padding: '0.7rem 1.4rem',
    background: '#fbbf24',
    color: '#0f172a',
    border: 'none',
    borderRadius: '999px',
    fontWeight: '800',
    cursor: 'pointer',
  },
};