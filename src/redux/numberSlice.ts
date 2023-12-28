import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface NumberState {
    number: string,
    result: string,
    action: string,
}

const initialState: NumberState = {
    number: '',
    result: '',
    action: '',
}

const numberSlice = createSlice({
    name: 'numbers',
    initialState,
    reducers: {
        setNumber: (state, action: PayloadAction<string>) => {
            state.number += action.payload
        },
        setAction: (state, action: PayloadAction<string>) => {
            state.action = action.payload
        },
        calculateResult: (state) => {
            state.result = state.number
        },
        clearNumber: (state) => {
            state.number = ''
        }
    },
})

export default numberSlice