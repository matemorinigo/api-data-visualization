import { createSlice } from '@reduxjs/toolkit'

interface PageNumberState {
    pageNumber: number
}

const initialState: PageNumberState = {
    pageNumber: 1 
}

export const pageNumberSlice = createSlice({
    name: 'pageNumber',
    initialState,
    reducers: {
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload
        }
    }
})

export const { setPageNumber } = pageNumberSlice.actions
export default pageNumberSlice.reducer