import { createSlice } from "@reduxjs/toolkit";

interface PageOpenedState {
  pageOpened: string;
}

const initialState: PageOpenedState = {
  pageOpened: '',
}

export const pageOpenedSlice = createSlice({
    name: 'pageOpened',
    initialState,
    reducers: {
        modifyPageOpened: (state, action) => {
            state.pageOpened = action.payload;
        }
    }
})

export const { modifyPageOpened } = pageOpenedSlice.actions
export default pageOpenedSlice.reducer