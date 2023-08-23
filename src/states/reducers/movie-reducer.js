import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    initialState: { movies: [], maxPageCount: 0, currentPage: 1, type: 'movies', searchTerm: '' },
    name: 'movie',
    reducers: {
        setMovies(state, action) {
            state.movies = action.payload;

        },
        setMaxPageCount(state, action) {
            state.maxPageCount = action.payload;

        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;

        }, setType(state, action) {
            state.type = action.payload;

        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;

        }

    }
})


export const {setCurrentPage,setMaxPageCount,setMovies,setSearchTerm,setType} =  movieSlice.actions
const movieReducer = movieSlice.reducer ;
export default movieReducer ;