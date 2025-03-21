import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebaseInit";
import { toast } from "react-toastify";
const initialState = {
  user: null,
  loading: false,
  error: null,
};
export const registerUser = createAsyncThunk("auth/register", async (data) => {
  try {
    // const {user} = await createUserWithEmailAndPassword(
    //   data.email,
    //   data.password
    // );
    const {
      user: { email, uid, displayName },
    } = await createUserWithEmailAndPassword(auth, data.email, data.password);

    await updateProfile(auth.currentUser, {
      displayName: data.displayName,
    });

    return { email, uid, displayName: displayName || data.displayName };
  } catch (error) {
    return error;
  }
});
export const loginUser = createAsyncThunk("auth/login", async (data) => {
  try {
    //  const response = await signInWithEmailAndPassword(auth, email, password);
    const {
      user: { email, uid, displayName },
    } = await signInWithEmailAndPassword(auth, data.email, data.password);

    return { email, uid, displayName: displayName || null };
  } catch (error) {
    return error;
  }
});
export const logoutUser=createAsyncThunk("auth/logout",async()=>{ 
  try{
    await  signOut(auth);
    //toast.success("Logout successfully");
    return null;    
  }catch(error){
    return error;
  }
  // const res=await auth.signOut();
  // return res;
} );

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

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
        console.log(action.payload);
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(logoutUser.pending,(state)=>{
        state.loading=true;
      })
      .addCase(logoutUser.fulfilled,(state,action)=>{
        state.user=null;
        state.loading=false;
      });
  },
});
export default AuthSlice.reducer;
