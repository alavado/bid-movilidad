import geoJSONComunasChile from '../../geojsons/chile/comunas.json'
import geoJSONDepartamentosArgentina from '../../geojsons/argentina/departamentos.json'

export const obtenerFeaturesPais = pais => {
  switch(pais) {
    case 'AR':
      return geoJSONDepartamentosArgentina.features
    default:
      return geoJSONComunasChile.features
  }
}