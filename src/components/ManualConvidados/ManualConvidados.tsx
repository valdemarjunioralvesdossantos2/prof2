import type { FC } from 'react';
import './ManualConvidados.css';

import confirmePresenca from '../../assets/manual-convidado/confirme-presenca.svg';
import pontual from '../../assets/manual-convidado/pontual.svg';
import convidadonaoconvida from '../../assets/manual-convidado/convidadonaoconvida.svg';
import fotografo from '../../assets/manual-convidado/fotografo.png';
import naousebranco from '../../assets/manual-convidado/naousebranco.png';
import naouseverde from '../../assets/manual-convidado/naouseverde.png';
import naouseterracota from '../../assets/manual-convidado/naouseterracota.png';
import naousemarsala from '../../assets/manual-convidado/naousemarsala.png';
import aproveite from '../../assets/manual-convidado/aproveite.png';
import confusao from '../../assets/manual-convidado/confusao.png';
import negativos from '../../assets/manual-convidado/negativos.png';
import silencioso from '../../assets/manual-convidado/silencioso.png';
import noivos from '../../assets/manual-convidado/noivos.png';



const ManualConvidados: FC = function () { 
   window.scrollTo(0, 0);
 
   
 return (   
   <div className="contentManualPadrinhos">
      <div className="vkComBarraManual">
        V | K
      </div>
      <div className="proibicoes">
        <div className="linhaInstrucao">
          <div className="instrucao">
            <img src={confirmePresenca} className="instrucaIcone" alt="React logo" />
            <div className="instrucaTexto">CONFIRME PRESENÇA</div>
          </div>
          <div className="instrucao">
            <img src={pontual} className="instrucaIcone" alt="React logo" />
            <div className="instrucaTexto">SEJA<br/> PONTUAL</div>
          </div>
          <div className="instrucao">
            <img src={convidadonaoconvida} className="instrucaIcone" alt="React logo" />
            <div className="instrucaTexto">CONVIDADO NÃO CONVIDA</div>
          </div>
          <div className="instrucao">
            <img src={fotografo} className="instrucaIcone" alt="React logo" />
            <div className="instrucaTexto">NÃO ATRAPALHE O FOTÓGRAFO</div>
          </div>
        </div>



        <div className="linhaInstrucao">
          <div className="instrucao">
            <img src={naousebranco} className="instrucaIcone" alt="React logo" />
            <div className="instrucaTexto">NÃO USE BRANCO</div>
          </div>
          <div className="instrucao">
            <img src={naouseverde} className="instrucaIcone" alt="React logo" />
            <div className="instrucaTexto">NÃO USE VERDE OLIVA</div>
          </div>
          <div className="instrucao">
            <img src={naouseterracota} className="instrucaIcone" alt="React logo" />
            <div className="instrucaTexto">NÃO USE TERRACOTA</div>
          </div>
          <div className="instrucao">
            <img src={naousemarsala} className="instrucaIcone" alt="React logo" />
            <div className="instrucaTexto">NÃO USE MARSALA</div>
          </div>
        </div>

        <div className="linhaInstrucao">
          <div className="instrucao">
            <img src={aproveite} className="instrucaIcone" alt="React logo" />
            <div className="instrucaTexto">APROVEITE MUUUITO!</div>
          </div>
          <div className="instrucao">
            <img src={confusao} className="instrucaIcone" alt="React logo" />
            <div className="instrucaTexto">EVITE CONFUSÃO</div>
          </div>
          <div className="instrucao">
            <img src={negativos} className="instrucaIcone" alt="React logo" />
            <div className="instrucaTexto">NÃO FAÇA COMENTÁRIOS NEGATIVOS</div>
          </div>
          <div className="instrucao">
            <img src={silencioso} className="instrucaIcone" alt="React logo" />
            <div className="instrucaTexto">DEIXE O SEU CELULAR NO SILENCIOSO</div>
          </div>
        </div>
        <div className="linhanoivos">
          <img src={noivos} alt="React logo" />
          <div className="noivosTexto">NÃO SAIA SEM SE DESPEDIR DOS NOIVOS!</div>
        </div>
      </div>
      
   </div>
 )
}
export default ManualConvidados;
