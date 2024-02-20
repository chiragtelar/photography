import { SLIDER_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const sliderApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
         getSlider : builder.query({
            query : () => ({
                url : SLIDER_URL
            }),
            providesTags : ['Slider'],
            keepUnusedDataFor : 5
         }),
         getSliderDetails : builder.query({
            query : (sliderId) => ({
                url : `${SLIDER_URL}/${sliderId}`
            }),
            keepUnusedDataFor : 5
         }),
         createSlider : builder.mutation({
            query : () => ({
                url : SLIDER_URL,
                method : "POST"
            }),
            invalidatesTags : ["Slider"]
         }),
         updateSlider : builder.mutation({
            query : (data) => ({
                url : `${SLIDER_URL}/${data.sliderId}`,
                method : "PUT",
                body : data
            }),
            invalidatesTags : ['Slider']
         }),
         deleteSlider : builder.mutation({
            query : (id) => ({
                url : `${SLIDER_URL}/${id}`,
                method : 'DELETE'
            }),
         }),
    })
});

export const {
    useGetSliderQuery,
    useGetSliderDetailsQuery,
    useCreateSliderMutation,
    useUpdateSliderMutation,
    useDeleteSliderMutation
} = sliderApiSlice;