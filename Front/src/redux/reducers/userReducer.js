export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';
export const USER_PROFILE_FAIL = 'USER_PROFILE_FAIL';
export const USER_PROFILE_RESET = 'USER_PROFILE_RESET';
export const USER_PROFILE_UPDATE = 'USER_PROFILE_UPDATE';

const InitialState = {
    success: false,
    firstName: '',
    lastName: ''
}

export const userReducer = (state = InitialState, action) => {
    switch (action.type) {
        case USER_PROFILE_SUCCESS:
            return {
                firstName: action.payload.body.firstName,
                lastName: action.payload.body.lastName
            }
        case USER_PROFILE_UPDATE:
            return {
                success: true,
                firstName: action.payload.body.firstName,
                lastName: action.payload.body.lastName
            }
        case USER_PROFILE_FAIL:
            return {
                error: action.payload
            }
        case USER_PROFILE_RESET:
            return {
                firstName: null,
                lastName: null
            }
        default:
            return state
    }
}