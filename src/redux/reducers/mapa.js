import { FIJAR_DIA } from "../actionTypes"

const initialState = {
  dia: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FIJAR_DIA: {
      return {
        ...state,
        dia: action.payload
      }
    }
    default:
      return state;
  }
}