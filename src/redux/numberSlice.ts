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
        clearNumber: (state) => {
            state.number = ''
        }
    },
})

export default numberSlice