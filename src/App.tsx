import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Settings} from "./Components/Settings";
import {Container, Paper, Stack} from "@mui/material";

function App() {
    const [count, setCount] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [settingsMode, setSettingsMode] = useState<null | string>(null)

    useEffect(() => {
        let startValueAsStr = localStorage.getItem('Start value')
        if (startValueAsStr) {
            setStartValue(JSON.parse(startValueAsStr))
            setCount(JSON.parse(startValueAsStr))
        }
    }, [])
    useEffect(() => {
        let maxValueAsStr = localStorage.getItem('Max value')
        if (maxValueAsStr) {
            setMaxValue(JSON.parse(maxValueAsStr))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('Start value', JSON.stringify(startValue))
    }, [startValue])
    useEffect(() => {
        localStorage.setItem('Max value', JSON.stringify(maxValue))
    }, [maxValue])


    const setMaxValueFn = (value: number) => {
        if (value >= 0) {
            settingModeFn(startValue, value)
            setMaxValue(value)
        }
        console.log(`Max Value is - ${value}`)
    }
    const setStartValueFn = (value: number) => {
        if (value >= 0) {
            settingModeFn(value, maxValue)
            setStartValue(value)
            setCount(value)
        }

        console.log(`Start Value is - ${value}`)
        console.log(`Count Value is - ${value}`)
    }
    const incrementBtn = () => {
        count < maxValue ? setCount(count + 1) : setCount(maxValue)
    }
    const resetBtn = () => {
        setCount(startValue)
    }
    const setValues = (maxVl: number, startVl: number) => {
        setMaxValue(maxVl)
        setStartValue(startVl)
    }
    const settingModeFn = (start: number, max: number) => {
        if (start >= max) {
            return setSettingsMode('Invalid value!')
        } else if (start < 0) {
            return setSettingsMode('Invalid value!')
        } else if (max < 0) {
            return setSettingsMode('Invalid value!')
        }
        return setSettingsMode('Enter value and press Set')
    }

    //Disabled rule for inc button
    const isIncDisabled = maxValue === count
        || settingsMode === 'Enter value and press Set'
        || settingsMode === 'Invalid value!'
    const isResetDisabled = settingsMode === 'Invalid value!'
        || settingsMode === 'Enter value and press Set'
    const isSetDisabled = !settingsMode || settingsMode === 'Invalid value!'

    return (
        <div className="App">
            <Container fixed>
                <Stack
                    style={{
                        textAlign: 'center',
                        width: '280px',
                        fontSize: '20px',
                        position: 'absolute',
                        bottom: '50%',
                        right: '50%'
                    }}>
                    <Paper variant={'outlined'}>
                        <Counter count={count}
                                 incrementBtn={incrementBtn} incrBtnState={isIncDisabled}
                                 resetBtn={resetBtn} resetBtnState={isResetDisabled}
                                 settingsMode={settingsMode}
                                 maxValue={maxValue}
                        />
                        <Settings setStartValueFn={setStartValueFn}
                                  setMaxValueFn={setMaxValueFn}
                                  maxValue={maxValue}
                                  startValue={startValue}
                                  settingsMode={settingsMode}
                                  setSettingsMode={setSettingsMode}
                                  setValues={setValues}
                                  settingsBtn={isSetDisabled}
                        />
                    </Paper>
                </Stack>
            </Container>
        </div>
    )
}

export default App;

