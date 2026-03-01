import type { FC } from 'react';
import './Noivinha.css';
import pagina1 from '../../assets/convite1.png';
import { useState } from 'react';
import NoivinhaPg2 from './NoivinhaPg2/NoivinhaPg2';
import NoivinhaPg3 from './NoivinhaPg3/NoivinhaPg3';
import NoivinhaPg4 from './NoivinhaPg4/NoivinhaPg4';
import background from '../../assets/background.png'
import NoivinhaPg5 from './NoivinhaPg5/NoivinhaPg5';
interface Noivinha {}

const Noivinha: FC<Noivinha> = function () { 
   const myStyle = {
    backgroundImage: `url(${background})`,
     backgroundSize: '100%', // Add other CSS properties as needed
    backgroundRepeat: 'no-repeat'
   }
   const [pag, setPag2] = useState(1)
   return (   
   <div className='fundo'  style={myStyle} >
         {pag === 1 && <img src={pagina1} className="pag1" alt="React logo"  onClick={() => setPag2(2)}/>}
         {pag === 2 && <div className='fundo'  onClick={() => setPag2(3)} ><NoivinhaPg2/></div>}
         {pag === 3 && <div className='fundo'  onClick={() => setPag2(4)} ><NoivinhaPg3/></div>}
         {pag === 4 && <div className='fundo'  onClick={() => setPag2(5)} ><NoivinhaPg4/></div>}
         {pag === 5 && <div className='fundo'  onClick={() => setPag2(2)} ><NoivinhaPg5/></div>}
   </div>
   )
}
export default Noivinha;
