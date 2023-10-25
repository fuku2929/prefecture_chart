import React, { useEffect } from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { useFetchPopulation } from '@/hooks/useFetchpopulation'

interface Props {
  checkedValues: [{ year: number; value: number }][]
  populationData: [{ year: number; value: number }]
}


const PopulationChart = ({populationData, checkedValues}:Props) => {
  // useEffect(() => {
  //   PopulationChart(data)
  // }, [populationData])
  // console.log(populationData)
  // props:[{ year: number; value: number }]
  return (
    <LineChart width={800} height={400} data={populationData}>
      <XAxis  dataKey="year"  />
      <YAxis type="number" dataKey="value" />
      {checkedValues.map((item:{year: number, value: number, rate?: number}[], index)=>{
        // console.log(item)
        return(
          <Line key={index} type="monotone" dataKey="value" stroke="#8884d8" />
        )
      })}
      
    </LineChart>
  )

}

export default PopulationChart
