const csv = require('csv-parser')
const fs = require('fs')
const provincias = require('../geojsons/ecuador/provincias.json')

let movilidad = []

fs.createReadStream('src/data/movilidad/df_ecuador_dia_region.csv')
  .pipe(csv())
  .on('data', row => {
    movilidad.push(row)
  })
  .on('end', () => {
    const provinciasConMovilidad = JSON.stringify({
      ...provincias,
      features: provincias.features.map(prov => {
        const id = prov.properties.cartodb_id
        return {
          ...prov,
          properties: {
            ...prov.properties,
            ...movilidad
              .filter(m => Number(m.codigo_region) === Number(id))
              .reduce((prev, v) => ({
                ...prev,
                [`v${v.dia}`]: Number(v.mediana_distancia_recorrida)
              }), {})
          }
        }
      })
    })
    fs.writeFile('./test.json', provinciasConMovilidad, err => console.log(err))
  })