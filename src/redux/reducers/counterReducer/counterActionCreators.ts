export type CounterActionType = ReturnType<typeof setCount>
    | ReturnType<typeof incrCounter>
    | ReturnType<typeof resetCounter>
    | ReturnType<typeof setStartValue>
    | ReturnType<typeof setMaxValue>
    | ReturnType<typeof settingsMode>

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