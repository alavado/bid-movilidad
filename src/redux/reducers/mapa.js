import { FIJAR_DIA, FIJAR_PAIS, FIJAR_DESTINO } from "../actionTypes"

const initialState = {
  dia: 1,
  pais: 'CL',
  destino: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FIJAR_DIA: {
      return {
        ...state,
        dia: action.payload
      }
    }
    case FIJAR_PAIS: {
      return {
        ...state,
        pais: action.payload
      }
    }
    case FIJAR_DESTINO: {
      return {
        ...state,
        destino: action.payload
      }
    }
    default:
      return state;
  }
}