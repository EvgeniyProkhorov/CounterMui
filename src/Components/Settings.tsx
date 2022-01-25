import React from "react";
import {Input} from "./Input";
import {Button} from "@mui/material";

type SettingsProps = {
    maxValue: number
    startValue: number
    settingsMode: string | null
    settingsBtn: boolean
    setSettingsMode: (value: string | null) => void
    setStartValueFn: (value: number) => void
    setMaxValueFn: (value: number) => void
    setValues: (maxVl: number, startVl: number) => void
}

export const Settings = ({
                             maxValue,
                             startValue,
                             setSettingsMode,
                             setMaxValueFn,
                             setStartValueFn,
                             setValues,
                             settingsBtn,
                             settingsMode
                         }: SettingsProps) => {

    const setValuesFn = () => {
        setValues(maxValue, startValue)
        setSettingsMode(null)
    }

    return (
        <div>
            <Input
                title={'Max value'}
                value={maxValue}
                settingsMode={settingsMode}
                callback={(value) => setMaxValueFn(value)}

            />
            <Input
                title={'Start value'}
                value={startValue}
                settingsMode={settingsMode}
                callback={(value) => setStartValueFn(value)}
            />
            <Button size={'small'} onClick={setValuesFn} disabled={settingsBtn}>{'Set'}</Button>
        </div>
    )
}