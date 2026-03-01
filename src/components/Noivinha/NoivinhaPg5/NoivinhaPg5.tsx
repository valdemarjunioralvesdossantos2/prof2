import type { FC } from 'react';
import './NoivinhaPg5.css';
import { FaInstagram } from "react-icons/fa";

// interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}

const NoivinhaPg5: FC = function () { 
 return (   
   <div  onClick={(e) => e.stopPropagation()} className='divpagNoivinha5'>    
         <div className='referencias'>
            Referências:
         </div>
            
         <div > 
            <div className='containerReferencias'>
               <div className="cointainerRef">
                  <div className='nomeReferencia'> <FaInstagram /> Nandes Trajes Finos: </div>
                  <a href="https://www.instagram.com/nandestrajesfinos/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/nandestrajesfinos</a>   
               </div>
               <div className="cointainerRef" >
                  <div className='nomeReferencia'> <FaInstagram /> Atelier Eliene Noivas: </div>
                  <a  href="https://www.instagram.com/atelierelienenoivas/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/atelierelienenoivas</a>
               </div>
            </div>
                       
         </div>
         <div className="nomeData">
            Valdemar e Kêmilly<br />
            07/11/2026
         </div>
   </div>
 )
}
export default NoivinhaPg5;
