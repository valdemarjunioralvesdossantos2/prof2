import type { FC } from 'react';
import './NoivinhoPg5.css';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

// interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}

const NoivinhoPg5: FC = function () { 
 return (   
   <div  onClick={(e) => e.stopPropagation()} className='divpagNoivinho5'>    
         <div className='referencias'>
            Referências:
         </div>
            
         <div > 
            <div className='containerReferencias'>
               <div className="cointainerRef">
                  <div className='nomeReferencia'> <FaInstagram /> Suely Locação: </div>
                  <a href="https://www.instagram.com/suelylocacaoderoupas/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/suelylocacaoderoupas</a>   
               </div>
               <div className="cointainerRef" >
                  <div className='nomeReferencia'> <FaInstagram /> Kazzar Trajes Masculinos: </div>
                  <a  href="https://www.instagram.com/kazzarnoivas/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/kazzarnoivas</a>
                  <a  href="https://api.whatsapp.com/send/?phone=5527997150397&text=Olá, Serei o noivinho do casamento do Valdemar e da Kêmilly, tenho interesse em ver os ternos infantis." target="_blank" rel="noopener noreferrer"><FaWhatsapp /> 27 997150397</a>
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
export default NoivinhoPg5;
