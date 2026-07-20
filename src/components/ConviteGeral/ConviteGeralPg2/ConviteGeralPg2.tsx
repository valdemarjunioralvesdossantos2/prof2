import type { FC } from 'react';
import { Link } from 'react-router-dom';
import './ConviteGeralPg2.css';
import localizacao from '../../../assets/convite-geral/localizacao.svg';
import check from '../../../assets/convite-geral/check.svg';
// interface PadrinhosPg2Props {madrinha: string | null, padrinho: string | null}
import { useSearchParams } from 'react-router-dom';
const ConviteGeralPg2: FC = function () { 
   let [searchParams] = useSearchParams();
   const id = searchParams.get('id');    
 return (   
   <div className="contentPg2ConviteGeral">
      <div className="vkComBarraNoMeioPg2">
        V | K
      </div>
      <div className="textoInicial">
         ENVOLVIDOS POR UM VERDADEIRO AMOR, DECIDIMOS VIVER UM PARA O OUTRO E AMBOS PARA DEUS, ASSIM:<br/><br/><br/>

         “AONDE QUER QUE FORES IRE E ONDE QUER QUE POUSARES, ALI POUSAREI, O TEU POVO SERÁ O MEU POVO E O TEU DEUS SERÁ O MEU DEUS”
      </div>
      
      <div className="bencaoPais">
          COM A BENÇÃO DE DEUS E SEUS PAIS
         <div className="pais">
            <div className="paisDoNoivo">
               VALDEMAR DE SOUZA SANTOS<br/>
               LUCENI ALVES DOS SANTOS
            </div>
            <div className="paisDaNoiva">
               GERSON RUBENS A. DE ALMEIDA<br/>
               OZILÉIA PEREIRA T. DE ALMEIDA
            </div>
            
         </div>
      </div>
      
      <div className="nomesPag2">
         Kêmilly &<br/> Valdemar
      </div>
      
      <div className="textoInicial">
         CONVIDAM PARA A CERIMÔNIA DE CASAMENTO
      </div>

      <div className="dataEEndereco">
         <div className="data">
            07<br/>
            11<br/>
            26<br/>
            <div className="horas">16h</div>
         </div>
         <div className="endereco">
            <div className="cerimonial">
               CERIMONIAL CATANNI
            </div>
            <div className="localRuaNum">
               Av. Guaianazes, 114<br/>Das Laranjeiras, Serra-ES,<br/> 29175-603
            </div>
         </div>
      </div>

      <div className="iconesPg2">
         <div className="cliqueIcones">CLIQUE NOS ÍCONES PARA ACESSAR</div>
         <div className="localizacaoEConfirmar">
            <div className="iconepg2">
               LOCALIZAÇÃO
               <div className="imagemIconePg2" >
                  <a href="https://maps.app.goo.gl/neoDHM8y9fajRK7a7" target="_blank">
                     <img src={localizacao} className="pag1" alt="React logo" />
                  </a>
               </div>
      
            </div>
            <div className="iconepg2">
               CONFIRMAR PRESENÇA
               <div className="imagemIconePg2">
                  <Link  to={"/confirmarPresenca?id="+id}>
                     <img src={check} className="pag1" alt="React logo" />
                  </Link >
               </div>      
            </div>
         </div>
      </div>

      <div className="paraQueVejam">
         “PARA QUE TODOS VEJAM, E SAIBAM, E CONSIDEREM, E JUNTAMENTE ENTENDAM, QUE A MÃO DO SENHOR FEZ ISSO.”
      </div>
   </div>
 )
}
export default ConviteGeralPg2;
