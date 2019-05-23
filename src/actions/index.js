
import * as Types from '../constants/ActiveType';
import callApi from '../callapi/apiCaller';

export const actFetchFiles = () =>{
    return (dispatch) =>{
        return  callApi('/file', 'GET', null).then(res => dispatch({
			type: Types.FETCH_FILES,
			payload: res.data
		}))
    }
}

export const deleteFile = (id) =>{
    return (dispatch) =>{
        return  callApi('/file/deleteFile/'+ id , 'DELETE', null).then(res => dispatch({
			type: Types.DELETE_FILE,
			payload: id
		}))
    }
}
export const editFileName = (id, fileName) =>{
    return (dispatch) =>{
        return  callApi('/file/editfilename/'+ id , 'PUT', fileName).then(res => dispatch({
			type: Types.EDIT_FILENAME,
			payload: { id, fileName }
		}))
    }
}
export const addFile = (dataFile) =>{
    return (dispatch) =>{
        return  callApi('/file/', 'POST', dataFile).then(res => dispatch({
			type: Types.ADD_FILE,
			payload: res.data
		}))
    }
}

// export const FetchFiles = (data) =>{
//     console.log(data);
    
//         return {
//             type : Types.FETCH_FILES,
//             payload : data
//         }
 
  
// }