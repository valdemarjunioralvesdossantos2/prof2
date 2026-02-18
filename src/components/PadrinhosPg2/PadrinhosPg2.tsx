import type { FC } from 'react';
import pagina2 from '../../assets/convite2.png'
import './PadrinhosPg2.css';

interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}

const PadrinhosPg2: FC<PadrinhosPg2Props> = function (props) { 
 const soMadPreenchida = props.madrinha !== null &&  props.padrinho === null;
 const soPadPreenchida = props.padrinho !== null && props.madrinha === null;
 const ambosPreenchidos = props.madrinha !== null && props.padrinho !== null;

 return (   
   <div>    
         {/* <img src={pagina1} className="pag1" alt="React logo" /> */}
         <div className='fonteAnastasia'>
            {props.madrinha} {ambosPreenchidos && '&'} {props.padrinho}
         </div>
         <img src={pagina2} className="pag1" alt="React logo" />
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
   </div>
 )
}
export default PadrinhosPg2;
