import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  populationType: number
  setPopulationType: Dispatch<SetStateAction<number>>
  setPrefNames: Dispatch<SetStateAction<string[]>>
}

interface Radio {
  label: string
  value: number
}
// populationtypeの値が切り替わった時、グラフを初期化する処理をuseEffectでかく?
const RadioButton = ({ populationType, setPopulationType, setPrefNames }: Props) => {
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => setPopulationType(Number(event.target.value))
  const radioButtons: Radio[] = [
    {
      label: '総人口',
      value: 0
    },
    {
      label: '年少人口',
      value: 1
    },
    {
      label: '生産年齢人口',
      value: 2
    },
    {
      label: '老年人口',
      value: 3
    }
  ]
  return (
    <div className="container form-check">
      <div className="row">
        {radioButtons.map((radio) => {
          return (
            <div key={radio.label} className="col-4">
              <input
                className="form-check-input"
                type="radio"
                name="populationType"
                value={radio.value}
                checked={radio.value === populationType}
                onChange={(e) => {
                  changeValue(e)
                  //prefnamesを初期化する処理
                  setPrefNames([])
                  //ここにチェックボックスのリセットの処理
                  
                  //resetlineitemsもかく？
                }}
              />
              <label className="form-check-label">
                <span className="fs-6">{radio.label}</span>
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default RadioButton
