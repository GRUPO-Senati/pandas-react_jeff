import React, { useState } from 'react';

export const RegistroFacial: React.FC = () => {
  const [nombresApellidos, setNombresApellidos] = useState('');
  const [dni, setDni] = useState('');
  const [edad, setEdad] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Rostro registrado:\n• Nombres: ${nombresApellidos}\n• DNI: ${dni}\n• Edad: ${edad}\n• Teléfono: ${telefono}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      
      {/* Contenedor principal a 2 columnas */}
      <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'stretch' }}>
        
        {/* Columna Izquierda: Cámara y Botón de Captura */}
        <div style={{ flex: '1 1 45%', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div style={facialStyles.cameraBox}>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0, textAlign: 'center' }}>
              📷 Área de Cámara / Rostro
            </p>
          </div>
          <button type="button" style={facialStyles.captureBtn}>
            CAPTURAR ROSTRO
          </button>
        </div>

        {/* Columna Derecha: Formulario */}
        <div style={{ flex: '1 1 55%', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div style={facialStyles.inputGroup}>
            <label style={facialStyles.label}>Nombres y Apellidos</label>
            <input
              type="text"
              placeholder="Ej. Juan Pérez"
              value={nombresApellidos}
              onChange={(e) => setNombresApellidos(e.target.value)}
              style={facialStyles.input}
              required
            />
          </div>

          <div style={facialStyles.inputGroup}>
            <label style={facialStyles.label}>DNI</label>
            <input
              type="text"
              placeholder="Ej. 74839201"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              style={facialStyles.input}
              required
            />
          </div>

          <div style={facialStyles.inputGroup}>
            <label style={facialStyles.label}>Edad</label>
            <input
              type="number"
              placeholder="Ej. 25"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              style={facialStyles.input}
              required
            />
          </div>

          <div style={facialStyles.inputGroup}>
            <label style={facialStyles.label}>Número de Teléfono</label>
            <input
              type="tel"
              placeholder="Ej. 987654321"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              style={facialStyles.input}
              required
            />
          </div>

          <button type="submit" style={facialStyles.saveBtn}>
            REGISTRAR ROSTRO
          </button>
        </div>

      </div>
    </form>
  );
};

const facialStyles: Record<string, React.CSSProperties> = {
  cameraBox: {
    width: '100%',
    flex: 1,
    minHeight: '180px',
    background: '#1e293b',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px dashed #475569',
    padding: '0.5rem',
  },
  captureBtn: {
    padding: '0.6rem',
    borderRadius: '10px',
    border: '1px solid #475569',
    backgroundColor: '#334155',
    color: '#f8fafc',
    fontSize: '0.75rem',
    fontWeight: '700',
    cursor: 'pointer',
  },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '0.2rem' },
  label: { fontSize: '0.75rem', fontWeight: '700', color: '#dbeafe' },
  input: {
    padding: '0.6rem 0.75rem',
    borderRadius: '8px',
    border: '1px solid rgba(147, 197, 253, 0.28)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#0f172a',
    fontSize: '0.85rem',
    outline: 'none',
  },
  saveBtn: {
    marginTop: '0.4rem',
    padding: '0.75rem',
    borderRadius: '999px',
    border: 'none',
    background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
    color: '#0f172a',
    fontWeight: '800',
    fontSize: '0.85rem',
    cursor: 'pointer',
  },
};