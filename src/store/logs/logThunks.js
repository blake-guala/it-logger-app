import { createAsyncThunk } from "@reduxjs/toolkit";
import { addLogs, deleteLogs, getLogs, updateLogs } from "../../utils/api";


export const fetchLogsThunk = createAsyncThunk('logs/get', async() => {
    return getLogs()
})

export const postLogsThunk = createAsyncThunk('logs/post', async(log) => {
    return addLogs(log)
})

export const deleteLogsThunk = createAsyncThunk('logs/delete', async(id) => {
    return deleteLogs(id)
})

export const editLogsThunk = createAsyncThunk('logs/put', async(log)=> {
    return updateLogs(log)
} )









































// export const postLogsThunk = createAsyncThunk('logs/post', async(log) => {
//     return addLogs(log)
//     // const config = {
//     //     headers: {
//     //         'Content-Type' : 'application/json'
//     //     }
//     // }

//     // try {
//     //     const {data} = await axios.post('/logs', log, config)

//     //     return data
//     // } catch (error) {
        
//     // }
// })