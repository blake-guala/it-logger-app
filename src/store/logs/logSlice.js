import { createSlice } from "@reduxjs/toolkit";
import { deleteLogsThunk, editLogsThunk, fetchLogsThunk, postLogsThunk } from "./logThunks";

const initialState = {
    logs: [],
    loading: false,
    alert: null,
    current: null,
    filLogs: null
}

export const logSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        setAlert: (state, action) => {
            state.alert = action.payload
        },
        removeAlert:(state, action) => {
            state.alert = null
        },
        setCurrent: (state, action) => {
            state.current = action.payload
        },
        searchLogs: (state, action) => {
            state.logs = state.filLogs.filter(log => log.message.toLowerCase().includes(action.payload) || log.tech.toLowerCase().includes(action.payload))
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchLogsThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchLogsThunk.fulfilled, (state, action) => {
            state.logs = action.payload.data
            state.filLogs = action.payload.data
            state.loading = false
        })
        .addCase(postLogsThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(postLogsThunk.fulfilled, (state, action) => {
            state.logs.push(action.payload)
            state.loading = false
        })
        .addCase(deleteLogsThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(deleteLogsThunk.fulfilled, (state,action) => {
            state.logs.filter(log => log.id !== action.payload)
            state.loading = false
        })
        .addCase(editLogsThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(editLogsThunk.fulfilled, (state, action) => {
            state.logs.map(log => log.id === action.payload.id ? action.payload : log)
            state.loading = false
        })
    }

})
 // eslint-disable-next-line
export const {setAlert, removeAlert, setCurrent, searchLogs} = logSlice.actions
export default logSlice.reducer