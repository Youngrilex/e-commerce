// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";



// export const apiSlice = createApi({
//     reducerPath:"api",
//     baseQuery:fetchBaseQuery({
//         baseUrl:"http://localhost:3001/",

//     }),
//     tagTypes:apiTagTypes,
//     endpoints:(builder)=>({}),
// })


// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // Define the base API slice
// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:3001/',
//   }),
//   endpoints: () => ({}),
// });


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;


