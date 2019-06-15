
import * as Types from '../constants/ActiveType';
import callApi from '../callapi/apiCaller';
import setAuthHeader from '../utils/setAuthHeader'
export const loginUser = (userData) => {
    return (dispatch) => {
        return callApi('/user/login', 'POST', userData).then(res => {
            localStorage.setItem('token', res.data.token);
            setAuthHeader(res.data.token);
            dispatch({
                type: Types.LOGIN,
                payload: res.data
            })
        })
    }
}

