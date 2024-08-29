import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, QueryDefinition ,QueryActionCreatorResult} from '@reduxjs/toolkit/query/react';


const apiTagTypes = [
  'Product',
  'Products',
] as const;

export type TQueryActionCreatorResult = QueryActionCreatorResult<QueryDefinition<
unknown,
BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, TApiTag, 'api'
>>

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3001/',
   }),
  tagTypes:apiTagTypes,
  endpoints: (builder) => ({
  }),
});




