import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    // Initialize from LocalStorage to maintain session after page refresh
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: JSON.parse(localStorage.getItem("user"))?.token || null,
    isAuthenticated: !!localStorage.getItem("user"),
  },
  reducers: {
    // Save user data and token to state and LocalStorage on login
    setUser: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    // Clear user session from state and LocalStorage
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },

    // Update profile picture in both Redux state and LocalStorage
    updateProfilePic: (state, action) => {
      if (state.user) {
        state.user.profilePic = action.payload;

        const updatedUser = { ...state.user, profilePic: action.payload };
        localStorage.setItem("user", JSON.stringify(updatedUser));
      }
    },
  },
});

export const { setUser, logoutUser, updateProfilePic } = authSlice.actions;
export default authSlice.reducer;
