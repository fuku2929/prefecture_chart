import { useState } from 'react'

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
  const [checkedValues, setCheckedValues] = useState<[{ year: number; value: number }][]>([]);

  const fetchPopulation = (props: number): Promise<PopulationType> => {
    return new Promise<PopulationType>((resolve, reject) => {
      if (!apikey) return
      fetch(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode-&prefCode=${props}`, {
        headers: { 'X-API-KEY': apikey }
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error))
    })
  }
  // const getPrefecturePopulation = async () => {
  //   const prefecturePopulationData = await fetchPopulation(props)
  //   // setPopulationData(prefecturePopulationData.result[0].data)
  //   //親コンポーネント？で関数呼び出した後のsetstateのやり方
  // }

  const getPopulationData = async (prefCode: number, PopulationType: number) => {
    const fetchData = await fetchPopulation(prefCode)
    console.log(populationData)
    setPopulationData(fetchData.result.data[PopulationType].data)
    // // fetchData.result.data.map((item) => {
    // //   setPopulationData(item.data)
    // })
    // const newPopulationData = Object.assign(populationData, item.data)
    setCheckedValues([...checkedValues, populationData])
  }
  return { populationData, getPopulationData, checkedValues }

}
