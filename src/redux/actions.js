import { FIJAR_DIA, FIJAR_PAIS } from "./actionTypes";

export const fijarDia = dia => ({
  type: FIJAR_DIA,
  payload: dia
})

export const fijarPais = codigo => ({
  type: FIJAR_PAIS,
  payload: codigo
})