import React, { useState } from 'react'
// import StudyChart from '../components/StudyChart';
import { ImportsNotUsedAsValues } from 'typescript'
import { useQuery } from 'react-query'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import studyDataList from '@/components/studyData'
import StudyChart from '@/components/PopulationChart'
import PopulationChart from '@/components/PopulationChart'
import PrefectureData from '../components/PrefectureData'
import { useFetchPopulation } from '@/hooks/useFetchpopulation'
// import studyData from '@/components/studyData';

const queryClient = new QueryClient()

function App() {
  const { populationData, getPopulationData, checkedValues } = useFetchPopulation()
  // const [populationData, setPopulationData] = useState<[{ year: number; value: number }]>([{ year: 0, value: 0 }])

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PopulationChart populationData={populationData} checkedValues={checkedValues}/>
        <PrefectureData populationData={populationData} getPopulationData={getPopulationData}  />
      </div>
    </QueryClientProvider>
  )
}


export default App
