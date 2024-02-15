import { createSlice } from '@reduxjs/toolkit';
 





export const playerSlice = createSlice({
  
   initialState : {
    current: false,
    playing: false,
    controls: false,
  },
  
  name: 'player',
 
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setControls: (state, action) => {
      state.controls = action.payload;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrent, setControls, setPlaying } = playerSlice.actions;

export default playerSlice.reducer;
