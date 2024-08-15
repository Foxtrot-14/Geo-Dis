// mapSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Point {
  latitude: number;
  longitude: number;
}

interface MapState {
  point1: Point;
  point2: Point;
  distance: number;
}

const initialState: MapState = {
  point1: { latitude: 0, longitude: 0 },
  point2: { latitude: 0, longitude: 0 },
  distance: 0,
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMapData(
      state,
      action: PayloadAction<{ point1: Point; point2: Point; distance: number }>
    ) {
      const { point1, point2, distance } = action.payload;
      state.point1 = point1;
      state.point2 = point2;
      state.distance = distance;
    },
  },
});

export const { setMapData } = mapSlice.actions;
export default mapSlice.reducer;
