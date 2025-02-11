import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { defaultPagination } from "./types";
export const default_payment_flow_popup = {
  current_plan: null,

  common_popups: {
    new_plan: false, // Main Page
    thinking_downgrading: false, // Plan_upgrade page
    add_new_or_buy: false, // Document Page
    password_protection: false, // flex_sign_create, flex_sign_edit
    flexi_sign_card: true, // default open

    stay_with_current: false, // all pages
    payment_method: false, // all pages
    payment_unsuccess: false, // all pages
    delinquent_info: false, // all pages
    update_payment_method: false, // all pages
    with_separate_payment_method: false, // all pages
    only_payment_method: false, // all pages
  },

  delinquent_type: "",
  current_page: "",
  calling_from: "",
};

const initialState: any = {
  loading: false,
  changeStatusLoading: false,
  AWFWaiversLoading: false,
  deleteAPIloading: false,
  working_post: false,
  errorMsg: null,
  pagination: {},
  waiversList: [],
};

const waiversSlice = createSlice({
  name: "WAIVERS_SLICE",
  initialState,
  reducers: {
    setWaiversLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(get_flaxi_document_current_list_Action.pending, (state) => {
  //       state.loading = true;
  //       state.error = null; // Clear previous errors when fetching new data
  //     })
  //     .addCase(get_flaxi_document_current_list_Action.fulfilled, (state, action: PayloadAction<any>) => {
  //       state.flexi_documents_data = action.payload; // Update document list when successful
  //       state.loading = false;
  //     })
  //     .addCase(get_flaxi_document_current_list_Action.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message || 'Failed to fetch documents';
  //     })
  // },
});

export const { setWaiversLoading } = waiversSlice.actions;
export default waiversSlice.reducer;

const selectWaivers = (state: any) => state?.waivers;

export const memoizedWaiversSelector = createSelector(
  [selectWaivers],
  (waivers) => waivers
);
