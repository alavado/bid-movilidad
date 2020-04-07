import geoJSONComunasChile from '../../geojsons/chile/regiones.json'
import geoJSONDepartamentosArgentina from '../../geojsons/argentina/provincias.json'
import geoJSONProvinciasEcuador from '../../geojsons/ecuador/provincias.json'

export const obtenerFeaturesPais = pais => {
  switch(pais) {
    case 'AR':
      return geoJSONDepartamentosArgentina.features
    case 'EC':
      return geoJSONProvinciasEcuador.features
    default:
      return geoJSONComunasChile.features
  }
}