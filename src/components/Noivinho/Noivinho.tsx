import type { FC } from 'react';
import './Noivinho.css';
import pagina1 from '../../assets/convite1.png';
import { useState } from 'react';
import NoivinhoPg2 from './NoivinhoPg2/NoivinhoPg2';
import NoivinhoPg3 from './NoivinhoPg3/NoivinhoPg3';
import NoivinhoPg4 from './NoivinhoPg4/NoivinhoPg4';
import background from '../../assets/background.png'
interface Noivinho {}

const Noivinho: FC<Noivinho> = function () { 
   const myStyle = {
    backgroundImage: `url(${background})`,
     backgroundSize: '100%', // Add other CSS properties as needed
    backgroundRepeat: 'no-repeat'
   }
   const [pag, setPag2] = useState(1)
   return (   
   <div className='fundo'  style={myStyle} >
         {pag === 1 && <img src={pagina1} className="pag1" alt="React logo"  onClick={() => setPag2(2)}/>}
         {pag === 2 && <div className='fundo'  onClick={() => setPag2(3)} ><NoivinhoPg2/></div>}
         {pag === 3 && <div className='fundo'  onClick={() => setPag2(4)} ><NoivinhoPg3/></div>}
         {pag === 4 && <div className='fundo'  onClick={() => setPag2(2)} ><NoivinhoPg4/></div>}
   </div>
   )
}
export default Noivinho;
