import { configureStore } from '@reduxjs/toolkit'
import logReducer from './logs/logSlice'
import techReducer from './techs/techSlice'

export const store = configureStore({
    reducer: {
        log: logReducer,
        tech: techReducer
    },

    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false })
})
