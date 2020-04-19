import configPaises from '../../config/paises'

export const obtenerFeaturesPais = pais => {
  return require(`../../data/geojson/${pais}/merge.json`).features
}

export const obtenerCentroPais = pais => {
  const configPais = configPaises.find(({ codigo }) => codigo === pais)
  return configPais ? configPais.mapa.centro : null
}

export const obtenerClaveNombreRegion = pais => {
  const configPais = configPaises.find(({ codigo }) => codigo === pais)
  return configPais ? configPais.geojson.claveNombreRegion : null
}

export const obtenerZoomSegunBreakpoint = () => {
  const breakpoints = [
    { valor: 480, zoom: 3 },
    { valor: 624, zoom: 3 },
    { valor: 768, zoom: 3 },
    { valor: 896, zoom: 4 },
    { valor: 1024, zoom: 4 },
    { valor: 1195, zoom: 4 },
    { valor: 1366, zoom: 4 }
  ]
  const bp = breakpoints.find(bp => bp.valor > window.innerWidth)
  return bp ? bp.zoom : 4.5
}
