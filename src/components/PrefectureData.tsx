import { useQuery } from 'react-query'
import { useFetchPopulation } from '@/hooks/useFetchpopulation'
import { useFetchPrefecture } from '@/hooks/useFetchPrefecture'

type Props = {
  getPopulationData: (prefCode: number) => void
  populationData: [{ year: number; value: number }]
}
// { setPopulationData }: Props
const PrefectureData = ({ populationData, getPopulationData }: Props) => {
  const { isLoading, data } = useFetchPrefecture()
  // console.log(isLoading)

  // const fetchPopulation = useFetchPopulation()
  if (isLoading) {
    return <span>Loading...</span>
  }
  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <h2>都道府県一覧</h2>
          {data.map((item: { prefCode: number; prefName: string }) => {
            return (
              // ここにCSS
              <div className='prefecture'>
                <label key={item.prefCode}>
                  <input
                    id="prefecture_checkbox"
                    type="checkbox"
                    onChange={() => {
                      getPopulationData(item.prefCode)
                    }}
                  />
                  {item.prefName}
                </label>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default PrefectureData
