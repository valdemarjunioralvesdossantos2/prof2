import type { FC } from 'react';
import './ImersosPg2.css';
import noivosImersos from '../../../assets/imersos/imersos-noivos.png';


const ImersosPg2: FC = function () { 

 return (   
   <div className='divpag2Imersos'>    
         <div className='topoImersosPg2'>
            Com muito carinho <br/>
            Queremos compartilhar um momento especial das nossas vidas com você!
            <img src={noivosImersos} alt="React logo" />
            Nosso casamento acontecerá no dia 07 de novembro de 2026.
           
         </div>
         <div className='rodapeImersos'>
            <div className='versiculoImersosPg2'>
               Colossenses 3:14<br />
               E, sobre tudo isto, revesti-vos de amor, que é o vínculo da perfeição.
            </div>
            <div className="nomeDataImersos">
               Valdemar e Kêmilly<br />
               07/11/2026
            </div>
               
            <div className="continueImersos">
               Continue . . .
            </div>
         </div>
   </div>
 )
}
export default ImersosPg2;
