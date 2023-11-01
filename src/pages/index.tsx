import React, { useState } from 'react'
import PopulationChart from '@/components/PopulationChart'
import PrefectureData from '../components/PrefectureData'
import { useFetchPopulation } from '@/hooks/useFetchpopulation'
import RadioButton from '@/components/RadioBotton'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'

function App() {
  const { getPopulationData, jsonDataList, prefNames } = useFetchPopulation()
  const [populationType, setPopulationType] = useState<number>(0)

  return (
    <div className={styles.App}>
      <Header />
      <RadioButton populationType={populationType} setPopulationType={setPopulationType} />
      <PopulationChart jsonDataList={jsonDataList} prefNames={prefNames} />
      <PrefectureData getPopulationData={getPopulationData} populationType={populationType} />
    </div>
  )
}

export default App
