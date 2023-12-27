import { createSlice } from "@reduxjs/toolkit";
import { deleteTechThunk, fetchTechsThunk, postTechThunk } from "./techThunk";

const initialState = {
    techs: [],
    loading: false,
    error: null
}

export const techSlice = createSlice({
    name: 'tech',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(fetchTechsThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchTechsThunk.fulfilled, (state, action) => {
            state.techs = action.payload.data
            state.loading = false
        })
        .addCase(fetchTechsThunk.rejected, (state, action) => {
            state.error = action.payload.data
        })
        .addCase(postTechThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(postTechThunk.fulfilled, (state, action) => {
            state.techs.push(action.payload)
        })
        .addCase(deleteTechThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(deleteTechThunk.fulfilled, (state, action) => {
            state.tech = state.techs.splice(action.payload)
            // state.techs.filter(tech => tech.id !== action.payload)
        })
    }
})

// export const {} = techSlice.action
export default techSlice.reducer