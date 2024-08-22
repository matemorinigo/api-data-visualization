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
            const queryRegex = new RegExp(`filter\\[${propertyName}_\\w+\\]=((\\w|\\s)*)`, 'g');
            let newQuery;
            newQuery = state.query.replace(queryRegex, `filter[${propertyName}_${filter}]=${encodeURIComponent(value)}`);
            if(state.query !== ''){
    
                if(state.query.includes(`${propertyName}`)){

                     newQuery = state.query.replace(queryRegex, `filter[${propertyName}_${filter}]=${value}`);

                  }else{
                    newQuery = `${state.query}&filter[${propertyName}_${filter}]=${value}`
                  }
              }else{
                console.log(state.query)
                newQuery = `filter[${propertyName}_${filter}]=${value}`
              }

              state.query = newQuery
        },
        deleteFilter(state, action){
            const { propertyName }: { propertyName: string } = action.payload;
            const queryRegex = new RegExp(`filter\\[${propertyName}_\\w+\\]=[\\w+|1]`, 'g');
            const newQuery = state.query.replace(queryRegex, '');
            state.query = newQuery
            console.log(newQuery)
        }
    }
})

export const { modifyQuery, deleteFilter } = querySlice.actions
export default querySlice.reducer
