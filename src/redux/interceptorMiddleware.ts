import { signOut } from "next-auth/react";
import { Middleware } from "redux";

export const interceptorMiddleware: Middleware =
  (_api) => (next) => async (action) => {
    try {
      const response: any = await next(action); // Await the next action's promise

      // If the response status is 401, log the user out
      if (response?.payload?.status === 401) {
        await signOut({ redirect: true, callbackUrl: "/signin" }); // Await the signOut promise
      }

      return response;
    } catch (error) {
      // Log the error (you can handle it as needed)
      console.error("Error in interceptorMiddleware:", error);

      throw error; // Rethrow the error to propagate it if necessary
    }
  };
