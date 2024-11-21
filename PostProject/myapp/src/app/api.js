 import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 
console.log('api.js called');
 export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Users','Posts'],

   endpoints: () => ({}),

})

