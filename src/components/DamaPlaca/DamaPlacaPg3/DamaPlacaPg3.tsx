import type { FC } from 'react';
import './DamaPlacaPg3.css';
import { CiAlarmOn } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";

// interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}

const DamaPlacaPg3: FC = function () { 
 return (   
   <div className="contentDama">
      <div className='divpag2'>    
            {/* <img src={pagina1} className="pag1" alt="React logo" /> */}
            <div className='fonteAnastasiaPg3'>
               Daminha da Placa:
            </div>
            <div className='descricaoPlaca'>

              Você será a primeira pessoa a entrar na cerimônia.<br/>
              Sua função é muito importante: você abrirá o caminho para todos nós, carregando a mensagem mais importante do nosso dia:

               <p>"Jesus: Convidado de Honra!"</p>

               Ao entrar com essa placa, você estará lembrando a todos os convidados (e aos nossos corações) que Deus é a base da nossa união e o convidado mais esperado dessa festa.
              
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
export default DamaPlacaPg3;
