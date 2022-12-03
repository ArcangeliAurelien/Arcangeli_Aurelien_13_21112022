import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from './reducers/loginReducer';

const store = configureStore({
    reducer: {
        userLogin: loginReducer,
    }
})

export default store