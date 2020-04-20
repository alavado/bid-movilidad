import { FIJAR_DIA, FIJAR_PAIS, FIJAR_DESTINO, FIJAR_DATOS_REGION, PLAY } from "../actionTypes"

const initialState = {
  dia: 2,
  pais: 'CO',
  destino: null,
  datos: [],
  playing: true
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
    case FIJAR_DATOS_REGION: {
      return {
        ...state,
        datos: action.payload
      }
    }
    case PLAY: {
      return {
        ...state,
        playing: action.payload
      }
    }
    default:
      return state;
  }
}