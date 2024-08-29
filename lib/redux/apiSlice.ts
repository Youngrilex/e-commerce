import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, QueryDefinition ,QueryActionCreatorResult} from '@reduxjs/toolkit/query/react';


// const apiTagTypes = [
//   'Product',
//   'Products',
// ] as const;

export type TQueryActionCreatorResult = QueryActionCreatorResult<QueryDefinition<
unknown,
BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, TApiTag, 'api'
>>

// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ 
//     baseUrl: 'https://run.mocky.io/v3/afe5d739-9b08-4e64-a0af-0efe94f6fc06',
//    }),
//   tagTypes:apiTagTypes,
//   endpoints: (builder) => ({
//   }),
// });


// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiTagTypes = [
  'Product',
  'Products',
] as const;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://run.mocky.io/v3/afe5d739-9b08-4e64-a0af-0efe94f6fc06',
   }),
  tagTypes: apiTagTypes,
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/products', // Update this path based on your actual API
      transformResponse: (response: { products: Product[] }) => response.products, // Transform the response to only include products array
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;




