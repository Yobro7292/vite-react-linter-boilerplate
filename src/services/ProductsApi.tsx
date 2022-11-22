import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ProductsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: (builder) => ({
    products: builder.query<unknown, void>({
      query: () => '/products',
    }),
  }),
});

export const { useProductsQuery } = ProductsApi;

export default ProductsApi;
