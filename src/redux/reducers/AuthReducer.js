import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";

const initialState = {
  user: null,
  loading: false,
  error: null,
};
 export const registerUser = createAsyncThunk("auth/registerUser", async (data) => {
  try {
    const response = await createUserWithEmailAndPassword(
      data.email,
      data.password,
     
    );
    const user={email:response.user.email,uid:response.user.uid,displayName:response.user.displayName}
    return response.user;
  } catch (error) {
    return error;
  }
});

const AuthSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
       
    },

   

    // extraReducers:{
    //     [registerUser.pending]:(state)=>{
    //     state.loading=true;
    //     },
    //     [registerUser.fulfilled]:(state,action)=>{
    //     state.user=action.payload;
    //     state.loading=false;
    //     },
    //     [registerUser.rejected]:(state,action)=>{
    //     state.error=action.payload;
    //     state.loading=false;
    //     }
    // }
extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
})
export  default AuthSlice.reducer;