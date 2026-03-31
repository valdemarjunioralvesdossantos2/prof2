import { useState } from 'react';
import pagina1 from '../../assets/convite1.png';
import ImersosPg2 from './ImersosPg2/ImersosPg2';
import ImersosPg3 from './ImersosPg3/ImersosPg3';
import background from '../../assets/background.png'
//import viteLogo from '/vite.svg'
import './Imersos.css'

function Imersos() {
  const [pag, setPag] = useState(1)
const myStyle = {
    backgroundImage: `url(${background})`,
     backgroundSize: '100%', // Add other CSS properties as needed
    backgroundRepeat: 'no-repeat'
}
  return (
    <>
      <div className="fundo"  style={myStyle} >
        {pag == 1 && <img src={pagina1} className="pag1" alt="React logo"  onClick={() => setPag(2)}/>}
        {pag == 2 && <div className="fundo"  onClick={() => setPag(3)} ><ImersosPg2/></div>}   
        {pag == 3 && <div className="fundo"  onClick={() => setPag(1)} ><ImersosPg3/></div>}     
        
      </div>
      
    </>
  )
}

export default Imersos
