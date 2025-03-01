import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api', // used to generate reducer for the api
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // base URL for API requests
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'info',
    }),
  }),
});

export const { useGetPostsQuery } = api;

export default api;
