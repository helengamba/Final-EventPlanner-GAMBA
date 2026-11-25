import type { Venue, AddOnItem, MealOption } from './types';

export const venues: Venue[] = [
  { id: 'grand-hall', name: 'Grand Ballroom', capacity: 300, price: 3500, image: 'grandballroom.jpg' },
  { id: 'garden-pavilion', name: 'Garden Pavilion', capacity: 150, price: 2000, image: 'gardenpavillion.jpg' },
  { id: 'beachfront-hall', name: 'Beachfront Hall', capacity: 100, price: 2800, image: 'beach.jpg' },
  { id: 'rooftop-terrace', name: 'Rooftop Terrace', capacity: 60, price: 1800, image: 'rooftop.jpg' },
  { id: 'garden-chapel', name: 'Garden Chapel', capacity: 50, price: 1200, image: 'gardenchapel.jpg' },
];

export const addOns: AddOnItem[] = [
  { id: 'wedding-cake', name: 'Wedding Cake', price: 450, image: 'weddingcake.jpg' },
  { id: 'flower-arrangements', name: 'Flower Arrangements', price: 600, image: 'flower.jpg' },
  { id: 'photography', name: 'Photography', price: 1200, image: 'photo.jpg' },
  { id: 'live-band', name: 'Live Band', price: 800, image: 'band.jpg' },
  { id: 'decorations', name: 'Decorations', price: 700, image: 'decoration.jpg' },
];

export const mealOptions: MealOption[] = [
  { id: 'breakfast', name: 'Breakfast Buffet', pricePerPerson: 450 },
  { id: 'lunch', name: 'Lunch Buffet', pricePerPerson: 650 },
  { id: 'dinner', name: 'Dinner Buffet', pricePerPerson: 850 },
  { id: 'snacks', name: 'Afternoon Snacks', pricePerPerson: 250 },
  { id: 'drinks', name: 'Beverage Station', pricePerPerson: 150 },
];
