import { configureStore } from '@reduxjs/toolkit'
import { sevenApi } from './sevenApi/seven.api'

export const store = configureStore({
	reducer: {
		[sevenApi.reducerPath]: sevenApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(sevenApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
