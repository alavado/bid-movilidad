import { FIJAR_DIA, FIJAR_PAIS, FIJAR_DESTINO,
  FIJAR_DATOS_REGION, ABRIR_BANDEJA, CERRAR_BANDEJA, ABRIR_MENU, CERRAR_MENU, PLAY, SELECCIONAR_IDIOMA } from './actionTypes'
import { obtenerCentroPais } from '../components/Mapa/helpers'
import { numeroDias } from '../config/fecha'

export const fijarDia = dia => ({
  type: FIJAR_DIA,
  payload: Math.max(2, Math.min(numeroDias, dia))
})

export const fijarPais = codigo => ({
  type: FIJAR_PAIS,
  payload: codigo
})

export const fijarDatosRegion = datos => ({
  type: FIJAR_DATOS_REGION,
  payload: datos
})

export const abrirBandeja = () => ({
  type: ABRIR_BANDEJA
})

export const cerrarBandeja = () => ({
  type: CERRAR_BANDEJA
})

export const abrirMenu = () => ({
  type: ABRIR_MENU
})

export const cerrarMenu = () => ({
  type: CERRAR_MENU
})

export const playFecha = estado => ({
  type: PLAY,
  payload: estado
})

export const seleccionarIdioma = iso => ({
  type: SELECCIONAR_IDIOMA,
  payload: iso
})
