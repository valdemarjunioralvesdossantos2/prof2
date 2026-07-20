import type { FC } from 'react';
import './ConviteGeral.css';
import { useState } from 'react';
import ConviteGeralPg1 from './ConviteGeralPg1/ConviteGeralPg1';
import ConviteGeralPg2 from './ConviteGeralPg2/ConviteGeralPg2';
interface ConviteGeral {}

const ConviteGeral: FC<ConviteGeral> = function () { 
   
   const [pag, setPag] = useState(1)
   return (   
   <div className='conviteGeralBackground' >
         {pag === 1 && <div className='fundoConviteGeral'  onClick={() => setPag(2)} ><ConviteGeralPg1/></div>}
         {pag === 2 && <div className='fundoConviteGeral'  onClick={() => setPag(2)} ><ConviteGeralPg2/></div>}
   </div>
   )
}
export default ConviteGeral;
