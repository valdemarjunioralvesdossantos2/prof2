import type { FC } from 'react';
import './NoivinhoPg3.css';
import { CiAlarmOn } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";

// interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}

const NoivinhoPg3: FC = function () { 
 return (   
   <div className="contentDama">
      <div className='divpag2'>    
            {/* <img src={pagina1} className="pag1" alt="React logo" /> */}
            <div className='fonteAnastasiaNoivinhoPg3'>
               Noivinho:
            </div>
            <div className='noivinhoPg3Terno'>
               Você é o líder do cortejo. Com seu passo firme e seu carisma, você mostra para todos que o caminho está pronto para a festa.<br/>
               Seja Cavalheiro: Você vai entrar com a noivinha, sua missão é ser o parceiro dela nessa aventura, caminhando juntos para deixar tudo mais bonito.  
            </div>
            {/* <img src={pagina2} className="pag1" alt="React logo" /> */}
            <div className='fonteAnastasiaTitulos'>            
               Local
            </div>
            <div className='resposta'>
               Cerimonial Catanni - Av. Guaianazes, 114 - Das Laranjeiras, Serra
            </div>
             <div className='fonteAnastasiaTitulos'>            
               Data:
            </div>
            <div className='resposta'>
               
               <div className="textoEspacadoFlor3"><LuCalendarDays/> 07/11/2026</div> 
               <div className="textoEspacadoFlor3"><CiAlarmOn/> 16h:20m</div> 
            </div>
            <div className='antecedencia'>
               Chegue com antecedência ao local.
            </div>
      </div>      
      <div className="inspireNoivinhoPg3">
         Continue . . .
         {/* <FaLongArrowAltRight className='setinha'/> */}
      </div>
   </div>
 )
}
export default NoivinhoPg3;
