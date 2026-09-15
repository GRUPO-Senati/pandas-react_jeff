import React, { useState } from 'react';

export const RegistroFacial: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [rol, setRol] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Módulo de Registro conectado correctamente!\n\nDatos ingresados:\n• Nombre: ${nombre}\n• Código: ${codigo}\n• Rol: ${rol}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Etiqueta de prueba visual */}
      <div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '0.6rem 1rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.85rem', textAlign: 'center' }}>
        ✅ CONEXIÓN CORRECTA CON EL MÓDULO DE REGISTRO
      </div>

      <div style={facialStyles.cameraBox}>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>📷 Captura de rostro para registro</p>
      </div>

      <div style={facialStyles.inputGroup}>
        <label style={facialStyles.label}>Nombre completo</label>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={facialStyles.input}
          required
        />
      </div>

      <div style={facialStyles.inputGroup}>
        <label style={facialStyles.label}>Código / DNI</label>
        <input
          type="text"
          placeholder="Ingrese código de usuario"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          style={facialStyles.input}
          required
        />
      </div>

      <div style={facialStyles.inputGroup}>
        <label style={facialStyles.label}>Rol / Cargo</label>
        <input
          type="text"
          placeholder="Ingrese rol"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
          style={facialStyles.input}
          required
        />
      </div>

      <button type="submit" style={facialStyles.saveBtn}>
        REGISTRAR ROSTRO (PROBAR)
      </button>
    </form>
  );
};

const facialStyles: Record<string, React.CSSProperties> = {
  cameraBox: {
    width: '100%',
    height: '160px',
    background: '#1e293b',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px dashed #334155',
  },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '0.4rem' },
  label: { fontSize: '0.75rem', fontWeight: '700', color: '#dbeafe' },
  input: {
    padding: '0.75rem',
    borderRadius: '10px',
    border: '1px solid rgba(147, 197, 253, 0.28)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#0f172a',
    fontSize: '0.9rem',
    outline: 'none',
  },
  saveBtn: {
    marginTop: '0.5rem',
    padding: '0.8rem',
    borderRadius: '999px',
    border: 'none',
    background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
    color: '#0f172a',
    fontWeight: '800',
    fontSize: '0.85rem',
    cursor: 'pointer',
  },
};