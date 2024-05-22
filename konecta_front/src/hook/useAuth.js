import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout, selectAuthSlice } from "../store/slices/authSlice";
import { ROLES } from "../features/usuario/constants/rol";

export const useAuth = () => {

  const dispatch = useDispatch();
  const authInformation = useSelector(selectAuthSlice)

  const getDataAuth = (token) => {
    const claims = JSON.parse(atob(token.split('.')[1]));
    const dataAuth = {
      token: token,
      claims: {
        name: claims.name || '',
        sub: claims.sub || 0,
        rol: claims.rol || '',
        exp: claims.exp || 0
      }
    }
    return dataAuth;
  }

  const handlerLogout = () => {
    dispatch(onLogout());
  }

  const handlerToken = (token) => {
    if (!token) return;
    const dataAuth = getDataAuth(token);
    dispatch(onLogin(dataAuth));
  }

  const validateRol = (rol) => {
    return authInformation.claims.rol === rol;
  }

  const validateAdmin = () => {
    return authInformation.claims.rol === ROLES[0].id;
  }

  return {
    authInformation,
    validateRol,
    handlerLogout,
    validateAdmin,
    handlerToken
  }
}

/**
 * 30/10/2023 @: Andres Mogollon &: Creacion
 */