import type { FC } from 'react';
import './Florista.css';
import pagina1 from '../../assets/convite1.png';
import { useState } from 'react';
import FloristaPg2 from './FloristaPg2/FloristaPg2';
import FloristaPg3 from './FloristaPg3/FloristaPg3';
import FloristaPg4 from './FloristaPg4/FloristaPg4';
import background from '../../assets/background.png'
import FloristaPg5 from './FloristaPg5/FloristaPg5';
interface Florista {}

const Florista: FC<Florista> = function () { 
   const myStyle = {
    backgroundImage: `url(${background})`,
     backgroundSize: '100%', // Add other CSS properties as needed
    backgroundRepeat: 'no-repeat'
   }
   const [pag, setPag2] = useState(1)
   return (   
   <div className='fundo'  style={myStyle} >
         {pag === 1 && <img src={pagina1} className="pag1" alt="React logo"  onClick={() => setPag2(2)}/>}
         {pag === 2 && <div className='fundo'  onClick={() => setPag2(3)} ><FloristaPg2/></div>}
         {pag === 3 && <div className='fundo'  onClick={() => setPag2(4)} ><FloristaPg3/></div>}
         {pag === 4 && <div className='fundo'  onClick={() => setPag2(5)} ><FloristaPg4/></div>}
         {pag === 5 && <div className='fundo'  onClick={() => setPag2(2)} ><FloristaPg5/></div>}
   </div>
   )
}
export default Florista;
