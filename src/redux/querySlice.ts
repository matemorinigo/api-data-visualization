import { createSlice } from '@reduxjs/toolkit';

interface QueryState {
    query: string,
}

const initialState: QueryState = {
    query: ''
}

export const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        modifyQuery: (state, action) => {
            const { propertyName, filter, value }: { propertyName: string, filter: string, value: string } = action.payload;
            const queryRegex = new RegExp(`filter\\[${propertyName}_\\w+\\]=\\w+`, 'g');
            let newQuery;

            if(state.query !== ''){
    
                if(state.query.includes(`${propertyName}`)){

                     newQuery = state.query.replace(queryRegex, `filter[${propertyName}_${filter}]=${value}`);

                  }else{
                    newQuery = `${state.query}&filter[${propertyName}_${filter}]=${value}`
                    
                  }
              }else{
                newQuery = `filter[${propertyName}_${filter}]=${value}`
              }

              state.query = newQuery
        }
    }
})

export const { modifyQuery } = querySlice.actions
export default querySlice.reducer
