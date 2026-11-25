import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { closeModal } from '../features/plannerSlice';
import { venues, addOns, mealOptions } from '../data';

const DetailsModal: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.planner.showModal);
  const selectedVenues = useSelector((state: RootState) => state.planner.selectedVenues);
  const selectedAddOns = useSelector((state: RootState) => state.planner.selectedAddOns);
  const guestCount = useSelector((state: RootState) => state.planner.guestCount);
  const selectedMeals = useSelector((state: RootState) => state.planner.selectedMeals);

  if (!isOpen) return null;

  const venueItems = venues
    .filter(v => (selectedVenues[v.id] || 0) > 0)
    .map(v => ({
      name: v.name,
      unitCost: v.price,
      quantity: selectedVenues[v.id]!,
      total: v.price * selectedVenues[v.id]!,
    }));

  const addOnItems = addOns
    .filter(a => (selectedAddOns[a.id] || 0) > 0)
    .map(a => ({
      name: a.name,
      unitCost: a.price,
      quantity: selectedAddOns[a.id]!,
      total: a.price * selectedAddOns[a.id]!,
    }));

  const mealItems = mealOptions
    .filter(m => selectedMeals[m.id] && guestCount > 0)
    .map(m => ({
      name: `${m.name} (${guestCount} pax)`,
      unitCost: m.pricePerPerson,
      quantity: guestCount,
      total: m.pricePerPerson * guestCount,
    }));

  const allItems = [...venueItems, ...addOnItems, ...mealItems];
  const grandTotal = allItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Total Cost for the Event — ₱{grandTotal.toLocaleString()}</h3>
        <table className="modal-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Unit Cost</th>
              <th>Quantity</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {allItems.length > 0 ? (
              allItems.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>₱{item.unitCost.toLocaleString()}</td>
                  <td>{item.quantity}</td>
                  <td>₱{item.total.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="empty-row">
                  No items selected yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <button className="close-btn" onClick={() => dispatch(closeModal())}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailsModal;
