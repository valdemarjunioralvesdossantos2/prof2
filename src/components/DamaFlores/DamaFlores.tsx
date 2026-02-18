import type { FC } from 'react';
import './DamaFlores.css';
import pagina1 from '../../assets/convite1.png';
import { useState } from 'react';
import DamaFloresPg2 from './DamaFloresPg2/DamaFloresPg2';
import DamaFloresPg3 from './DamaFloresPg3/DamaFloresPg3';
import DamaFloresPg4 from './DamaFloresPg4/DamaFloresPg4';
import background from '../../assets/background.png'
interface DamaFlores {}

const DamaFlores: FC<DamaFlores> = function () { 
   const myStyle = {
    backgroundImage: `url(${background})`,
     backgroundSize: '100%', // Add other CSS properties as needed
    backgroundRepeat: 'no-repeat'
   }
   const [pag, setPag2] = useState(1)
   return (   
   <div className='fundo'  style={myStyle} >
         {pag === 1 && <img src={pagina1} className="pag1" alt="React logo"  onClick={() => setPag2(2)}/>}
         {pag === 2 && <div className='fundo'  onClick={() => setPag2(3)} ><DamaFloresPg2/></div>}
         {pag === 3 && <div className='fundo'  onClick={() => setPag2(4)} ><DamaFloresPg3/></div>}
         {pag === 4 && <div className='fundo'  onClick={() => setPag2(2)} ><DamaFloresPg4/></div>}
   </div>
   )
}
export default DamaFlores;
