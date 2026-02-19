import type { FC } from 'react';
import './FloristaPg2.css';

// interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}

const FloristaPg2: FC = function () { 
 return (   
   <div className="contentDama">
      <div className='divpag2'>    
            {/* <img src={pagina1} className="pag1" alt="React logo" /> */}
            <div className='fonteAnastasia'>
               Rhianny
            </div>
            <div className='momentosFelizes'>
               Temos uma missão muito importante e só a princesinha do titio pode cumprir: florir o caminho para a nossa união!
            </div>
            {/* <img src={pagina2} className="pag1" alt="React logo" /> */}
            <div className='fonteAnastasia2'>            
               Aceita ser nossa
            <br /> 
               <div className='padrinhos'>
                  Florista
                  <div className='interroga'>?</div>
               </div>
            </div>
            <div className='versiculo'>
               Colossenses 3:14<br />
               E, sobre tudo isto, revesti-vos de amor, que é o vínculo da perfeição.
            </div>
            <div className="nomeData">
               Valdemar e Kêmilly<br />
               07/11/2026
            </div>
      </div>      
      <div className="inspire">
         Continue . . .
         {/* <FaLongArrowAltRight className='setinha'/> */}
      </div>
   </div>
 )
}
export default FloristaPg2;
