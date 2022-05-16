import * as actions from './actionsTypes';
import axios from '../../axios';

const authstart = () => {
    return {
        type: actions.AUTH_START
    }
}
const authsucess = (userId, token) => {
    return {
        type: actions.AUTH_SUCCESS,
        userId: userId,
        token: token
    }
}
const authfaild = (error) => {
    return {
        type: actions.AUTH_FAILED,
        error: error
    }
}

export const Logout = () => {
    localStorage.clear();
    return {
        type: actions.LOGOUT
    }
}

const checkTimeout = (exp) => {
    return dispatch => setTimeout(() => {
        dispatch(Logout)
    }, exp * 1000);
}

export const auth = (email, password, singup) => {
    return dispatch => {
        dispatch(authstart());
        const userData = {
            email: email,
            password: password
        }
        let url = '/users/adduser'
        if (singup) {
            url = '/users/login'
        }
        axios.post(url, userData).then(res => {
            console.log('res',res)
            const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userId', res.data.userId)
            localStorage.setItem('expireDate', expirationDate)
            dispatch(authsucess(res.data.userId, res.data.token))
            dispatch(checkTimeout(res.data.expiresIn))
        }).catch(error => {
            dispatch(authfaild(error.response.data))
        })
    }
}

export const authCheck = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(Logout());
        } else {
            const expiredate = new Date(localStorage.getItem('expireDate'))
            if (new Date() >= expiredate) {
                dispatch(Logout());
               
            }
            else {
                const userId = localStorage.getItem("userId")
                dispatch(authsucess(userId, token))
                dispatch(checkTimeout(((expiredate.getTime()-new Date().getTime())/1000)))
            }
        }


    }
}