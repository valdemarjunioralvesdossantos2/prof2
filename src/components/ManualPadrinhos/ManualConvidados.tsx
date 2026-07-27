import type { FC } from 'react';
import './ManualConvidados.css';




const ManualConvidados: FC = function () { 
   
 
   
 return (   
   <div className="contentConfirmarPresenca">
      <div className="vkComBarraConfirmarPresenca">
        V | K
      </div>
      <div className="proibicoes">
        <p className="tituloCoresProibida">
              Não Utilize as seguintes cores:
        </p>
        <div className="coresProibidas">
            
            <div className="corProibida" style={{backgroundColor: "#FFFFFF"}}>
              Branco
            </div>
            <div className="corProibida" style={{backgroundColor: "#F5F5F0"}}>
              Off-White
            </div>
             <div className="corProibida" style={{backgroundColor: "#495a26"}}>
              Verde Oliva
            </div>           
        </div>
        <div className="coresProibidas">
            
            <div className="corProibida" style={{backgroundColor: "#E35336"}}>
              Terracota
            </div>
            <div className="corProibida" style={{backgroundColor: "#964F4C"}}>
              Marsala
            </div>            
        </div>
      </div>
      
   </div>
 )
}
export default ManualConvidados;
