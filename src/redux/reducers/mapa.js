import { FIJAR_DIA, FIJAR_PAIS, FIJAR_DATOS_REGION, PLAY } from "../actionTypes"

const initialState = {
  dia: 9,
  pais: 'CO',
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