import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PlannerState } from '../types';

const initialState: PlannerState = {
  page: 'venues',
  selectedVenues: {},
  selectedAddOns: {},
  guestCount: 0,
  selectedMeals: {},
  showModal: false,
};

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<'venues' | 'addons' | 'meals'>) => {
      state.page = action.payload;
    },
    setVenueQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      state.selectedVenues[action.payload.id] = Math.max(0, action.payload.quantity);
    },
    setAddOnQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      state.selectedAddOns[action.payload.id] = Math.max(0, action.payload.quantity);
    },
    setGuestCount: (state, action: PayloadAction<number>) => {
      state.guestCount = Math.max(0, action.payload);
    },
    toggleMeal: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.selectedMeals[id] = !state.selectedMeals[id];
    },
    openModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
  },
});

export const {
  setPage,
  setVenueQuantity,
  setAddOnQuantity,
  setGuestCount,
  toggleMeal,
  openModal,
  closeModal,
} = plannerSlice.actions;

export default plannerSlice.reducer;
