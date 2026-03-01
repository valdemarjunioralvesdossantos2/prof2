import type { FC } from 'react';
import './NoivinhoPg4.css';
import terno from '../../../assets/noivinho/terno.png'

// interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}

const NoivinhoPg4: FC = function () { 
 return (   
   <div className="contentDama">
      <div className='divpagnoivinho4'>    
            <div className='nomeDama'>
               Inspire-se
            </div>
               
            <div className='ternoPlaca'> 
               <div className='exemploTerno1'> Cinza Claro </div>
               <img src={terno} alt="React logo" />
               
            </div>
            <div className='versiculo'>
               Sabemos que você fica lindo de qualquer forma, 
               porém gostaríamos que se inspira-se nesse modelo, 
               mas fique a vontade para escolher o seu próprio modelo de terno, desde que seja da cor cinza claro!<br/>
               Ah... Lembre gravata de borboleta e tênis branco ou sapato marrom!
            </div>
            <div className="nomeData">
               Valdemar e Kêmilly<br />
               07/11/2026
            </div>
      </div>
      <div className="inspireNoivinhoPg4">
         Continue . . .
      </div>
   </div>
 )
}
export default NoivinhoPg4;
