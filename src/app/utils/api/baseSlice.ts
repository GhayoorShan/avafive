import { createApi } from "@reduxjs/toolkit/query/react";
import { mutations, queries } from "./apiDetails";
import { transformErrorResponse } from "./handleErrors";
import customFetchBase from "./baseQuery";

interface CustomJsonObject<T> {
  [key: string]: T;
}

export const baseSliceAPI = createApi({
  reducerPath: "baseSlice",
  baseQuery: customFetchBase,
  tagTypes: ["POST"],
  endpoints: (build) => {
    const endPoints: CustomJsonObject<any> = {};

    Object.keys(mutations).forEach((key: string) => {
      const apiDetails = mutations[key];
      const { tags = [] } = apiDetails;
      endPoints[key] = build.mutation({
        query: (body: any) => {
          if (apiDetails.type) {
            return {
              url: apiDetails.url,
              method: apiDetails.method,
              body: body,
            };
          }
          return {
            url: apiDetails.url,
            method: apiDetails.method,
            body: { ...body, language: "en" },
          };
        },
        invalidatesTags: tags as any,
        transformResponse: (response, meta, arg) =>
          apiDetails.transformResponse(response),
        transformErrorResponse: (response, meta, arg) =>
          apiDetails.transformErrorResponse
            ? apiDetails.transformErrorResponse(response)
            : transformErrorResponse(response),
      });
    });

    Object.keys(queries).forEach((key) => {
      const apiDetails = queries[key];
      const { tags = [] } = apiDetails;

      endPoints[key] = build.query({
        query: (body: any) => ({
          url: apiDetails.url,
          method: apiDetails.method,
          body:
            apiDetails.method === "GET"
              ? undefined
              : { ...body, language: "en" },
        }),
        // providesTags: tags as any,
        transformResponse: (response, meta, arg) =>
          apiDetails.transformResponse(response),
        transformErrorResponse: (response, meta, arg) =>
          transformErrorResponse(response),
      });
    });

    return endPoints;
  },
});

export const { useProductsQuery } = baseSliceAPI;
