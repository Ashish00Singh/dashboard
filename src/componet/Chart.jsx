import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function Chart1() {
    const [state, setstate]= useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "series-2",
            data: [60, 12, 35, 50, 9, 60, 50, 31]
          }
        ]
      })
  return (
    <div className='cjj mx-3'><Chart
    options={state.options}
    series={state.series}
    type="line"
    width="700"
    height="300"
  /></div>
  )
}

export default Chart1