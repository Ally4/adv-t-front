import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_ERROR } from '../types/logoutTypes'
import axios from 'axios'

export const logout = (history) => async (dispatch) => {
    try {
        dispatch(logoutRequest());
        const token = localStorage.getItem('token')

        const res = await axios.get(
            'http://localhost:1234/api/v1/auth/logout',
            {
                headers: {
                    'authorization': token
                }
            }
        )
        localStorage.removeItem('token')
        history.push("/")
        console.log('=============================')
        dispatch(logoutSuccess(res))

    } catch (error) {
        dispatch(logoutError(error))
    }
}; 

export const logoutRequest = () => {
    return { type: LOGOUT_REQUEST }
}

export const logoutSuccess = (data) => {
    return {
        type: LOGOUT_SUCCESS,
        payload: data
    }
}

export const logoutError = (error) => {
    return {
        type: LOGOUT_ERROR,
        payload: error
    }
}  
