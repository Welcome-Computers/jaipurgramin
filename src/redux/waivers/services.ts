import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";
import { queryString } from "object-query-string";

// Define types for query arguments and response
interface WaiverRecordArgs {
  limit?: number;
  page?: number;
  search?: string;
}

interface WaiverRecord {
  id: number;
  name: string;
  description: string;
}

interface WaiverRecordsResponse {
  data: WaiverRecord[];
  total: number;
  currentPage: number;
  totalPages: number;
}

export const waiversApi = createApi({
  reducerPath: "waiversApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
    prepareHeaders: async (headers) => {
      const session = (await getSession()) as {
        user?: { auth_token: string };
      } | null;
      if (session?.user?.auth_token) {
        headers.set("authorization", `Bearer ${session.user.auth_token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "all_waiver",
    "document",
    "subscriptions",
    "billingCommunications",
    "invoice_details",
    "documentList",
    "extensionPack",
  ],
  endpoints: (builder) => ({
    // Define a typed endpoint
    _fetchAllWaiverRecords_: builder.query<
      WaiverRecordsResponse,
      WaiverRecordArgs
    >({
      query: (args) => ({
        url: `/facility/waiver_packs/fetch_all_waiver_records?${queryString(
          args
        )}`,
        method: "GET",
      }),
      providesTags: ["all_waiver"],
    }),
  }),
});

// Export hooks with typed names
export const { use_fetchAllWaiverRecords_Query } = waiversApi;
