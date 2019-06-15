
import * as Types from '../constants/ActiveType';

var initState = {
    userInfor : null,
    arrFiles : []
};
const Files = (state = initState, action) =>{
    switch(action.type){
        case Types.FETCH_FILES:
            console.log(action.payload.userInfor);
                 
            // state.arrFiles = action.payload.data;
            console.log({
                ...state,
                arrFiles : action.payload.data,
                userInfor: action.payload.userInfor,
                status : action.payload.status
            });
            
            return {
                ...state,
                arrFiles : action.payload.data,
                userInfor: action.payload.userInfor
            }
        case Types.DELETE_FILE:     
            state.arrFiles = state.arrFiles.filter(file => file._id !== action.payload)
            return {...state}
        case Types.EDIT_FILENAME:
            var i = 0;
            state.arrFiles.map((file, index) =>{
                if(file._id === action.payload.id){
                    i = index
                }
            })
            state.arrFiles[i].filename = action.payload.fileName;            
            return {...state}
        case Types.ADD_FILE:
            console.log(action.payload);
            state.arrFiles = action.payload.data;                
            return {...state, status : true}
            
        default : return state
    }
}
export default Files