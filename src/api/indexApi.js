import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const indexApi = createApi({
  reducerPath: "indexApi",
  baseQuery: fetchBaseQuery({ baseUrl: "127.0.0.1:3000" }),
  endpoints: (build) => ({
    // getLectureRankingByDepartmentId: build.query({
    //   query: ({ limit = 5, departmentId = 0 }) =>
    //     `lectures?departmentId=${departmentId}&limit=${limit}&page=1&sort=평점순`,
    // }),
    // getLectureResources: build.query({
    //   query: ({ limit = 10, order = "hits" }) =>
    //     `lecture-banks?limit=${limit}&order=${order}&page=1`,
    // }),
  }),
});

export const {
  // useGetLectureResourcesQuery,
  // useGetLectureRankingByDepartmentIdQuery,
} = indexApi;
