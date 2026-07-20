import type { FC } from 'react';
import './ConviteGeralPg1.css';
import imgPortao from '../../../assets/convite-geral/portao-flores.png'
import imgCliqueAqui from '../../../assets/convite-geral/clique-aqui.png'

// interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}

const ConviteGeralPg2: FC = function () { 
 return (   
   <div className="contentPg1ConviteGeral">
      <div className="textoCurvo">
         <svg xmlns="http://www.w3.org/2000/svg" width="600px" height="150px" viewBox="0 0 600 150">
            <defs>
               <path id="curvaDoTexto" d="M 50,180 a 300,300 0 0,1 500,0" fill="none" />
            </defs>
            
            <text  fill="#6c704c">
               <textPath href="#curvaDoTexto" startOffset="50%" text-anchor="middle">
                  Nosso Casamento
               </textPath>
            </text>
         </svg>


      </div>
      <div className="nomesConvite">
         Valdemar &  Kemilly
      </div>
      <div className="imagemPortao">
          <img src={imgPortao} className="pag1" alt="React logo" />
      </div>

      <div className="cliqueParaAbrir">
         Clique Para Abrir. <img src={imgCliqueAqui} alt="React logo" />
      </div>

      <div className="vkComBarraNoMeio">
        V | K
      </div>
   </div>
 )
}
export default ConviteGeralPg2;
