import { FIJAR_DIA, FIJAR_PAIS } from "../actionTypes"

const initialState = {
  dia: 0,
  pais: 'CL'
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
    default:
      return state;
  }
}