import { apiSlice } from "../apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder: TAppBuilder) => ({
    // get all products
    getProducts: builder.query<Product[], Record<string, unknown>>({
      query: (params: any) => ({
        url: "products",
        params,
      }),
      providesTags: ["Products"],
    }),

    //create product

    createProduct: builder.mutation<any, CreateProduct>({
      query: (data: CreateProduct) => ({
        url: "products",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Products"],
    }),

    updateProduct: builder.mutation<any, CreateProduct>({
      query: ({ id, ...data }: CreateProduct) => ({
        url: `products/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),

    deleteProduct: builder.mutation<any, string>({
      query: (id: string) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
