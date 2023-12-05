import { useState } from 'react'

type PopulationType = {
  message: null
  result: { boundaryYear: number; data: [{ label: string; data: [{ year: number; value: number; rate?: number }] }] }
}

const apikey = process.env.NEXT_PUBLIC_URL

export const useFetchPopulation = () => {
  const [popisLoading, setPopIsLoading] = useState(false)
  const [populationData, setPopulationData] = useState<{ year: number; value: number }[]>([])
  const [checkedValues, setCheckedValues] = useState<{ year: number; value: number }[][]>([])
  const [prefNames, setPrefNames] = useState<string[]>([])
  const [checkedDataList, setCheckedDataList] = useState<{ label: string; data: { year: number; value: number }[] }[]>(
    []
  )
  const [jsonDataList, setJsonDataList] = useState<Array<any>>([
    { year: 1960 },
    { year: 1965 },
    { year: 1970 },
    { year: 1980 },
    { year: 1985 },
    { year: 1990 },
    { year: 1995 },
    { year: 2000 },
    { year: 2005 },
    { year: 2010 },
    { year: 2015 },
    { year: 2020 },
    { year: 2025 },
    { year: 2030 },
    { year: 2035 },
    { year: 2040 },
    { year: 2045 }
  ])

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

  const getPopulationData = async (prefCode: number, prefName: string, PopulationType: number) => {
    setPopIsLoading(true)
    const fetchData = await fetchPopulation(prefCode)
    setPopulationData(fetchData.result.data[PopulationType].data)
    if (checkedValues.length) {
      setCheckedValues([...checkedValues, populationData])
    } else {
      setCheckedValues([fetchData.result.data[PopulationType].data])
    }
    if (prefNames.length) {
      if (prefNames.includes(prefName)) {
        setPrefNames(prefNames.filter((item) => item !== prefName))
      } else {
        setPrefNames([...prefNames, prefName])
      }
    } else {
      setPrefNames([prefName])
    }
    setCheckedDataList([...checkedDataList, { label: prefName, data: populationData }])
    for (let i = 0; i < jsonDataList.length; i++) {
      if (jsonDataList[i].hasOwnProperty(prefName)) {
        delete jsonDataList[i][prefName]
      } else {
        jsonDataList[i][prefName] = fetchData.result.data[PopulationType].data[i].value
      }
    }

    setJsonDataList(jsonDataList)
    setPopIsLoading(false)
  }
  return {
    populationData,
    getPopulationData,
    checkedValues,
    prefNames,
    checkedDataList,
    jsonDataList,
    popisLoading,
    setPrefNames
  }
}
