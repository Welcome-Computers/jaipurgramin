import { createAsyncThunk } from "@reduxjs/toolkit";
// import NotificationService from "@services/NotificationService";
// eslint-disable-next-line import/no-cycle
import { setWaiversLoading } from ".";
import { waiversApi } from "./services";

export const get_fetchAllWaiverRecords_Action = createAsyncThunk(
  "WAIVERS_LIST",
  async (arg: any, { dispatch }) => {
    try {
      dispatch(setWaiversLoading(true));
      const res: any = await dispatch(
        waiversApi.endpoints._fetchAllWaiverRecords_.initiate(arg, {
          forceRefetch: true,
          subscribe: true,
        })
      );
      if (res?.data) {
        const {
          all_data,
          free_plan_data,
          waiver_registration_present,
          registration_status,
        } = res?.data || {};
        // dispatch(setWaiversListData(res?.data));
      } else if (res?.data?.message) {
        // NotificationService.error(res?.data?.message);
      }
    } catch (error: any) {
      // dispatch(setError(error.toString()));
    } finally {
      dispatch(setWaiversLoading(false));
    }
  }
);
