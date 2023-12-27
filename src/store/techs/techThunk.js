import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTechs, deleteTech, getTechs } from "../../utils/api";


export const fetchTechsThunk = createAsyncThunk('techs/get', async() => {
    return getTechs()
})

export const postTechThunk = createAsyncThunk('tech/post', async(tech) => {
    return addTechs(tech)
})

export const deleteTechThunk = createAsyncThunk('tech/delete', async(id) => {
    return deleteTech(id)
})