const csv = require('csv-parser')
const fs = require('fs')
const path = require('path')
const bomstrip = require('bomstrip')

const dirGeoJsons = path.join('data', 'geojson')
const propiedadIDRegionEnGeoJSON = {
  AR: 'gid',
  CL: 'codregion',
  EC: 'cartodb_id'
}

const dirCSV = path.join('src', 'data', 'csv')
const separator = ';'

const archivoGeoJSON = 'regiones.json'
const archivoCSV = 'movilidad.csv'
const archivoSalida = 'merge.json'

const mergeMovilidad = codigoPais => {
  let movilidad = []
  const regiones = require(path.join('..', dirGeoJsons, codigoPais, archivoGeoJSON))
  fs.createReadStream(path.join(dirCSV, codigoPais, archivoCSV))
    .pipe(new bomstrip())
    .pipe(csv({ separator }))
    .on('data', row => movilidad.push(row))
    .on('end', () => {
      const output = JSON.stringify({
        ...regiones,
        features: regiones.features.map(region => {
          const id = region.properties[propiedadIDRegionEnGeoJSON[codigoPais]]
          const movilidadRegion = movilidad.find(({ cod }) => Number(cod) === Number(id))
          if (!movilidadRegion) {
            return {}
          }
          const dias = Object.keys(movilidadRegion)
          return {
            ...region,
            properties: {
              ...region.properties,
              ...dias.reduce((prev, dia) => ({
                  ...prev,
                  [`v${dia}`]: Number(movilidadRegion[dia])
                }), {})
            }
          }
        })
      })
      fs.writeFile(path.join('src', dirGeoJsons, codigoPais, archivoSalida), output, console.error)
    }
  )
}

mergeMovilidad('AR')
mergeMovilidad('CL')
mergeMovilidad('EC')