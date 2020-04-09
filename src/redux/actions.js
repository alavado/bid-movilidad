import { FIJAR_DIA, FIJAR_PAIS, FIJAR_DESTINO, FIJAR_DATOS_REGION } from './actionTypes'
import { obtenerCentroPais } from '../components/Mapa/helpers'
import { numeroDias } from '../config/fecha'

export const fijarDia = dia => ({
  type: FIJAR_DIA,
  payload: Math.max(1, Math.min(numeroDias, dia))
})

export const fijarPais = codigo => ({
  type: FIJAR_PAIS,
  payload: codigo
})

export const fijarDestino = codigoPais => ({
  type: FIJAR_DESTINO,
  payload: obtenerCentroPais(codigoPais)
})

export const fijarDatosRegion = datos => ({
  type: FIJAR_DATOS_REGION,
  payload: datos
})