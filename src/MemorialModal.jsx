import { useMemo } from 'react'
import Modal from 'react-modal'
import './MemorialModal.css'
import frases from './frases.json' // Frases en JSON

Modal.setAppElement('#root')

const imagenes = Array.from({ length: 80 }, (_, i) => {
  const numero = String(i + 2).padStart(4, '0')
  return `/nala/IMG-20250512-WA${numero}.jpg`
})

export default function MemorialModal({ isOpen, onClose }) {
  // Seleccionar una frase e imagen aleatoria solo una vez por apertura
  const fraseAleatoria = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * frases.length)
    return frases[randomIndex]
  }, [isOpen])

  const imagenAleatoria = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * imagenes.length)
    return imagenes[randomIndex]
  }, [isOpen])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <h2>🌈 En memoria de Nala</h2>
      <img src={imagenAleatoria} alt="Nala" className="dog-image" loading='lazy'/>
      <p>{fraseAleatoria}</p>
      <button onClick={onClose}>Cerrar</button>
    </Modal>
  )
}
