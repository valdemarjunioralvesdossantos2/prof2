import type { FC } from 'react';
import { useState } from 'react';
import './ConvidadoPresenca.css';
import { FaCheck } from "react-icons/fa"
import { IoMdClose } from "react-icons/io";
import api from "../../../services/api";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

interface ConvidadoPresencaProps {
      idexterno:string, nome: string | null,
      idade:number, crianca:string,
      confirmacao1: string | null,
      callbackReload: () => void | null
   }

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ConvidadoPresenca: FC<ConvidadoPresencaProps> = function (props) { 
   const [open, setOpen] = useState(false);
   const [idade, setIdade] = useState(0);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   function handleConfirmarCrianca(){
      handleClose();
      api.get("responderCrianca", {
            params:{
               id: props.idexterno,
               idade:idade,
               confirmacao:'S'
            }
      }).then((res)=>{
         if(res.status == 200){
            props.callbackReload();
         }
      })
   }

   function handleConfirmar(confirmar: boolean) {
      if (confirmar){
               if (props.crianca == "S" && props.idade == 0 ){
                  handleOpen();                  
               } else {                  
                  api.get("responder", {
                        params:{
                           id: props.idexterno,
                           confirmacao:'S'
                        }
                  }).then((res)=>{
                     if(res.status == 200){
                        props.callbackReload();
                     }
                  })
               }            
      } else {
               api.get("responder", {
                     params:{
                        id: props.idexterno,
                        confirmacao:'N'
                     }
               }).then((res)=>{   
                  if(res.status == 200){
                     props.callbackReload();
                  }               
               })  
               
            
      }
   }
 return (   
   <div className="convidadoPresenca">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className='cabecalhoCrianca'>
               <div>Informe a idade da criança:</div>
               <input type="number" className='inputIdade' onChange={(e)=>{setIdade(Number(e.target.value))}} />
            </div>
            <div className="botoesCrianca">               
               <button onClick={()=>{handleConfirmarCrianca()}} disabled={false} className="botaoConvidadoPresencaCrianca btConfirmar">
                  Confirmar
               </button>
               <button onClick={()=>{handleClose()}} disabled={false} className="botaoConvidadoPresencaCrianca btNegar" 
                        style={{ marginLeft: '40px' }}
                        >
                  Cancelar
               </button>
            </div>
         </Box>
      </Modal>

      <div className={`convidadoPresencaNome 
                ${ props.confirmacao1 == 'S' ? 'nomeAceito' : props.confirmacao1 == 'N' ? 'nomeNegado': 'nomeAindaNaoConfirmado'}`
         }>
         {props.nome}
      </div>
      <button onClick={()=>{handleConfirmar(true)}} disabled={false} className="botaoConvidadoPresenca btConfirmar">
         <FaCheck color='#000000' size={'40px'}/>
      </button>
      <button onClick={()=>{handleConfirmar(false)}} disabled={false} className="botaoConvidadoPresenca btNegar">
         <IoMdClose color='#000000' size={'40px'}/>
      </button>
   </div>
 )
}
export default ConvidadoPresenca;
