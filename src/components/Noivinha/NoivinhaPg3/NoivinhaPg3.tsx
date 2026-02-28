import type { FC } from 'react';
import './NoivinhaPg3.css';
import { CiAlarmOn } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";

// interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}

const NoivinhaPg3: FC = function () { 
 return (   
   <div className="contentDama">
      <div className='divpag2'>    
            {/* <img src={pagina1} className="pag1" alt="React logo" /> */}
            <div className='fonteAnastasiaNoivinhaPg3'>
               Noivinha:
            </div>
            <div className='NoivinhaPg3Terno'>
               Com seu vestido lindo e seu sorriso, você é como uma pequena estrela que ilumina o caminho. Todo mundo vai ficar encantado ao ver você passar!<br/>
               Prepare o coração dos convidados com o seu charme, avisando que o amor está chegando! 
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
      <div className="inspireNoivinhaPg3">
         Continue . . .
         {/* <FaLongArrowAltRight className='setinha'/> */}
      </div>
   </div>
 )
}
export default NoivinhaPg3;
