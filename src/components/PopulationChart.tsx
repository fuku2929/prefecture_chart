import React, { useEffect } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import styles from '@/components/PopulationChart.module.css';

interface Props {
  checkedValues: [{ year: number; value: number }][]
  populationData: [{ year: number; value: number }]
}


const PopulationChart = ({populationData, checkedValues}:Props) => {
  return (
    <div style={{ width: '100%', height: '250px' }}>
    <ResponsiveContainer width="100%" height="100%">
    <LineChart className={styles.populationChart} width={800} height={400} data={populationData} >
      <XAxis  dataKey="year"  />
      <YAxis type="number" dataKey="value" textAnchor='start' />
      {checkedValues.map((item:{year: number, value: number, rate?: number}[], index)=>{
        // console.log(item)
        return(
          <Line key={index} type="monotone" dataKey="value" stroke="#8884d8" />
        )
      })}
    </LineChart>
    </ResponsiveContainer>
    </div>
  )
//レスポンシブコンテナ
}

export default PopulationChart
