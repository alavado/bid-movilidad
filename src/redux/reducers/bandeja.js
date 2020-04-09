import { ABRIR_BANDEJA, CERRAR_BANDEJA } from "../actionTypes"

const initialState = {
  abierta: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ABRIR_BANDEJA: {
      return {
        ...state,
        abierta: true
      }
    }
    case CERRAR_BANDEJA: {
      return {
        ...state,
        abierta: false
      }
    }
    default:
      return state;
  }
}