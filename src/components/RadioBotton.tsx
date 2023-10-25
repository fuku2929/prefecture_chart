import React, { Dispatch, SetStateAction, useState } from "react";
interface Props {
    populationType:number 
    setPopulationType: Dispatch<SetStateAction<number>>;
}


/** ラジオボタン設定 */
interface Radio {
    label: string
    value: number
}

const RadioButton = ({populationType, setPopulationType}:Props) => {
    /** 選択中のラジオボタンvalue */
    // const [populationType, setPopulationType] = useState<number>(0);
    /** ラジオボタン切り替えイベント */
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => setPopulationType(Number(event.target.value));
    /** ラジオボタン */
    const radioButtons: Radio[] = [
        {
            label: "総人口",
            value: 0
        },
        {
            label: "年少人口",
            value: 1
        },
        {
            label: "生産年齢人口",
            value: 2
        },
        {
            label: "老年人口",
            value: 3
        }

    ]
    return (
        <div className="container form-check">
            <div className="row">
            {radioButtons.map(radio => {
                return (
                    <div className="col-4">
                        {/* checked属性に式を定義する */}
                        <input className="form-check-input" type="radio" name="populationType" 
                            value={radio.value} checked={radio.value === populationType} onChange={changeValue}/>
                        <label className="form-check-label">
                            <span className="fs-6">{radio.label}</span>
                        </label>
                    </div>
                )
            })}
            </div>
            <div>{populationType}が選択されました！</div>
        </div>
    )
}
export default RadioButton;
