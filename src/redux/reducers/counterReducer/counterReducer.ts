import { CounterActionType } from "./counterActionCreators"

export type CounterType = {
    count: number
    startValue: number
    maxValue: number
    settingMode: null | string
}

const initState = {
    count: 0,
    startValue: 0,
    maxValue: 10,
    settingMode: null
}

export const counterReducer = (state: CounterType = initState, action: CounterActionType): CounterType => {
    switch (action.type) {
        case "SET-COUNT":
            return { ...state, count: action.payload }
        case 'INCR-COUNTER':
            return { ...state, count: state.count + 1 }
        case "RESET-COUNTER":
            return { ...state, count: state.startValue }
        case "SET-START-VALUE":
            return { ...state, startValue: action.payload }
        case "SET-MAX-VALUE":
            return { ...state, maxValue: action.payload }
        case "SET-SETTINGS-MODE":
            return { ...state, settingMode: action.payload }
        default:
            return state
    }
}
