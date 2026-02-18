import type { FC } from 'react';
import './DamaFloresPg3.css';
import { CiAlarmOn } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";

// interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}

const DamaFloresPg3: FC = function () { 
 return (   
   <div className="contentDama">
      <div className='divpag2'>    
            {/* <img src={pagina1} className="pag1" alt="React logo" /> */}
            <div className='fonteAnastasiaPg3'>
               Dama das Flores:
            </div>
            <div className='momentosFelizes'>
              A daminha já posicionada no final do corredor, entrega uma única flor a cada padrinho durante o cortejo e cria um momento emocionante e simbólico, onde o padrinho passa a flor para a madrinha, representando carinho, respeito e a bênção do casal.
              
            </div>
            {/* <img src={pagina2} className="pag1" alt="React logo" /> */}
            <div className='fonteAnastasia2'>            
               Local
            </div>
            <div className='resposta'>
               Cerimonial Catanni - Av. Guaianazes, 114 - Das Laranjeiras, Serra
            </div>
             <div className='fonteAnastasia2'>            
               Data:
            </div>
            <div className='resposta'>
               
               <div className="textoEspacado"><LuCalendarDays/>07/11/2026</div> 
               <div className="textoEspacado"><CiAlarmOn/> 16h:20m</div> 
            </div>
            <div className='antecedencia'>
               Chegue com antecedência ao local.
            </div>
      </div>      
      <div className="inspire">
         Continue . . .
         {/* <FaLongArrowAltRight className='setinha'/> */}
      </div>
   </div>
 )
}
export default DamaFloresPg3;
