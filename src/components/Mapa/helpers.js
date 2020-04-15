import configPaises from '../../config/paises'

export const obtenerFeaturesPais = pais => {
  return require(`../../data/geojson/${pais}/merge.json`).features
}

export const obtenerCentroPais = pais => {
  const configPais = configPaises.find(({ codigo }) => codigo === pais)
  return configPais ? configPais.mapa.centro : null
}
