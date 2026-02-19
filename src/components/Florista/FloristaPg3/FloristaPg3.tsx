import type { FC } from 'react';
import './FloristaPg3.css';
import { CiAlarmOn } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";

// interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}

const FloristaPg3: FC = function () { 
 return (   
   <div className="contentDama">
      <div className='divpag2'>    
            {/* <img src={pagina1} className="pag1" alt="React logo" /> */}
            <div className='fonteAnastasiaFloristaPg3'>
               Florista:
            </div>
            <div className='momentosFelizes'>
              Você vai entrar primeiro que a noiva, como se estivesse contando para todo mundo que um momento muito lindo vai começar.<br/>
              O seu papel é deixar as pessoas felizes! Quando elas virem você passando, vão sentir que o amor está chegando para florir todo o cenário!
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
      <div className="inspireFloristaPg3">
         Continue . . .
         {/* <FaLongArrowAltRight className='setinha'/> */}
      </div>
   </div>
 )
}
export default FloristaPg3;
