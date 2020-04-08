import React from 'react'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
}

const GraficoComuna = () => {

  const { datos } = useSelector(state => state.mapa)

  const chartData = {
    labels: Object.keys(datos).filter(k => k.match(/v[0-9]+/g)).map((k, i) => i + 3),
    datasets: [
      {
        label: 'Movilidad',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: Object.keys(datos).filter(k => k.match(/v[0-9]+/g)).map(k => datos[k]),
      }
    ]
  }

  return (
    <div style={{ padding: '.5em' }}>
      <Line
        data={chartData}
        options={options}
      />
    </div>
  )
}

export default GraficoComuna
