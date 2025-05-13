import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useState } from 'react'
import MemorialModal from './MemorialModal'
import SpecialStar from './SpecialStar'

export default function StarScene() {
  const [modalOpen, setModalOpen] = useState(false)

  const handleStarClick = () => {
    const audio = new Audio('/pug.mp3')
    audio.play()
    setModalOpen(true)
  }

  return (
    <>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <Stars radius={100} depth={50} count={1000} factor={4} fade />
        <SpecialStar onClick={handleStarClick} />
        <OrbitControls />
      </Canvas>
      <MemorialModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
