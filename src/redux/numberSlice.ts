import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface NumberState {
    number: string
}

const initialState: NumberState = {
    number: '',
}

const numberSlice = createSlice({
    name: 'numbers',
    initialState,
    reducers: {
        setNumber: (state, action: PayloadAction<string>) => {
            state.number += action.payload
        },
    },
})

export default numberSlice