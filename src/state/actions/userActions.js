import axios from 'axios'
import { USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_FAIL, 
    USER_LOGOUT } 
from '../constants/userConstants.js'

export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

     
        
        
        const {data} = await axios.post('https://fakestoreapi.com/auth/login', {username, password})

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })


        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({type: USER_LOGIN_FAIL, payload: error.response && 
            error.response.data.message ? error.response.data.message : error.message})
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGOUT})
}