import type { FC } from 'react';
import './ConfirmarPresenca.css';
import ListaConvidados from '../Convidados/ListaConvidados/ListaConvidados';




const ConfirmarPresenca: FC = function () { 
   
 
   
 return (   
   <div className="contentConfirmarPresenca">
      <div className="vkComBarraConfirmarPresenca">
        V | K
      </div>
      <div className="textoInicialConfirmarPresenca">
            Confirme sua presença!
      </div>
      <ListaConvidados tipo={1} convidadoBusca={null} callbackReload={()=>{}}></ListaConvidados>
      
   </div>
 )
}
export default ConfirmarPresenca;
