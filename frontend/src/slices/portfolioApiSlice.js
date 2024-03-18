import { PORTFOLIO_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const portfolioApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPortfolio: builder.query({
      query: () => ({
        url: PORTFOLIO_URL,
      }),
      providesTags: ["Portfolio"],
      keepUnusedDataFor: 5,
    }),
    getPortfolioDetails: builder.query({
      query: (portfolioId) => ({
        url: `${PORTFOLIO_URL}/${portfolioId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createPortfolio: builder.mutation({
      query: (data) => ({
        url: `${PORTFOLIO_URL}`,
        method: "POST",
      }),
      invalidatesTags: ["Portfolio"],
    }),
    updatePortfolio: builder.mutation({
      query: (data) => ({
        url: `${PORTFOLIO_URL}/${data.portfolioId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Portfolio"],
    }),
    uploadPortfolioImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    deletePortfolio: builder.mutation({
      query: (id) => ({
        url: `${PORTFOLIO_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPortfolioQuery,
  useGetPortfolioDetailsQuery,
  useCreatePortfolioMutation,
  useUpdatePortfolioMutation,
  useUploadPortfolioImageMutation,
  useDeletePortfolioMutation,
} = portfolioApiSlice;
