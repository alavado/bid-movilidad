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
        zoom: 3.5
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
      bearing: 9.518571428571423,
      pitch: 31.435488801806425,
      centro: {
        latitude: -10.19699262666076,
        longitude: -73.15741565744399,
        zoom: 5.123282245777578
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
        zoom: 6.845643770556371
      }
    }
  },
  {
    codigo: 'PA',
    nombre: 'Panamá',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: 7.962838342352478,
        longitude: -80.74039050093182,
        zoom: 6.425480080537959
      }
    }
  },
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
  },
  {
    codigo: 'CO',
    nombre: 'Colombia',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: 1.7189608250747426,
        longitude: -74.13029279247739,
        zoom: 4.833296788063777
      }
    }
  },
  {
    codigo: 'SV',
    nombre: 'El Salvador',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: 13.56872874144053,
        longitude: -89.09715699847943,
        zoom: 7.41226051981821
      }
    }
  },
  {
    codigo: 'BZ',
    nombre: 'Belize',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: 16.888202942704673,
        longitude: -88.78736571859409,
        zoom: 7.228371578966444
      }
    }
  },
  {
    codigo: 'JM',
    nombre: 'Jamaica',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: 18.053252271269844,
        longitude: -77.37862994696084,
        zoom: 7.291828415279124
      }
    }
  },
  {
    codigo: 'HN',
    nombre: 'Honduras',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: 14.617731084727945,
        longitude: -87.3,
        zoom: 6.2
      }
    }
  },
  {
    codigo: 'GT',
    nombre: 'Guatemala',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: 15.026581097384627,
        longitude: -90.64665989452234,
        zoom: 6.4
      }
    }
  },
  {
    codigo: 'DO',
    nombre: 'Rep. Dominicana',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: 18.645266154195166,
        longitude: -71,
        zoom: 6.82
      }
    }
  },
  {
    codigo: 'NI',
    nombre: 'Nicaragua',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: 12.494930284560935,
        longitude: -85.37858211227365,
        zoom: 6
      }
    }
  },
  {
    codigo: 'PY',
    nombre: 'Paraguay',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: -23.647844011159386,
        longitude: -58.87215796358683,
        zoom: 5.7
      }
    }
  },
  {
    codigo: 'GY',
    nombre: 'Guyana',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: -23.647844011159386,
        longitude: -58.87215796358683,
        zoom: 5.7
      }
    }
  },
  {
    codigo: 'BR',
    nombre: 'Brasil',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: -13.790029866285815,
        longitude: -51.92599709491803,
        zoom: 3.3116
      }
    }
  },
  {
    codigo: 'MX',
    nombre: 'México',
    geojson: {
      claveIDRegion: 'ID_1',
      claveNombreRegion: 'NAME_1'
    },
    mapa: {
      centro: {
        latitude: 24.28345931187278,
        longitude: -104.59285649676,
        zoom: 4.265877380036823
      }
    }
  }
]

module.exports = paises