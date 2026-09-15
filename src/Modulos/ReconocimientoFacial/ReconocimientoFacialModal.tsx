import React, { useState } from 'react';
import { PruebaFacial } from './PruebaFacial';
import { RegistroFacial } from './RegistroFacial';

interface ModalProps {
  onClose: () => void;
}

export const ReconocimientoFacialModal: React.FC<ModalProps> = ({ onClose }) => {
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
};