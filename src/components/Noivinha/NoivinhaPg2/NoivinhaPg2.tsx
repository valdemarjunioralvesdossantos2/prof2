import type { FC } from 'react';
import './NoivinhaPg2.css';

// interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}

const NoivinhaPg2: FC = function () { 
 return (   
   <div className="contentDama">
      <div className='divpag2'>    
            {/* <img src={pagina1} className="pag1" alt="React logo" /> */}
            <div className='fonteAnastasia'>
               Maria Cecilia
            </div>
            <div className='momentosFelizes'>
               Os momentos mais importantes da nossa vida ficam mais completos quando compartilhados com pessoas especiais como você!
            </div>
            {/* <img src={pagina2} className="pag1" alt="React logo" /> */}
            <div className='fonteAnastasia2'>            
               Aceita ser nossa
            <br /> 
               <div className='padrinhos'>
                  Noivinha
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
export default NoivinhaPg2;
