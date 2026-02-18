import type { FC } from 'react';
import './PadrinhosPg2.css';

interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}

const PadrinhosPg2: FC<PadrinhosPg2Props> = function (props) { 
 const soMadPreenchida = props.madrinha !== null &&  props.padrinho === null;
 const soPadPreenchida = props.padrinho !== null && props.madrinha === null;
 const ambosPreenchidos = props.madrinha !== null && props.padrinho !== null;

 return (   
   <div className='divpag2'>    
         {/* <img src={pagina1} className="pag1" alt="React logo" /> */}
         <div className='fonteAnastasia'>
            {props.madrinha} {ambosPreenchidos && '&'} {props.padrinho}
         </div>
         <div className='momentosFelizes'>
            Os momentos mais importantes da nossa vida ficam mais completos quando compartilhados com pessoas especiais como você{ambosPreenchidos && 's'}.
         </div>
         {/* <img src={pagina2} className="pag1" alt="React logo" /> */}
         <div className='fonteAnastasia2'>            
            {soMadPreenchida && 'Aceita ser nossa'}
            {soPadPreenchida && 'Aceita ser nosso'}
            {ambosPreenchidos && 'Aceitam ser nossos'}
           <br /> 
            <div className='padrinhos'>
               {soMadPreenchida && 'madrinha'}
               {soPadPreenchida && 'padrinho'}
               {ambosPreenchidos && 'padrinhos'}
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
 )
}
export default PadrinhosPg2;
