import { createSlice } from "@reduxjs/toolkit";

const initialAuth = {
  token: '',
  isAuth: false,
  claims: {
    name: '',
    sub: 0,
    rol: '',
    exp: 0
  }
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialAuth,
  reducers: {
    onLogin: (_, action) => {
      return {
        token: action.payload.token,
        isAuth: true,
        claims: {
          name: action.payload.claims.name,
          sub: action.payload.claims.sub,
          rol: action.payload.claims.rol,
          exp: action.payload.claims.exp
        }
      };
    },

    onLogout: () => {
      return initialAuth;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },
  }
});

export const { onLogin, onLogout, setAuth } = authSlice.actions;
export const selectAuthSlice = (state) => state.authSlice;
export default authSlice.reducer;