import React, { useState, useEffect, useMemo } from 'react'
import { Chart, Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import moment from 'moment/min/moment-with-locales'
import './GraficoComuna.css'
import { fechaInicio } from '../../config/fecha'

const GraficoComuna = () => {

  const { datos, dia } = useSelector(state => state.mapa)
  Chart.defaults.global.defaultFontColor = '#263238'

  const options = useMemo(() => ({
    scales: {
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Cambio % en movilidad',
          fontSize: 14
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6,
          suggestedMin: -60,
          suggestedMax: 0,
          max: 20,
          callback: (val, i) => {
            return val + '%'
          },
        },
      }],
      xAxes: [{
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
          callback: (val, i) => {
            const fecha = moment(fechaInicio).add(Number(val - 1), 'days')
            return fecha.weekday() === 0 ? fecha.format('D MMMM') : (dia === Number(val) ? '' : null)
          },
        },
        fontFamily: 'Source Sans Pro'
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          const etiqueta = data.datasets[tooltipItem.datasetIndex].label
          const valor = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
          return `${etiqueta}: ${valor.toLocaleString('de-DE', { maximumFractionDigits: 0 }) + '%'}`
        },
        title: tooltipItem => {
          return moment(fechaInicio)
            .add(Number(tooltipItem[0].label) - 1, 'days')
            .format('dddd, D [de] MMMM [de] YYYY')
        }
      }
    }
  }), [dia])
  
  const [chartData, setChartData] = useState({
    labels: Object.keys(datos)
      .filter(k => k.match(/v[0-9]+/g))
      .map(k => k.substring(1)),
    datasets: [
      {
        label: 'Cambio % en movilidad',
        data: Object.keys(datos).filter(k => k.match(/v[0-9]+/g)).map(k => {
          return ((datos[k] <= 10) && (datos[k]>-100)) ? datos[k] : null
        }),
      }
    ]
  })

  useEffect(() => {
    const canvas = document.getElementById('GraficoComuna')
    if (!canvas) {
      return
    }
    const ctx = canvas.getContext("2d");
    const gradientStroke = ctx.createLinearGradient(0, 100, 0, 0);
    gradientStroke.addColorStop(0.0, '#abdda4');
    gradientStroke.addColorStop(0.9, '#d53e4f');
    setChartData({
      labels: Object.keys(datos)
      .filter(k => k.match(/v[0-9]+/g))
      .map(k => k.substring(1)),
      datasets: [
        {
          label: 'Cambio % en movilidad',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: Object.keys(datos).filter(k => k.match(/v[0-9]+/g)).map(k => {
            return ((datos[k] <= 10) && (datos[k]>-100)) ? datos[k] : null
          }),
          fill: false,
          borderColor: gradientStroke,
          borderWidth: 2,
          pointStrokeColorborderColor: gradientStroke,
          pointBorderColor: gradientStroke,
          pointBackgroundColor: gradientStroke,
          pointHoverBackgroundColor: gradientStroke,
          pointHoverBorderColor: gradientStroke,
          pointBorderWidth: 1
        }
      ]
    })
  }, [datos.v20])

  return (
    <div style={{ padding: '.5em' }}>
      {Object.keys(datos).filter(k => k.match(/v[0-9]+/g) && datos[k] !== -1000).length === 0 ?
        <div className="GraficoComuna__sin_datos">
          No hay datos para esta región.
        </div> :
        <Line
          id="GraficoComuna"
          data={chartData}
          className="GraficoComuna"
          options={options}
        />
      }
    </div>
  )
}

export default GraficoComuna
