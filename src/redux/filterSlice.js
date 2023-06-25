const { createSlice } = require("@reduxjs/toolkit");

const filterInicialState = {
    filter: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInicialState,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const {setFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;