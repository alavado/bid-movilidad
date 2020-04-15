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

const mergeMovilidad = pais => {
  let datosCSV = []
  const regiones = require(path.join('..', dirGeoJsons, pais, archivoGeoJSON))
  fs.createReadStream(path.join(dirCSV, pais, archivoCSV))
    .pipe(new bomstrip())
    .pipe(csv({ separator }))
    .on('data', row => datosCSV.push(row))
    .on('end', () => {
      const salida = JSON.stringify({
        ...regiones,
        features: regiones.features.map(feature => {
          const id = feature.properties[propiedadIDRegionEnGeoJSON[pais]]
          const datosRegion = datosCSV.find(({ cod }) => Number(cod) === Number(id))
          if (!datosRegion) {
            return feature
          }
          let dias = Object.keys(datosRegion)
          for (let dia = 1; !dias.includes(dia.toString()); dia++) {
            dias.push(dia.toString())
          }
          return {
            ...feature,
            properties: {
              ...feature.properties,
              ...dias.reduce((prev, dia) => ({
                  ...prev,
                  [`v${dia}`]: datosRegion[dia] ? Number(datosRegion[dia]) : 0
                }), {})
            }
          }
        })
      })
      const pathSalida = path.join('src', dirGeoJsons, pais, archivoSalida)
      fs.writeFile(pathSalida, salida, console.error)
    }
  )
}

mergeMovilidad('AR')
mergeMovilidad('CL')
mergeMovilidad('EC')