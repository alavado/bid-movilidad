import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import moment from 'moment/min/moment-with-locales'
import './GraficoComuna.css'

const GraficoComuna = () => {

  const { datos } = useSelector(state => state.mapa)
  const [chartData, setChartData] = useState({
    labels: Object.keys(datos).filter(k => k.match(/v[0-9]+/g)).map(k => {
      return moment('2020-03-03').add(Number(k.substring(1)) - 3, 'days').format('D MMM')
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
    const canvas = document.getElementById('x')
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
    console.log({chartData})
  }, [])

  return (
    <div style={{ padding: '.5em' }}>
      <Line
        id="x"
        data={chartData}
        className="GraficoComuna"
        options={{
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawTicks: false
              },
            }]
          },
          legend: {
            display: false
          },
          
        }}
      />
    </div>
  )
}

export default GraficoComuna
