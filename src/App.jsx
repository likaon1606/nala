import StarScene from './StarScene'

function App() {
  return (
    <div className="app">
      <h1>🌟 En memoria de Nala</h1>
      <p>Una estrella que siempre brillará...</p>

      <div className="star-message">
        🌟 Presiona mi estrella para recordarme con alegría...
      </div>

      <div className="canvas-container">
        <StarScene />
      </div>
    </div>
  )
}

export default App
