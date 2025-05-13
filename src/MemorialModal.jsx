import Modal from 'react-modal'
import './MemorialModal.css'
import frases from './frases.json' // Importamos el archivo de frases

Modal.setAppElement('#root')

export default function MemorialModal({ isOpen, onClose }) {
  // Función para obtener una frase aleatoria
  const getRandomFrase = () => {
    const randomIndex = Math.floor(Math.random() * frases.length)
    return frases[randomIndex]
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <h2>🌈 En memoria de Nala</h2>
      <img src="/nala.jpg" alt="Nala" className="dog-image" />
      <p>{getRandomFrase()}</p> {/* Mostrar la frase aleatoria */}
      <button onClick={onClose}>Cerrar</button>
    </Modal>
  )
}
