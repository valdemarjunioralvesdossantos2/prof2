import type { FC } from 'react';
import './DamaPlaca.css';
import pagina1 from '../../assets/convite1.png';
import { useState } from 'react';
import DamaPlacaPg2 from './DamaPlacaPg2/DamaPlacaPg2';
import DamaPlacaPg3 from './DamaPlacaPg3/DamaPlacaPg3';
import DamaPlacaPg4 from './DamaPlacaPg4/DamaPlacaPg4';
import DamaPlacaPg5 from './DamaPlacaPg5/DamaPlacaPg5';
import background from '../../assets/background.png'
interface DamaPlaca {}

const DamaPlaca: FC<DamaPlaca> = function () { 
   const myStyle = {
    backgroundImage: `url(${background})`,
     backgroundSize: '100%', 
    backgroundRepeat: 'no-repeat'
   }
   const [pag, setPag2] = useState(1)
   return (   
   <div className='fundo'  style={myStyle} >
         {pag === 1 && <img src={pagina1} className="pag1" alt="React logo"  onClick={() => setPag2(2)}/>}
         {pag === 2 && <div className='fundo'  onClick={() => setPag2(3)} ><DamaPlacaPg2/></div>}
         {pag === 3 && <div className='fundo'  onClick={() => setPag2(4)} ><DamaPlacaPg3/></div>}
         {pag === 4 && <div className='fundo'  onClick={() => setPag2(5)} ><DamaPlacaPg4/></div>}
         {pag === 5 && <div className='fundo'  onClick={() => setPag2(2)} ><DamaPlacaPg5/></div>}
   </div>
   )
}
export default DamaPlaca;
