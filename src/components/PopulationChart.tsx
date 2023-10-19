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
      {/* <CartesianGrid stroke="#eee" strokeDasharray="5 5"/> */}
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      {/* <Line type="monotone" dataKey="正解数" stroke="#82ca9d" /> */}
    </LineChart>
  )

  // return (
  //   <LineChart
  //     width={700}
  //     height={300}
  //     data={studyDataList}
  //     margin={{
  //       top: 5,
  //       right: 5,
  //       left: 5,
  //       bottom: 5,
  //     }}
  //   >
  //     <CartesianGrid strokeDasharray="3 3" />
  //     {/* <XAxis dataKey="date" /> */}
  //     <YAxis dataKey="問題数" />
  //     <Line type="monotone" dataKey="問題数" stroke="#8884d8" />
  //     <Line type="monotone" dataKey="正解数" stroke="#3ba2f6" />
  //     <Line type="monotone" dataKey="正解率" stroke="#ff0092" />
  //     <Legend />
  //     <Tooltip />
  //   </LineChart>
  // )
}

export default PopulationChart
