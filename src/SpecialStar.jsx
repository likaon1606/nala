import { Html } from '@react-three/drei'

export default function SpecialStar({ onClick }) {
  return (
    <Html
      position={[2, 1, -3]}
      distanceFactor={10}
      transform
    >
      <div
        onClick={onClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(0, 0, 0, 0.6)',
          padding: '6px 10px',
          borderRadius: '12px',
          color: 'white',
          fontSize: '14px',
          boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(4px)',
          cursor: 'pointer',
          transition: 'transform 0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
      >
        <img
          src="/nala.jpg" // Asegúrate de tener esta imagen en public/
          alt="Nala"
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1px solid white'
          }}
        />
        <span>Nala</span>
      </div>
    </Html>
  )
}
