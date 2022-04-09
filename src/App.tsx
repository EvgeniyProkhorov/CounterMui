import React, { useEffect } from 'react';
import './App.css';
import { Counter } from "./Components/Counter";
import { Settings } from "./Components/Settings";
import { Container, Paper, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "./redux/store/store";
import {
    incrCounter,
    resetCounter,
    setCount,
    setMaxValue,
    setStartValue,
    settingsMode
} from "./redux/reducers/counterReducer/counterActionCreators";
import { CounterType } from './redux/reducers/counterReducer/counterReducer';

function App() {
    // const [count, setCount] = useState<number>(0)
    // const [startValue, setStartValue] = useState<number>(0)
    // const [maxValue, setMaxValue] = useState<number>(5)
    // const [settingsMode, setSettingsMode] = useState<null | string>(null)

    const dispatch = useDispatch()
    const counter = useSelector<AppStateType, CounterType>(state => state.counterState)

    useEffect(() => {
        let startValueAsStr = localStorage.getItem('Start value')
        let maxValueAsStr = localStorage.getItem('Max value')
        if (startValueAsStr) {
            dispatch(setStartValue(JSON.parse(startValueAsStr)))
            dispatch(setCount(JSON.parse(startValueAsStr)))
        }
        if (maxValueAsStr) {
            dispatch(setMaxValue(JSON.parse(maxValueAsStr)))
        }
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem('Start value', JSON.stringify(counter.startValue))
        localStorage.setItem('Max value', JSON.stringify(counter.maxValue))

    }, [counter.maxValue, counter.startValue])

    const setSettingsMode = (value: null | string) => {
        dispatch(settingsMode(value))
    }

    const setMaxValueFn = (value: number) => {
        if (value >= 0) {
            settingModeFn(counter.startValue, value)
            dispatch(setMaxValue(value))
        }
        console.log(`Max Value is - ${value}`)
    }
    const setStartValueFn = (value: number) => {
        if (value >= 0) {
            settingModeFn(value, counter.maxValue)
            dispatch(setStartValue(value))
            dispatch(setCount(value))
        }

        console.log(`Start Value is - ${value}`)
        console.log(`Count Value is - ${value}`)
    }
    const incrementBtn = () => {
        counter.count < counter.maxValue ? dispatch(incrCounter()) : dispatch(setCount(counter.maxValue))
    }
    const resetBtn = () => {
        dispatch(resetCounter())
    }
    const setValues = (maxVl: number, startVl: number) => {
        setMaxValue(maxVl)
        setStartValue(startVl)
    }
    const settingModeFn = (start: number, max: number) => {
        if (start >= max) {
            return dispatch(settingsMode('Invalid value!'))
        } else if (start < 0) {
            return dispatch(settingsMode('Invalid value!'))
        } else if (max < 0) {
            return dispatch(settingsMode('Invalid value!'))
        }
        return dispatch(settingsMode('Enter value and press Set'))
    }

    //Disabled rule for inc button
    const isIncDisabled = counter.maxValue === counter.count
        || counter.settingMode === 'Enter value and press Set'
        || counter.settingMode === 'Invalid value!'
    const isResetDisabled = counter.settingMode === 'Invalid value!'
        || counter.settingMode === 'Enter value and press Set'
    const isSetDisabled = !counter.settingMode || counter.settingMode === 'Invalid value!'

    return (
        <div className="App">
            <Container fixed style={{ marginTop: "20%" }}>
                <Stack
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: 'center',
                        // width: '280px',
                        fontSize: '20px',
                        // position: 'absolute',
                        // bottom: '50%',
                        // right: '50%'
                    }}>
                    <Paper variant={'outlined'}>
                        <Counter count={counter.count}
                            incrementBtn={incrementBtn} incrBtnState={isIncDisabled}
                            resetBtn={resetBtn} resetBtnState={isResetDisabled}
                            settingsMode={counter.settingMode}
                            maxValue={counter.maxValue}
                        />
                        <Settings setStartValueFn={setStartValueFn}
                            setMaxValueFn={setMaxValueFn}
                            maxValue={counter.maxValue}
                            startValue={counter.startValue}
                            settingsMode={counter.settingMode}
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

