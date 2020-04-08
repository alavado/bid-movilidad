export const obtenerDataLayer = dia => ({
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: `v${dia}`,
      stops: [
        [0, '#3288bd'],
        [.1, '#66c2a5'],
        [.2, '#abdda4'],
        [.3, '#e6f598'],
        [.4, '#ffffbf'],
        [.5, '#fee08b'],
        [.6, '#fdae61'],
        [.7, '#f46d43'],
        [.8, '#d53e4f']
      ]
    },
    'fill-opacity': 0.4,
    "fill-color-transition": {
      "duration": 300,
      "delay": 0
    }
  },
})
