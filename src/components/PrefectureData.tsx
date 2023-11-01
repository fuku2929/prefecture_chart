import { useFetchPrefecture } from '@/hooks/useFetchPrefecture'
import styles from '@/components/PrefectureData.module.css'

type Props = {
  getPopulationData: (prefCode: number, prefName:string, populationType: number ) => void
  populationType: number
}
const PrefectureData = ({ getPopulationData, populationType }: Props) => {
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
              <div className={styles.prefecture} key={item.prefCode}>
                <label>
                  <input
                    id="prefecture_checkbox"
                    type="checkbox"
                    onChange={() => {
                      getPopulationData(item.prefCode, item.prefName, populationType)
                    }}
                  />
                  {item.prefName}&nbsp;
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
