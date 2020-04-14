const csv = require('csv-parser')
const fs = require('fs')
const provinciasEcuador = require('../geojsons/ecuador/provincias.json')
const regionesChile = require('../geojsons/chile/regiones.json')
const provinciasArgentina = require('../geojsons/argentina/provincias.json')

const dirGeoJsons = './src/geojsons/'

const mergeEcuador = () => {
  let movilidad = []
  fs.createReadStream('src/data/movilidad_ecuador_2.csv')
    .pipe(csv())
    .on('data', row => movilidad.push(row))
    .on('end', () => {
      const provinciasConMovilidad = JSON.stringify({
        ...provinciasEcuador,
        features: provinciasEcuador.features.map(prov => {
          const id = prov.properties.cartodb_id
          const movilidadProvincia = movilidad.find(m => Number(m.s) === Number(id))
          if (!movilidadProvincia) {
            return {}
          }
          const dias = Object.keys(movilidadProvincia)
          return {
            ...prov,
            properties: {
              ...prov.properties,
              ...dias.reduce((prev, dia) => ({
                  ...prev,
                  [`v${dia}`]: Number(movilidadProvincia[dia])
                }), {})
            }
          }
        })
      })
      fs.writeFile(`${dirGeoJsons}/ecuador/provincias_con_movilidad.json`, provinciasConMovilidad, err => console.log(err))
    }
  )
}

const mergeChile = () => {
  let movilidad = []
  fs.createReadStream('src/data/movilidad_chile_2.csv')
    .pipe(csv())
    .on('data', row => movilidad.push(row))
    .on('end', () => {
      const regionesConMovilidad = JSON.stringify({
        ...regionesChile,
        features: regionesChile.features.map(prov => {
          const id = prov.properties.codregion
          const movilidadRegion = movilidad.find(m => Number(m.s) === Number(id))
          if (!movilidadRegion) {
            return {}
          }
          const dias = Object.keys(movilidadRegion)
          return {
            ...prov,
            properties: {
              ...prov.properties,
              ...dias.reduce((prev, dia) => ({
                  ...prev,
                  [`v${dia}`]: Number(movilidadRegion[dia])
                }), {})
            }
          }
        })
      })
      fs.writeFile(`${dirGeoJsons}/chile/regiones_con_movilidad.json`, regionesConMovilidad, err => console.log(err))
    }
  )
}

const mergeArgentina = () => {
  let movilidad = []
  fs.createReadStream('src/data/movilidad_argentina_provincias.csv')
    .pipe(csv({ separator: ';' }))
    .on('data', row => movilidad.push(row))
    .on('end', () => {
      const provinciasConMovilidad = JSON.stringify({
        ...provinciasArgentina,
        features: provinciasArgentina.features.map(prov => {
          const id = prov.properties.gid
          const movilidadRegion = movilidad.find(m => Number(m.codigo_region) === Number(id))
          if (!movilidadRegion) {
            return {}
          }
          const dias = Object.keys(movilidadRegion)
          return {
            ...prov,
            properties: {
              ...prov.properties,
              ...dias.reduce((prev, dia) => ({
                  ...prev,
                  [`v${dia}`]: Number(movilidadRegion[dia])
                }), {})
            }
          }
        })
      })
      fs.writeFile(`${dirGeoJsons}/argentina/provincias_con_movilidad.json`, provinciasConMovilidad, err => console.log(err))
    }
  )
}

mergeEcuador()
mergeChile()
mergeArgentina()