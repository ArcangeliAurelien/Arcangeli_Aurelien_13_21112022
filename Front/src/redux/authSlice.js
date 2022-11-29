import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: ""
}

export const signIn = createAsyncThunk('signIn', async (body) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "post",
        headers: {
            'Content-Type' : "application/json",
        },
        body: JSON.stringify(body)
    })
    return await response.json();
})

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducer: {
        addToken: (state, action) => {
            state.token = localStorage.getItem("token")
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem("user")
        },
        logOut: (state, action) => {
            state.token = null;
            localStorage.clear()
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signIn.pending, (state, action) => {
                state.loading = true
            })
            .addCase(signIn.fulfilled, (state, { payload: { error, msg, token, user } }) => {
                state.loading = false;
                if (error) {
                    state.error = error
                } else {
                    state.msg = msg;
                    state.token = token;
                    state.user = user;

                    localStorage.setItem('msg', msg)
                    localStorage.setItem('user', JSON.stringify(user))
                    localStorage.setItem('token', token)
                }
            })
            .addCase(signIn.rejected, (state, action) => {
                state.loading = true
            })
    }
})

export const { addToken, addUser, logOut } = authSlice.actions
export default authSlice.reducer