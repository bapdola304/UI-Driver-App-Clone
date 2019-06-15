
import * as Types from '../constants/ActiveType';
import callApi from '../callapi/apiCaller';

export const actFetchFiles = (history) =>{
    return (dispatch) =>{
        return  callApi('/file', 'GET', null).then(res => {
            console.log(res.data);
            
            if(res.data.status == false)
                return history.push('/login')           
            return dispatch({
                type: Types.FETCH_FILES,
                payload: res.data
            })
        })
    }
}

export const deleteFile = (id) =>{
    return (dispatch) =>{
        return  callApi('/file/'+ id , 'DELETE', null).then(res => dispatch({
			type: Types.DELETE_FILE,
			payload: id
		}))
    }
}
export const editFileName = (id, fileName) =>{
    return (dispatch) =>{
        return  callApi('/file/'+ id , 'PUT', fileName).then(res => dispatch({
			type: Types.EDIT_FILENAME,
			payload: { id, fileName }
		}))
    }
}
export const addFile = (dataFile) =>{
    return (dispatch) =>{
        return  callApi('/file/', 'POST', dataFile).then(res => {
            console.log(res);
            
            return dispatch({
                type: Types.ADD_FILE,
                payload: res.data
            })
        })
    }
}

// export const FetchFiles = (data) =>{
//     console.log(data);
    
//         return {
//             type : Types.FETCH_FILES,
//             payload : data
//         }
 
  
// }