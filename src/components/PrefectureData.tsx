import { useQuery } from 'react-query'
import { useFetchPopulation } from '@/hooks/useFetchpopulation'
import { useFetchPrefecture } from '@/hooks/useFetchPrefecture'

interface Props {
  setPopulationData: React.Dispatch<React.SetStateAction<[{ year: number; value: number }]>>
  populationData: [{ year: number; value: number }]
}

const Prefecture: React.FC<Props> = ({ setPopulationData }: Props) => {
  const { isLoading, data } = useFetchPrefecture()
  // console.log(isLoading)
  const { getPopulationData } = useFetchPopulation()

  // const fetchPopulation = useFetchPopulation()
  if (isLoading) {
    return <span>Loading...</span>
  }
  return (
    <>
      <>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <div>
            <h2>都道府県一覧</h2>
            <div>
              {data.map((item: { prefCode: number; prefName: string }) => {
                return (
                  <>
                    <div key={item.prefCode}>{item.prefName} </div>
                    <input
                      id="prefecture_checkbox"
                      type="checkbox"
                      onChange={() => {
                        getPopulationData(item.prefCode)
                      }}
                    />
                  </>
                )
              })}
            </div>
          </div>
        )}
      </>
    </>
  )
}

export default Prefecture
