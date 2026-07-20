import type { FC } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaCheck, FaRegClone} from "react-icons/fa"
import { IoMdClose } from "react-icons/io";
import './Convidados.css';
import {count} from "../../services/api";
import api from "../../services/api";


import { DataGrid } from '@mui/x-data-grid';
import type { GridRenderCellParams, GridRowParams } from '@mui/x-data-grid';

interface Convidado {
   idexterno: string,
   nome: string,
   idfamilia: number,
   confirmacao1: string,
   textoConfirma: string,
   telefone: string,
   faixapreco: number,
   textoFaixa: string
}



const Convidados: FC = function () { 
   
  const [numConvidadosTotal, setNumConvidadosTotal] = useState(0);
  const [numConfirmados, setNumConfirmados] = useState(0);
  const [numNegados, setNumNegados] = useState(0);
  const [numPagantes, setNumPagantes] = useState(0);
  const [numPagantesConfirmados, setNumPagantesConfirmados] = useState(0);

  const [convidados, setConvidados] = useState<Convidado[]>([]);


  const columns = [
    {
      field: 'confirmar',
      headerName: 'Confirmar',
      width: 150,
      sortable: false,
      filterable: false,
      renderCell: (params: GridRenderCellParams) => {
          return (
            <div className="botoesRow">
              <button onClick={()=>{handleConfirmar(params.row.idexterno, true)}} disabled={false} className="botaoConvidadoPresencaConvidados btConfirmarConvidados">
                      <FaCheck color='#000000' size={'15px'}/>
              </button>
              <button onClick={()=>{handleConfirmar(params.row.idexterno, false)}} disabled={false} className="botaoConvidadoPresencaConvidados btNegarConvidados">
                         <IoMdClose color='#000000' size={'15px'}/>
              </button>

            </div>
          );
      }
  },  
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'idexterno', headerName: 'ID', width: 100 },
  { field: 'nome', headerName: 'Nome', width: 250 },
  { field: 'idfamilia', headerName: 'Família', width: 25 },
  { field: 'textoConfirma', headerName: 'Status', width: 200 },
  { field: 'textoFaixa', headerName: 'Pagante', width: 200 },
  { field: 'idade', headerName: 'Idade', width: 25 },
  { 
    field: 'gerarlink',
      headerName: 'Gerar Link',
      width: 400,
      sortable: false, // Não faz sentido ordenar por botão
      filterable: false, // Não faz sentido filtrar por botão
      renderCell: (params: GridRenderCellParams) => {
          return (
            <div className="botoesRow">
              <button onClick={()=>{copiarTextLink(params.row.idexterno)}} disabled={false} className="botaoConvidadoPresencaConvidados btCopiarConvidados">
                      <FaRegClone  color='#000000' size={'15px'}/>
              </button>
              {"http://" + window.location.host.toString() + "/convite?id="+params.row.idexterno}

            </div>
          );
      }

   }

  ];


  function handleConfirmar(id:string, confirmar: boolean) {
      if (confirmar){
               
               api.get("responder", {
                     params:{
                        id: id,
                        confirmacao:'S'
                     }
               }).then((res)=>{
                  if(res.status == 200){
                     convidadoListInit();
                  }
               })
               
            
      } else {
               api.get("responder", {
                     params:{
                        id: id,
                        confirmacao:'N'
                     }
               }).then((res)=>{   
                  if(res.status == 200){
                     convidadoListInit();
                  }               
               })  
               
            
      }
   }

  async function iniciaContadores(){    
    let contadores = await count();  
    console.log(contadores);
    setNumConvidadosTotal(contadores.total);  
    setNumConfirmados(contadores.numConfirmados); 
    setNumNegados(contadores.numNegados); 
    setNumPagantes(contadores.numPagantes100); 
    setNumPagantesConfirmados(contadores.numPagantesConfirmados);
      
  }
  iniciaContadores();

   let id: string | null;
   id = null;
   

   function convidadoListInit(){
      api.get("convidados", {
            params:{}
      }).then((res)=>{
            console.log(res.data);
            if (id != null) {
               setConvidados(preencheTextoConfirma(res.data.familia));
               
               iniciaContadores();    
            } else {
               setConvidados(preencheTextoConfirma(res.data));
               iniciaContadores();
            }
      })
      
   }
   useEffect( convidadoListInit, [])
 return (   
   <div className="contentConvidados">
      <div className="vkComBarraConvidados">
        V | K
      </div>
      <div className="contadores">
        <div className="contador">Número total de convidados: {numConvidadosTotal}</div>
        <div className="contador">Número total de confirmados: {numConfirmados}</div>
        <div className="contador">Número total de negados: {numNegados}</div>
        <div className="contador">Número total de Pagantes: {numPagantes}</div>
        <div className="contador">Número total de Pagantes Confirmados: {numPagantesConfirmados}</div>
      </div>
      <div className="filtros">

      </div>
      <div className="convidadosConvidados"> 
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h2>Lista de convidados:</h2>
      
     
        <div style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
          
          <DataGrid
            rows={convidados}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 30, page: 0 },
              },
            }}
            checkboxSelection={false}
            getRowClassName={getRowClassName}
            rowSelection={false}
            
            
          />
        </div>
    </div>
    </div>
   </div>
 )
}
export default Convidados;
const getRowClassName = (params: GridRowParams<Convidado>) => {
    if (params.row.confirmacao1 === 'S') {
      return 'row-verde';
    }
    if (params.row.confirmacao1 === 'N') {
      return 'row-vermelha';
    }
    return '';
  };

const preencheTextoConfirma = (convidados: Convidado[]) : Convidado[] => {
  
  return convidados.map((convidado:Convidado )=>{
    if (convidado.confirmacao1 == 'S'){
      convidado.textoConfirma = 'Confirmado';
    } if (convidado.confirmacao1 == 'N'){
      convidado.textoConfirma = 'Negado';
    } if (convidado.confirmacao1 == 'A'){
      convidado.textoConfirma = 'Aguardando';
    }

    if(convidado.faixapreco == 1){
      convidado.textoFaixa = "Pagante";
    } else {
      convidado.textoFaixa = "Grátis :)";
    }


    return convidado; 
  });
}

const  copiarTextLink = async (idexterno: string) => {
  console.log(idexterno)
  let texto = "https://" + window.location.host.toString() + "/convite?id="+ idexterno;
 
  navigator.clipboard.writeText(texto);
}