import geoJSONComunasChile from '../../geojsons/chile/comunas.json'
import geoJSONDepartamentosArgentina from '../../geojsons/argentina/departamentos.json'
import geoJSONMunicipiosBrasil from '../../geojsons/brasil/municipios.json'

export const obtenerFeaturesPais = pais => {
  switch(pais) {
    case 'AR':
      return geoJSONDepartamentosArgentina.features
    case 'BR':
      return geoJSONMunicipiosBrasil.features
    default:
      return geoJSONComunasChile.features
  }
}