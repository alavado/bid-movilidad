import { FIJAR_DIA, FIJAR_PAIS, FIJAR_DESTINO } from "./actionTypes";
import { obtenerCentroPais } from "../components/Mapa/helpers";

export const fijarDia = dia => ({
  type: FIJAR_DIA,
  payload: dia
})

export const fijarPais = codigo => ({
  type: FIJAR_PAIS,
  payload: codigo
})

export const fijarDestino = codigoPais => ({
  type: FIJAR_DESTINO,
  payload: obtenerCentroPais(codigoPais)
})