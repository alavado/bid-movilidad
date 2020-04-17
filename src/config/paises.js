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
  },
    {
    codigo: 'CR',
    nombre: 'Costa Rica',
    geojson: {
      claveIDRegion: 'COD_PROV',
      claveNombreRegion: 'NPROVINCIA'
    },
    mapa: {
      centro: {
        latitude: 9.833096399445433,
        longitude: -84.34696346806206,
        zoom: 7.045643770556371
      }
    }
  },
  // {
  //   codigo: 'PA',
  //   nombre: 'Panamá',
  //   geojson: {
  //     claveIDRegion: 'ID_1',
  //     claveNombreRegion: 'NAME_1'
  //   },
  //   mapa: {
  //     centro: {
  //       latitude: 7.962838342352478,
  //       longitude: -80.74039050093182,
  //       zoom: 6.425480080537959
  //     }
  //   }
  // },
  {
    codigo: 'UY',
    nombre: 'Uruguay',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: -32.4086499614701,
        longitude: -56.207602023750475,
        zoom: 5.805316390519547
      }
    }
  },
  {
    codigo: 'VE',
    nombre: 'Venezuela',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: 7.24424389869859,
        longitude: -66.0281812627724,
        zoom: 5.185152700501135
      }
    }
  }
]

module.exports = paises