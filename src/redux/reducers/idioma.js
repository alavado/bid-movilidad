import { SELECCIONAR_IDIOMA } from "../actionTypes"
import traducciones from '../../strings'

const initialState = {
  idioma: 'es', //	ISO 639-1
  textos: { ...Object.keys(traducciones).reduce((obj, k) => ({ ...obj, [k]: traducciones[k].es }), {}) }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECCIONAR_IDIOMA: {
      const idioma = action.payload
      return {
        ...state,
        idioma,
        textos: { ...Object.keys(traducciones).reduce((obj, k) => ({ ...obj, [k]: traducciones[k][idioma] }), {}) }
      }
    }
    default:
      return state;
  }
}