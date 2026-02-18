import type { FC } from 'react';
import './DamaFloresPg4.css';
import vestidos from '../../../assets/damaflores/vestidos.png'

// interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}

const DamaFloresPg4: FC = function () { 
 return (   
   <div className='divpagDama3'>    
         <div className='nomeDama'>
            Inspire-se
         </div>
            
         <div className='vestidos'> 
            
          <div className='exemplo1'> Bege Claro </div>
          <img src={vestidos} className="pag1" alt="React logo" />
            
         </div>
         <div className='versiculo'>
            Sabemos que você fica linda de qualquer forma, 
            porém gostaríamos que se inspira-se nesse modelo, 
            mas fique a vontade para escolher o seu próprio modelo desde que seja um vestido rodado,
            da cor bege com laço grande nas costas na cor verde oliva.
            <div className="exemplo2"></div>
         </div>
         <div className="nomeData">
            Valdemar e Kêmilly<br />
            07/11/2026
         </div>
   </div>
 )
}
export default DamaFloresPg4;
