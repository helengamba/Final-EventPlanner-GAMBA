import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { setGuestCount, toggleMeal } from '../features/plannerSlice';
import { mealOptions } from '../data';

const MealsSelection: React.FC = () => {
  const dispatch = useDispatch();
  const guestCount = useSelector((state: RootState) => state.planner.guestCount);
  const selectedMeals = useSelector((state: RootState) => state.planner.selectedMeals);

  const totalCost = mealOptions.reduce((sum, meal) => {
    if (selectedMeals[meal.id] && guestCount > 0) {
      return sum + meal.pricePerPerson * guestCount;
    }
    return sum;
  }, 0);

  return (
    <section className="content">
      <div className="meals-container">
        <div className="meals-header">Foods Selection</div>
        
        <div className="guest-input">
          <label>Number of People:</label>
          <input
            type="number"
            min="0"
            value={guestCount || ''}
            onChange={(e) => dispatch(setGuestCount(parseInt(e.target.value) || 0))}
          />
        </div>

        <div className="meals-options">
          {mealOptions.map((meal) => (
            <label key={meal.id} className="meal-option">
              <input
                type="checkbox"
                checked={selectedMeals[meal.id] || false}
                onChange={() => dispatch(toggleMeal(meal.id))}
              />
              {meal.name} — ₱{meal.pricePerPerson}/person
            </label>
          ))}
        </div>

        <div className="meal-total">Total Food Cost: ₱{totalCost.toLocaleString()}</div>
      </div>
    </section>
  );
};

export default MealsSelection;
