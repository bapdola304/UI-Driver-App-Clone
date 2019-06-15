import * as Types from '../constants/ActiveType';
const initialState = {
	isAuthenticated: null,
	user: null
}
export default function (state = initialState, action) {
	switch (action.type) {
		case Types.LOGIN:
			console.log(action.payload);
			state.isAuthenticated = action.payload.status;
			state.user = action.payload.user
            return {...state}            
		default:
			console.log(state);
			
			return {...state} 
	}
}