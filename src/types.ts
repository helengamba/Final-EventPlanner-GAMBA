export interface Venue {
  id: string;
  name: string;
  capacity: number;
  price: number;
  image: string;
}

export interface AddOnItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface MealOption {
  id: string;
  name: string;
  pricePerPerson: number;
}

export interface PlannerState {
  page: 'venues' | 'addons' | 'meals';
  selectedVenues: Record<string, number>;
  selectedAddOns: Record<string, number>;
  guestCount: number;
  selectedMeals: Record<string, boolean>;
  showModal: boolean;
}
