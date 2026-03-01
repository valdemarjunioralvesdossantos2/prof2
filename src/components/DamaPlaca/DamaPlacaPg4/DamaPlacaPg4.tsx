import type { FC } from 'react';
import './DamaPlacaPg4.css';
import vestidos from '../../../assets/damaplaca/vestidos.png'

// interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}

const DamaFloresPg4: FC = function () { 
 return (   
   <div className="contentDama">
      <div className='divpagDama3'>    
            <div className='nomeDama'>
               Inspire-se
            </div>
               
            <div className='vestidosPlaca'> 
            <div className="exemplosPlaca">            
            <div className='exemploPlaca1'> Branco </div>
            <div className='exemploPlaca2'> Verde Oliva </div>
            </div>
            <img src={vestidos} className="pag1" alt="React logo" />
               
            </div>
            <div className='versiculo'>
               Sabemos que você fica linda de qualquer forma, 
               porém gostaríamos que se inspira-se nesse modelo, 
               mas fique a vontade para escolher o seu próprio modelo desde que seja um vestido rodado branco com um grande laço nas costas e um pequeno laço na cabeça, ambos na cor verde oliva.
               <div className="exemplo2"></div>
            </div>
            <div className="nomeData">
               Valdemar e Kêmilly<br />
               07/11/2026
            </div>
      </div>      
      <div className="inspireDamaPlacaPg4">
         Continue . . .
      </div>
   </div>
 )
}
export default DamaFloresPg4;
