import React, { Dispatch, SetStateAction, useState } from "react";
import styles from '@/components/RadioButton.module.css'

interface Props {
    populationType:number 
    setPopulationType: Dispatch<SetStateAction<number>>;
}

interface Radio {
    label: string
    value: number
}

const RadioButton = ({populationType, setPopulationType}:Props) => {
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => setPopulationType(Number(event.target.value));
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
                        <input className="form-check-input" type="radio" name="populationType" 
                            value={radio.value} checked={radio.value === populationType} onChange={changeValue}/>
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
export default RadioButton;
