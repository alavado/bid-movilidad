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
          labelString: 'Índice de movilidad'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6,
          suggestedMin: 0,
          suggestedMax: 1.2
        }
      }],
      xAxes: [{
        ticks: {
          maxTicksLimit: 5
        },
        fontFamily: 'Source Sans Pro'
      }]
    },
    legend: {
      display: false
    }
  }), [dia])
  
  const [chartData, setChartData] = useState({
    labels: Object.keys(datos).filter(k => k.match(/v[0-9]+/g)).map(k => {
      return moment(fechaInicio).add(Number(k.substring(1)) - 3, 'days').format('D MMM')
    }),
    datasets: [
      {
        label: 'Movilidad',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: Object.keys(datos).filter(k => k.match(/v[0-9]+/g)).map(k => {
          return datos[k]
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
    gradientStroke.addColorStop(0.1, '#abdda4');
    gradientStroke.addColorStop(1, '#d53e4f');
    setChartData({
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
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
  }, [])

  return (
    <div style={{ padding: '.5em' }}>
      {Number(datos['v3']) === 0 ?
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
