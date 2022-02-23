export type CounterType = {
    count: number
    startValue: number
    maxValue: number
    settingMode: null | string
}

type ActionType = ReturnType<typeof setCount>
    | ReturnType<typeof incrCounter>
    | ReturnType<typeof resetCounter>
    | ReturnType<typeof setStartValue>
    | ReturnType<typeof setMaxValue>
    | ReturnType<typeof settingsMode>

const initState = {
    count: 0,
    startValue: 0,
    maxValue: 10,
    settingMode: null
}

export const counterReducer = (state: CounterType = initState, action: ActionType): CounterType => {
    switch (action.type) {
        case "SET-COUNT":
            return {...state, count: action.payload}
        case 'INCR-COUNTER':
            return {...state, count: state.count + 1}
        case "RESET-COUNTER":
            return {...state, count: state.startValue}
        case "SET-START-VALUE":
            return {...state, startValue: action.payload}
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.payload}
        case "SET-SETTINGS-MODE":
            return {...state, settingMode: action.payload}
        default:
            return state
    }
}

export const setCount = (value: number) => {
    return {
        type: 'SET-COUNT',
        payload: value
    } as const
}

export const incrCounter = () => {
    return {
        type: 'INCR-COUNTER'
    } as const
}

export const resetCounter = () => {
    return {
        type: 'RESET-COUNTER'
    } as const
}

export const setStartValue = (startValue: number) => {
    return {
        type: 'SET-START-VALUE',
        payload: startValue
    } as const
}

export const setMaxValue = (maxValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: maxValue
    } as const
}

export const settingsMode = (value: null | string) => {
    return {
        type: 'SET-SETTINGS-MODE',
        payload: value
    } as const
}