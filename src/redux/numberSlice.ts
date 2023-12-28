import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface NumberState {
    number: number[],
    result: number,
    action: string,
}

const initialState: NumberState = {
    number: [],
    result: 0,
    action: '',
}

const numberSlice = createSlice({
    name: 'numbers',
    initialState,
    reducers: {
        setNumber: (state, action: PayloadAction<number>) => {
            state.number.push(action.payload)
        },
        setAction: (state, action: PayloadAction<string>) => {
            state.action = action.payload
        },
        calculateResult: (state) => {
            state.result = state.number[0]
        },
        clearNumber: (state) => {
            state.number = []
        }
    },
})

export default numberSlice