import { CONFIGURATION_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const confgirationApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getConfiguration : builder.query({
            query : () => ({
                url : CONFIGURATION_URL,
            }),
            providesTags : ['Configuration'],
            keepUnusedDataFor : 5
        }),
        getConfigurationDetails : builder.query({
            query : (configurationId) => ({
                url : `${CONFIGURATION_URL}/${configurationId}`,
            }),
            keepUnusedDataFor : 5
        }),
        createConfiguration : builder.mutation({
            query : (data) => ({
                url : CONFIGURATION_URL,
                method : "POST",
                body : data
            }),
            invalidatesTags: ["Configuration"]
        }),
        updateConfiguration : builder.mutation({
            query : (data) => ({
                url : `${CONFIGURATION_URL}/${data.configurationId}`,
                method: "PUT",
                body : data
            }),
            invalidatesTags : ["Configuration"]
        }),
        uploadConfigurationImage :  builder.mutation({
            query : (data) => ({
                url : `${UPLOAD_URL}`,
                method : "POST",
                body : data
            })
        }),
        deleteConfiguration : builder.mutation({
            query : (id) => ({
                url : `${CONFIGURATION_URL}/${id}`,
                method : "DELETE"
            }),
        }),
    }),
})

export const {
    useGetConfigurationQuery,
    useGetConfigurationDetailsQuery,
    useCreateConfigurationMutation,
    useUpdateConfigurationMutation,
    useUploadConfigurationImageMutation,
    useDeleteConfigurationMutation
} = confgirationApiSlice;