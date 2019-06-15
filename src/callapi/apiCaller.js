import axios from 'axios';


export default function callApi(endpiont, method = 'GET', body){
    console.log(body);
    if(method === 'PUT')
        return axios({
            method : method,
            url: endpiont,
            data: {data : body}
        }).catch(err => console.log(err))

    return axios({
            method : method,
            url: endpiont,
            data: body
        }).catch(err => console.log(err))
}