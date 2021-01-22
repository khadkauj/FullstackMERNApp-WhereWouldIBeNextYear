import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
      name: "user",
      initialState: {
            user_uid: null,
            user_name: null,
            user_email: null,
            user_state: null,
      },

      reducers: {
            Log_in: (state, action) => {
                  state.user_uid = action.payload._id;
                  state.user_name = action.payload.name;
                  state.user_email = action.payload.email;
                  state.user_state = true;
            },
      },
});

export const { Log_in } = userSlice.actions;

export const select_id = (state) => state.user.user_uid;
export const selectName = (state) => state.user.user_name;
export const selectEmail = (state) => state.user.user_email;
export const selecteState = (state) => state.user.user_state;

export default userSlice.reducer;
