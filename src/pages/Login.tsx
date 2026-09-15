import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fondoImagen from '../assets/fondo-montana.jpg';

// ==========================================
// 1. SUBCOMPONENTE: PRUEBA DE RECONOCIMIENTO
// ==========================================
const PruebaFacial: React.FC = () => {
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

        {/* Espacio reservado para el <video> o canvas de la cámara */}
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

// ==========================================
// 2. SUBCOMPONENTE: REGISTRO FACIAL
// ==========================================
const RegistroFacial: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [rol, setRol] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí conectarás la lógica para guardar en tu base de datos
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
        REGISTRAR ROSTRO
      </button>
    </form>
  );
};

// ==========================================
// 3. SUBCOMPONENTE: MODAL CONTENEDOR
// ==========================================
interface ModalProps {
  onClose: () => void;
}

const ReconocimientoFacialModal: React.FC<ModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'prueba' | 'registro'>('prueba');

  return (
    <div style={facialStyles.overlay}>
      <div style={facialStyles.modalCard}>
        <div style={facialStyles.header}>
          <div style={facialStyles.tabsContainer}>
            <button
              type="button"
              style={activeTab === 'prueba' ? facialStyles.activeTab : facialStyles.tab}
              onClick={() => setActiveTab('prueba')}
            >
              INICIAR SESIÓN
            </button>
            <button
              type="button"
              style={activeTab === 'registro' ? facialStyles.activeTab : facialStyles.tab}
              onClick={() => setActiveTab('registro')}
            >
              REGISTRAR ROSTRO
            </button>
          </div>
          <button type="button" onClick={onClose} style={facialStyles.closeBtn}>✕</button>
        </div>

        <div style={facialStyles.body}>
          {activeTab === 'prueba' ? <PruebaFacial /> : <RegistroFacial />}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. COMPONENTE PRINCIPAL: LOGIN
// ==========================================
const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (email === 'admin@empresa.com' && password === '123456') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/admin');
    } else {
      setError('Credenciales incorrectas.');
    }
  };

  return (
    <div style={styles.heroContainer}>
      <div style={styles.overlay}></div>

      <div style={styles.contentWrapper}>
        <div style={styles.leftSection}>
          <span style={styles.badgeText}>ACCESO AL ENTORNO</span>
          <h1 style={styles.heroTitle}>
            Comienza a <br /> trabajar con Python
          </h1>
          <p style={styles.heroSubtitle}>
            Accede a tus herramientas de análisis de datos, automatización y aprendizaje con una experiencia visual alineada con la plataforma.
          </p>
        </div>

        <div style={styles.rightSection}>
          {/* Botón para abrir el modal flotante */}
          <button 
            type="button" 
            onClick={() => setIsModalOpen(true)} 
            style={styles.openModalButton}
          >
            INICIAR CON RECONOCIMIENTO FACIAL
          </button>

          <div style={styles.glassFormCard}>
            <h2 style={styles.formTitle}>INICIAR SESIÓN</h2>

            {error && <div style={styles.errorMessage}>{error}</div>}

            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Correo Electrónico</label>
                <input
                  type="email"
                  placeholder="admin@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Contraseña</label>
                <input
                  type="password"
                  placeholder="123456"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <button type="submit" style={styles.button}>
                INGRESAR
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Renderizado condicional del modal */}
      {isModalOpen && (
        <ReconocimientoFacialModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

// ==========================================
// ESTILOS
// ==========================================

const styles: Record<string, React.CSSProperties> = {
  heroContainer: {
    position: 'relative',
    minHeight: '85vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '28px',
    overflow: 'hidden',
    backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(29, 78, 216, 0.45)), url(${fondoImagen})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '0 28px 80px rgba(15, 23, 42, 0.25)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.4) 45%, rgba(15, 23, 42, 0.1) 100%)',
    zIndex: 1,
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1180px',
    padding: '3rem 2rem',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  leftSection: {
    flex: '1 1 450px',
    color: '#ffffff',
    textShadow: '0 2px 8px rgba(0,0,0,0.6)',
    maxWidth: '560px',
  },
  badgeText: {
    display: 'inline-block',
    fontSize: '0.82rem',
    letterSpacing: '3px',
    color: '#fbbf24',
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  heroTitle: {
    fontSize: 'clamp(2.4rem, 4vw, 4rem)',
    fontWeight: '900',
    lineHeight: '1.08',
    margin: '0.8rem 0 1rem',
    color: '#ffffff',
    letterSpacing: '-0.05em',
  },
  heroSubtitle: {
    fontSize: '1.08rem',
    color: 'rgba(226, 232, 240, 0.95)',
    lineHeight: '1.7',
    maxWidth: '520px',
  },
  rightSection: {
    flex: '0 1 380px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  openModalButton: {
    width: '100%',
    padding: '0.8rem 1rem',
    borderRadius: '14px',
    border: '1px solid rgba(251, 191, 36, 0.5)',
    background: 'rgba(15, 23, 42, 0.85)',
    color: '#fbbf24',
    fontWeight: '700',
    fontSize: '0.82rem',
    letterSpacing: '0.5px',
    cursor: 'pointer',
    backdropFilter: 'blur(8px)',
  },
  glassFormCard: {
    width: '100%',
    background: 'rgba(15, 23, 42, 0.7)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    padding: '2rem 1.7rem',
    borderRadius: '24px',
    boxShadow: '0 24px 50px rgba(15, 23, 42, 0.35)',
    border: '1px solid rgba(191, 219, 254, 0.22)',
  },
  formTitle: {
    fontSize: '1.15rem',
    fontWeight: '800',
    letterSpacing: '1.6px',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: '1.2rem',
  },
  errorMessage: {
    backgroundColor: 'rgba(239, 68, 68, 0.18)',
    border: '1px solid rgba(239, 68, 68, 0.7)',
    color: '#fecaca',
    padding: '0.7rem',
    borderRadius: '12px',
    fontSize: '0.8rem',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#dbeafe',
    letterSpacing: '0.04em',
  },
  input: {
    padding: '0.9rem 0.95rem',
    borderRadius: '12px',
    border: '1px solid rgba(147, 197, 253, 0.28)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#0f172a',
    fontSize: '0.94rem',
    outline: 'none',
    boxShadow: 'inset 0 1px 2px rgba(15, 23, 42, 0.06)',
  },
  button: {
    marginTop: '0.8rem',
    padding: '0.95rem 1rem',
    borderRadius: '999px',
    border: 'none',
    background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
    color: '#0f172a',
    fontWeight: '800',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    cursor: 'pointer',
    boxShadow: '0 16px 30px rgba(245, 158, 11, 0.35)',
  },
};

const facialStyles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    backdropFilter: 'blur(8px)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    width: '90%',
    maxWidth: '550px',
    backgroundColor: '#0f172a',
    border: '1px solid rgba(147, 197, 253, 0.3)',
    borderRadius: '24px',
    padding: '1.5rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '0.8rem',
  },
  tabsContainer: { display: 'flex', gap: '0.5rem' },
  tab: {
    background: 'transparent',
    border: 'none',
    color: '#94a3b8',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '0.85rem',
  },
  activeTab: {
    background: 'rgba(251, 191, 36, 0.15)',
    border: 'none',
    borderBottom: '2px solid #fbbf24',
    color: '#fbbf24',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontWeight: '800',
    fontSize: '0.85rem',
    borderRadius: '6px 6px 0 0',
  },
  closeBtn: {
    background: 'transparent',
    border: 'none',
    color: '#94a3b8',
    fontSize: '1.2rem',
    cursor: 'pointer',
  },
  body: { paddingTop: '1.2rem' },
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

export default Login;