import { apiSlice } from "app/api/apiSlice";
import { setCurrentUser, outState } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: "/users/signup",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;

          dispatch(outState());
          dispatch(apiSlice.util.resetApiState());
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getCurrentUser: builder.mutation({
      query: () => ({
        url: "/users/current",
        method: "GET",
        shouldFetch: (getState) => {
          const userName = getState().auth.user.name;
          if (userName === null) {
            return;
          }
        },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled, getState }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCurrentUser(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useLogoutMutation,
  useSigninMutation,
  useGetCurrentUserMutation,
  useSignupMutation,
} = authApiSlice;
