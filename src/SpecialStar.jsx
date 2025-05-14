import { Html } from '@react-three/drei'

export default function SpecialStar({ onClick }) {
  return (
    <Html
      position={[2, 1, -3]}
      distanceFactor={10}
      transform
      zIndexRange={[0, 1]}
    >
      <div
        onClick={onClick}
        className="special-star"
      >
        <img
          src="/nala.jpg"
          alt="Nala"
          className="special-star__image"
        />
        <span>Nala</span>
      </div>
    </Html>
  )
}
