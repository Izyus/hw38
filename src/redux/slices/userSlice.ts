import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  role: string;
}

const initialState: UserState = {
  role: 'admin'
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    }
  }
});

export const { setRole } = userSlice.actions;
export default userSlice.reducer; 