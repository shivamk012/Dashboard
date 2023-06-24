import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useEffect, useState } from 'react';
import './Chart.css'

export default function Chart({data}) {

  return (
    <div className="chart-section">
      <div className='header-text'>
        <div><b><h3>Activities</h3></b></div>
        <div className='legend-text'>
          <div>June - July 2023 </div>
          <div style={{"fontFamily" : "Lato , sans-serif"}}>Shanghai</div>
        </div>
      </div>
      <div className='line-chart'>
        <ResponsiveContainer>
          <LineChart
            width="10px"
            height="10px"
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="gases" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="concentration" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
