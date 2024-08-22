import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './querySlice';
import pageNumberReducer from './pageNumberSlice';
import loadingReducer from './loadingSlice';
import pageOpenedReducer from './pageOpenedSlice';

export const store = configureStore({
    reducer: {
        query: queryReducer,
        pageNumber: pageNumberReducer,
        loading: loadingReducer,
        pageOpened: pageOpenedReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 