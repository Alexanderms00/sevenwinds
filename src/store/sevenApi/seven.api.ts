import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import eID from '../apiID'

export const sevenApi: any = createApi({
	reducerPath: 'seven/api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://185.244.172.108:8081' }),
	refetchOnFocus: true,
	endpoints: build => ({
		allLines: build.query({
			query: () => ({
				url: `/v1/outlay-rows/entity/${eID}/row/list`,
			}),
		}),

		updateLines: build.mutation({
			query: body =>  ({
				url: `/v1/outlay-rows/entity/${eID}/row/${body.rID}/update`,
				method: 'POST',
				body: body.bod,
			}),
		}),
		addLines: build.mutation({
			query: body => ({
				url: `/v1/outlay-rows/entity/${eID}/row/create`,
				method: 'POST',
				body,
			}),
		}),
		deleteLines: build.mutation({
			query: rID => ({
				url: `/v1/outlay-rows/entity/${eID}/row/${rID}/delete`,
				method: 'DELETE',
			}),
		}),
	}),
})
export const {
	useAllLinesQuery,
	useAddLinesMutation,
	useDeleteLinesMutation,
	useUpdateLinesMutation,
} = sevenApi
