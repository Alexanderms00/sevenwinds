import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import eID from '../apiID'

export const sevenApi: any = createApi({
	reducerPath: 'seven/api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://185.244.172.108:8081' }),
	tagTypes:['LIST'],
	refetchOnFocus: true,
	endpoints: build => ({
		allLines: build.query({
			query: () => ({
				url: `/v1/outlay-rows/entity/${eID}/row/list`,
			}),
			providesTags: ['LIST']
		}),

		updateLines: build.mutation({
			query: body => ({
				url: `/v1/outlay-rows/entity/${eID}/row/${body.rID}/update`,
				method: 'POST',
				body: body.bod,
			}),
			invalidatesTags:['LIST']
		}),
		addLines: build.mutation({
			query: body => ({
				url: `/v1/outlay-rows/entity/${eID}/row/create`,
				method: 'POST',
				body,
			}),
			invalidatesTags:['LIST']
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
