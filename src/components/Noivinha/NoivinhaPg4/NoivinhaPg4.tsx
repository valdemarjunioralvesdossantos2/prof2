import type { FC } from 'react';
import './NoivinhaPg4.css';
import terno from '../../../assets/noivinha/exemplo-vestido.png'

const NoivinhaPg4: FC = function () { 
 return (   
   
   <div className="contentDama">
      <div className='divpagDama3'>    
            <div className='nomeDama'>
               Inspire-se
            </div>
               
            <div className='noivinhaPlaca'> 
               <div className='exemploVestido1'> Branco </div>
               
               <img src={terno} alt="React logo" />
               
            </div>
            <div className='versiculo'>
               Sabemos que você fica linda de qualquer forma, 
               porém gostaríamos que se inspira-se nesse modelo, 
               mas fique a vontade para escolher o seu próprio modelo de vestido, desde que seja branco no estilo de noivinha mesmo!<br/>
               Ah... Você entrara com um buquê que te daremos no dia do casamento, mas o penteado fica a sua escolha!
            </div>
            <div className="nomeData">
               Valdemar e Kêmilly<br />
               07/11/2026
            </div>
      </div>
      <div className="inspireNoivinhaPg4">
         Continue . . .
      </div>
   </div>
 )
}
export default NoivinhaPg4;
