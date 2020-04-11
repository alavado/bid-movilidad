import geoJSONComunasChile from '../../geojsons/chile/regiones_con_movilidad.json'
import geoJSONProvinciasArgentina from '../../geojsons/argentina/provincias_con_movilidad.json'
import geoJSONProvinciasEcuador from '../../geojsons/ecuador/provincias_con_movilidad.json'

export const obtenerFeaturesPais = pais => {
  switch(pais) {
    case 'AR':
      return [...geoJSONProvinciasArgentina.features,...geoJSONProvinciasEcuador.features,... geoJSONComunasChile.features]
    case 'EC':
      return geoJSONProvinciasEcuador.features
    default:
      return geoJSONComunasChile.features
  }
}

export const obtenerCentroPais = pais => {
  switch(pais) {
    case 'AR':
      return { lat: -44.27, lng: -66.47, zoom: 4 }
    case 'EC':
      return { lat: -2.06, lng: -79.18, zoom: 6.06 }
    case 'CL':
      return { lat: -44.24, lng: -70.01, zoom: 4 }
    default: 
      return null
  }
}
