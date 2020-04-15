const paises = [
  {
    codigo: 'CL',
    nombre: 'Chile',
    geojson: {
      claveIDRegion: 'codregion',
      claveNombreRegion: 'Region'
    },
    mapa: {
      centro: {
        latitude: -44.24,
        longitude: -70.01,
        zoom: 4
      }
    }
  },
  {
    codigo: 'AR',
    nombre: 'Argentina',
    geojson: {
      claveIDRegion: 'gid',
      claveNombreRegion: 'nam'
    },
    mapa: {
      centro: {
        latitude: -44.27,
        longitude: -66.47,
        zoom: 4
      }
    }
  },
  {
    codigo: 'EC',
    nombre: 'Ecuador',
    geojson: {
      claveIDRegion: 'cartodb_id',
      claveNombreRegion: 'dpa_despro'
    },
    mapa: {
      centro: {
        latitude: -2.06,
        longitude: -79.18,
        zoom: 6.06
      }
    }
  },
  {
    codigo: 'BO',
    nombre: 'Bolivia',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: -17.94106013645256,
        longitude: -66.39180523850452,
        zoom: 5.350577937314907
      }
    }
  },
  {
    codigo: 'PE',
    nombre: 'Perú',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: -9.961515344799992,
        longitude: -74.61853867623519,
        zoom: 5.1052852762631025
      }
    }
  },
  {
    codigo: 'TT',
    nombre: 'Trinidad y Tobago',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: 10.341232912152451,
        longitude: -61.33951272277002,
        zoom: 8.285971150593195
      }
    }
  }
]

module.exports = paises