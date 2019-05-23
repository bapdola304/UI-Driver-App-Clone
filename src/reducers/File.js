
import * as Types from '../constants/ActiveType';

var initState = {
    userInfor : null,
    arrFiles : [],
    status : null
};
const Files = (state = initState, action) =>{
    switch(action.type){
        case Types.FETCH_FILES:      
            state.arrFiles = action.payload.data;
            state.userInfor = action.payload.userinfor.infor;
            return {...state}
        case Types.DELETE_FILE:     
            state.arrFiles = state.arrFiles.filter(file => file._id != action.payload)
            return {...state}
        case Types.EDIT_FILENAME:
            var i = 0;
            state.arrFiles.map((file, index) =>{
                if(file._id == action.payload.id){
                    i = index
                }
            })
            state.arrFiles[i].filename = action.payload.fileName;            
            return {...state}
        case Types.ADD_FILE:
            console.log(action.payload);
            state.arrFiles = action.payload.data;
            state.status = true;    
            return {...state}
            
        default : return state
    }
}
export default Files