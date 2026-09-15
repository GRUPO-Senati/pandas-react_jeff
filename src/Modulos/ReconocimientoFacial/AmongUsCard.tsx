import React from 'react';

interface AmongUsCardProps {
  nombre?: string;
  codigo?: string;
  rol?: string;
  estado?: string;
}

export const AmongUsCard: React.FC<AmongUsCardProps> = ({
  nombre = 'JEFFERSON V.',
  codigo = '2026-0042',
  rol = 'TRIPULANTE',
  estado = 'IDENTIFICADO'
}) => {
  return (
    <div style={cardStyles.container}>
      {/* Fondo con temática de espacio y estrellas */}
      <div style={cardStyles.cardHeader}>
        <span style={cardStyles.headerTitle}>CREWMATE ID CARD</span>
        <span style={cardStyles.statusBadge}>{estado}</span>
      </div>

      <div style={cardStyles.cardBody}>
        {/* Personaje de Among Us dibujado en CSS */}
        <div style={cardStyles.avatarContainer}>
          <div style={cardStyles.amongUsCharacter}>
            <div style={cardStyles.backpack}></div>
            <div style={cardStyles.visor}></div>
          </div>
        </div>

        {/* Información del usuario */}
        <div style={cardStyles.infoContainer}>
          <div style={cardStyles.infoRow}>
            <span style={cardStyles.label}>NOMBRE:</span>
            <span style={cardStyles.value}>{nombre}</span>
          </div>
          <div style={cardStyles.infoRow}>
            <span style={cardStyles.label}>CÓDIGO:</span>
            <span style={cardStyles.value}>{codigo}</span>
          </div>
          <div style={cardStyles.infoRow}>
            <span style={cardStyles.label}>ROL:</span>
            <span style={cardStyles.valueRol}>{rol}</span>
          </div>
        </div>
      </div>

      <div style={cardStyles.cardFooter}>
        <span>SISTEMA DE AUTENTICACIÓN FACIAL</span>
      </div>
    </div>
  );
};

// ==========================================
// ESTILOS DE LA TARJETA
// ==========================================
const cardStyles: Record<string, React.CSSProperties> = {
  container: {
    width: '100%',
    maxWidth: '420px',
    backgroundColor: '#0b0f19',
    borderRadius: '16px',
    border: '2px solid #38bdf8',
    padding: '1.2rem',
    boxShadow: '0 0 20px rgba(56, 189, 248, 0.25)',
    color: '#ffffff',
    fontFamily: 'monospace, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    margin: '0 auto',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(56, 189, 248, 0.3)',
    paddingBottom: '0.6rem',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    color: '#38bdf8',
  },
  statusBadge: {
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    color: '#4ade80',
    border: '1px solid #22c55e',
    padding: '0.2rem 0.6rem',
    borderRadius: '999px',
    fontSize: '0.7rem',
    fontWeight: 'bold',
  },
  cardBody: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
  },
  avatarContainer: {
    width: '90px',
    height: '100px',
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #475569',
    position: 'relative',
  },
  // Cuerpo del personaje
  amongUsCharacter: {
    width: '45px',
    height: '60px',
    backgroundColor: '#ef4444', // Rojo clásico de Among Us
    borderRadius: '22px 22px 10px 10px',
    position: 'relative',
    boxShadow: 'inset -4px -4px 0px rgba(0,0,0,0.3)',
  },
  // Visor del personaje
  visor: {
    position: 'absolute',
    top: '10px',
    left: '18px',
    width: '28px',
    height: '18px',
    backgroundColor: '#38bdf8',
    borderRadius: '12px',
    border: '2px solid #0f172a',
    boxShadow: 'inset -2px -2px 0px rgba(255,255,255,0.6)',
  },
  // Mochila del personaje
  backpack: {
    position: 'absolute',
    top: '14px',
    left: '-10px',
    width: '12px',
    height: '35px',
    backgroundColor: '#dc2626',
    borderRadius: '6px 0 0 6px',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    flex: 1,
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.8rem',
    borderBottom: '1px dashed #334155',
    paddingBottom: '0.3rem',
  },
  label: {
    color: '#94a3b8',
  },
  value: {
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  valueRol: {
    fontWeight: 'bold',
    color: '#fbbf24',
  },
  cardFooter: {
    textAlign: 'center',
    fontSize: '0.65rem',
    color: '#64748b',
    letterSpacing: '0.5px',
  },
};