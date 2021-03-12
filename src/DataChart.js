import React from 'react'
import { Bar, defaults } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

function DataChart(props) {
    const data = props.data;
    const label = props.data.label;
    const confidence = parseFloat(data.confidence.toFixed(2));
    //console.log(data)
    return (
        <div>
             <Bar
        data={{
          labels: ['Happy', 'sad', 'Anger','Disgust', 'Fear', 'Surprise', 'Neutral'],
          datasets: [
            {
              label: 'Real-time Emotion detection',
              data: [label==='happy'?(confidence*100):0,label==='sad'?(confidence*100):0 ,label==='anger'?(confidence*100):0 ,label==='disgust'?(confidence*100):0,label==='fear'?(confidence*100):0 , label==='surprise'?(confidence*100):0,label==='neutral'?(confidence*100):0],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(117, 255, 55, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
        </div>
    )
}
export default DataChart;
