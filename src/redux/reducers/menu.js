import { ABRIR_MENU, CERRAR_MENU } from "../actionTypes"

const initialState = {
  activo: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ABRIR_MENU: {
      return {
        ...state,
        activo: true
      }
    }
    case CERRAR_MENU: {
      return {
        ...state,
        activo: false
      }
    }
    default:
      return state;
  }
}