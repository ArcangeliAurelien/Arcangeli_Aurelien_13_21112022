import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from './reducers/loginReducer';
import { USER_PROFILE_SUCCESS, USER_PROFILE_UPDATE, USER_PROFILE_FAIL, USER_PROFILE_RESET } from './reducers/userReducer';
import axios from '../api/axios';

// LOGIN
export const login = (email, password) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        }

        const { data } = await axios.post(
           '/login',
            { email, password },
            config
        )

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        dispatch(userProfile(data.body.token))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// LOGOUT
export const logOut = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_PROFILE_RESET })
}

// USER PROFILE
export const userProfile = (token) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        const { data } = await axios.post(
            '/profile',
            { token },
            config
        )

        dispatch({ type: USER_PROFILE_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

// UPDATE USER PROFILE

export const updateProfile = (token, newFirstName, newLastName) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        const { data } = await axios.put(
            '/profile',
            { firstName: newFirstName, lastName: newLastName },
            config
        )

        dispatch({ type: USER_PROFILE_UPDATE, payload: data })

    } catch (error) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}