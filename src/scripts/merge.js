const csv = require('csv-parser')
const fs = require('fs')
const provinciasEcuador = require('../geojsons/ecuador/provincias.json')
const regionesChile = require('../geojsons/chile/regiones.json')

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
      fs.writeFile('./test.json', provinciasConMovilidad, err => console.log(err))
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
          const id = prov.properties.COD_REGI
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
      fs.writeFile('./test.json', regionesConMovilidad, err => console.log(err))
    }
  )
}

mergeEcuador()