import axios from 'axios';



const api = axios.create({

    baseURL: 'https://vladkemicasamento.gotdns.ch/backend',

})
api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default api;

interface Contadores{
    total: number
    numConfirmados: number
    numNegados: number
    numPagantes100: number
    numPagantes0: number
    numPagantesConfirmados: number
}

export async function count(): Promise<Contadores>
{
    let contadores: Contadores = {
        total: 0,
        numConfirmados: 0,
        numNegados: 0,
        numPagantes100: 0,
        numPagantes0: 0,
        numPagantesConfirmados: 0
    };
    await api.get("count", {
        params:{}
    }).then((res)=>{
        console.log(res.data);
        contadores = res.data as Contadores;
    }).catch(()=>{
        contadores = {
            total: 0,
            numConfirmados: 0,
            numNegados: 0,
            numPagantes100: 0,
            numPagantes0: 0,
            numPagantesConfirmados: 0
        }
    });
    
    return contadores;
}

