import React, {ChangeEvent, KeyboardEvent} from "react";
import {TextField} from "@mui/material";

type OptionsProps = {
    title: string
    value: number
    settingsMode: string | null
    callback: (value: number) => void

}

export const Input = ({title, value, settingsMode, callback}: OptionsProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(e.currentTarget.valueAsNumber)
        console.log(`onChangeHandler - ${e.currentTarget.valueAsNumber}`)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter"
        && callback(e.currentTarget.valueAsNumber)

    }


    return (
        <div>
            <TextField style={{margin: '5px'}}
                       error={settingsMode === 'Invalid value!'}
                       size={'small'}
                       value={value}
                       label={title}
                       type="number"
                       InputLabelProps={{
                           shrink: true,
                       }}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
            />
        </div>
    )
}