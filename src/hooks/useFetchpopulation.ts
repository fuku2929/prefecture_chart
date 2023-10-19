import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'
import PopulationChart from '@/components/PopulationChart'
// import { populationData, setPopulationData } from "@/pages/index";

type PopulationType = {
  message: null
  result: { boundaryYear: number; data: [{ label: string; data: [{ year: number; value: number; rate?: number }] }] }
}

type PrefectureData = {
  prefCode: number
  prefName: string
}
const apikey = process.env.NEXT_PUBLIC_URL

export const useFetchPopulation = () => {
  const [populationData, setPopulationData] = useState<[{ year: number; value: number }]>([{ year: 0, value: 0 }])

  const fetchPopulation = (props: number): Promise<PopulationType> => {
    return new Promise<PopulationType>((resolve, reject) => {
      if (!apikey) return
      fetch(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode-&prefCode=${props}`, {
        headers: { 'X-API-KEY': apikey }
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error))
      // console.log(res)
      // return res
      //data.result.data[0].data
    })
  }
  // console.log(populationData)
  // const getPrefecturePopulation = async () => {
  //   const prefecturePopulationData = await fetchPopulation(props)
  //   // setPopulationData(prefecturePopulationData.result[0].data)
  //   //親コンポーネント？で関数呼び出した後のsetstateのやり方
  // }
  //data.result.data[0].map

  const getPopulationData = async (prefCode: number) => {
    const fetchData = await fetchPopulation(prefCode)
    fetchData.result.data.map((item) => {
      setPopulationData(item.data)
    })
    // setPopulationData()
    // console.log(populationData)
  }
  // useEffect(() => {
  //   PopulationChart()
  // }, [populationData])
  return { populationData, getPopulationData }

  // function Prefecture() {
  //   const { data, isLoading } = useQuery('population', fetchPopulation)
  //   console.log(data)
  // }
}
//バケツリレーの感覚
