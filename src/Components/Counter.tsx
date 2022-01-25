import React from "react";
import {IconButton} from "@mui/material";
import {Add, RestartAlt} from "@mui/icons-material";

type CounterProps = {
    count: number
    settingsMode: string | null
    incrementBtn: () => void
    incrBtnState: boolean
    resetBtn: () => void
    resetBtnState: boolean
    maxValue: number
}

export const Counter = ({
                            count,
                            incrementBtn,
                            incrBtnState,
                            resetBtn,
                            resetBtnState,
                            settingsMode,
                            maxValue
                        }: CounterProps) => {

    const invalidValue = settingsMode === 'Invalid value!' ? 'red' : ''
    const maxCount = count === maxValue ? 'red' : ''

    return (
        <div>
            {settingsMode ? <div style={{fontSize: '18px', color: invalidValue}}>{settingsMode}</div> :
                <div style={{color: maxCount}}>{count}</div>}
            <IconButton color={'primary'} onClick={incrementBtn} disabled={incrBtnState}><Add/></IconButton>
            <IconButton onClick={resetBtn} disabled={resetBtnState}><RestartAlt/></IconButton>
        </div>
    )
}