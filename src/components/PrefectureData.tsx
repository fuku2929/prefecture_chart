import { useQuery } from 'react-query'
import { useFetchPopulation } from '@/hooks/useFetchpopulation'
import { useFetchPrefecture } from '@/hooks/useFetchPrefecture'
import styles from '@/components/PrefectureData.module.css';

type Props = {
  getPopulationData: (prefCode: number, populationType: number) => void
  populationData: [{ year: number; value: number }]
  populationType: number
}
// { setPopulationData }: Props
const PrefectureData = ({ populationData, getPopulationData, populationType }: Props) => {
  const { isLoading, data } = useFetchPrefecture()

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
              <div className={styles.prefecture}>
                <label key={item.prefCode}>
                  <input
                    id="prefecture_checkbox"
                    type="checkbox"
                    onChange={() => {
                      getPopulationData(item.prefCode, populationType)
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
