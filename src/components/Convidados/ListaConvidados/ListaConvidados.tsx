import type { FC } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './ListaConvidados.css';
import ConvidadoPresenca from '../ConvidadoPresenca/ConvidadoPresenca';
import { useSearchParams } from 'react-router-dom';
import api from "../../../services/api";


interface Convidado {
   idexterno: string,
   nome: string,
   codFamilia: number,
   idade: number,
   crianca: string,
   confirmacao1: string,
   telefone: string
}

interface ListaConvidadoProps {
   tipo: number,
   convidadoBusca: Convidado | null
   callbackReload: () => void | null
}

const ListaConvidados: FC<ListaConvidadoProps> = function (props) { 
   let id: string | null;
   id = '0';
   const [convidados, setConvidados] = useState([]);
   if (props.tipo == 1) {
      let [searchParams] = useSearchParams();
      id = searchParams.get('id');    
   }
   if (id == null) {
      id = '0';
   }
   function convidadoListInit(){
      api.get("convidados", {
            params:{
               id: id
            }
      }).then((res)=>{
            console.log(res.data);
            if (id != null) {
               setConvidados(res.data.familia);   
               props.callbackReload();            
            } else {
               setConvidados(res.data);
               props.callbackReload();
            }
      })
      
   }
   useEffect( convidadoListInit, [])

 return (   
      <div className="convidados"> 
         {
            convidados.map(( (item:Convidado) =>(
               <div className="convidado" key={item.idexterno}>
                  <ConvidadoPresenca idexterno={item.idexterno} nome={item.nome} confirmacao1={item.confirmacao1} 
                     idade={item.idade} crianca={item.crianca}
                     callbackReload={convidadoListInit} />
               </div>  
            )))
         } 
      </div>
 )
}
export default ListaConvidados;
