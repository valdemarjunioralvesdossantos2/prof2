import { useState } from 'react'
import pagina1 from './assets/convite1.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //  const myStyle = {
  //   backgroundImage: `url(${pagina1})`,
  //   backgroundSize: '100%', // Add other CSS properties as needed
  //   backgroundRepeat: 'no-repeat'
  // }

  return (
    <>
      <div className="fundo" >
        <img src={pagina1} className="pag1" alt="React logo" />
      </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>  */}
    </>
  )
}

export default App
