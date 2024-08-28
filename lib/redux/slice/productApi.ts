import { BaseQueryFn, EndpointBuilder, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { apiSlice } from "../apiSlice";

// interface Product {
//     id: string;
//     name: string;
//     description: string;
//     price: number;
//     category: string;
//     image: string;
//   }

// Exported API tag types for use in invalidating or providing cache tags
export const apiTagTypes = [
    'Product',
    'Products',
] as const;

// Type for API tags based on the `apiTagTypes` array
type TApiTag = (typeof apiTagTypes)[number];

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, TApiTag, 'api'>) => ({

        // get all products
        getProducts: builder.query({
            query: () => ({
                url: 'products',
                method: "GET"
            }),
            providesTags: ['Products'],  // Optionally tag this data for cache management
        }),
    }),
});

export const {
    useGetProductsQuery,
    useLazyGetProductsQuery
  } = productApi;