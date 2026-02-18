import type { FC } from 'react';
import pagina2 from '../../assets/convite2.png'
import './PadrinhosPg2.css';

interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}

const PadrinhosPg2: FC<PadrinhosPg2Props> = (props) => (
 <div>    
        {/* <img src={pagina1} className="pag1" alt="React logo" /> */}
        <div className='fonteAnastasia'>
         {props.madrinha} & {props.padrinho}
        </div>
        <img src={pagina2} className="pag1" alt="React logo" />
        <div className='fonteAnastasia2'>
         Aceitam ser nossos<br /> 
         <div className='padrinhos'>
            padrinhos
            <div className='interroga'>?</div>
         </div>
        </div>
 </div>
);

export default PadrinhosPg2;
