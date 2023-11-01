import { useEffect, useState } from 'react'

type PrefectureType = {
  message: null
  result: [{ prefCode: number; prefName: string }]
}
const apikey = process.env.NEXT_PUBLIC_URL

export const useFetchPrefecture = () => {
  const [data, setData] = useState<[{ prefCode: number; prefName: string }]>([{ prefCode: 0, prefName: '' }])
  const [isLoading, setIsLoading] = useState(false)
  const fetchPrefectures = (): Promise<PrefectureType> => {
    return new Promise<PrefectureType>((resolve, reject) => {
      if (!apikey) return
      fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': apikey }
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error))
    })
  }
  const getPrefectureData = async () => {
    setIsLoading(true)
    const prefectureData = await fetchPrefectures()
    setData(prefectureData.result)
    setIsLoading(false)
  }
  useEffect(() => {
    getPrefectureData()
  }, [])
  return { isLoading, data }
}
