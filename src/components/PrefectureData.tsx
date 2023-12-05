import { useFetchPrefecture } from '@/hooks/useFetchPrefecture'
import styles from '@/components/PrefectureData.module.css'
import ReactLoading from 'react-loading'
import { FC, useState } from 'react'

type Props = {
  getPopulationData: (prefCode: number, prefName: string, populationType: number) => void
  populationType: number
  prefNames: string[]
}
const PrefectureData = ({ getPopulationData, populationType, prefNames }: Props) => {
  const { isLoading, data } = useFetchPrefecture()
  const [checked, setChecked] = useState([])

  // const Checkbox: FC<Props> = ({ checked = false }) => (
  //   <input type="checkbox" checked={checked} />
  // );

  // const checkboxes: NodeListOf<HTMLInputElement> | null = document.querySelectorAll('#prefecture_checkbox')
  // // console.log(checkboxes)
  // function uncheckAll() {
  //   if (checkboxes != null) {
  //     checkboxes.forEach((checkbox) => {
  //       checkbox.checked = false
  //     })
  //     // for (let i = 0; i < checkboxes.length; i++) {
  //     //   checkboxes[i].checked = false
  //     //   console.log(checkboxes[i].checked)
  //     // }
  //   }
  // }

  // if (checkboxes != undefined) {
  //   console.log(checkboxes[1].checked)
  // }
  // uncheckAll
  // console.log(checkboxes.checked)
  return (
    <>
      {isLoading ? (
        <ReactLoading type="spin" color="black" height="20px" width="20px" className={styles.mx} />
      ) : (
        <div>
          <h2>都道府県一覧</h2>
          {data.map((item: { prefCode: number; prefName: string }) => {
            return (
              <div className={styles.prefecture} key={item.prefCode}>
                <label>
                  <input
                    // name='prefecture_checkbox'
                    id="prefecture_checkbox"
                    type="checkbox"
                    checked={prefNames.includes(item.prefName)}
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
