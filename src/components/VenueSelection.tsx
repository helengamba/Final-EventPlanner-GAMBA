import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { setVenueQuantity } from '../features/plannerSlice';
import { venues } from '../data';

const VenueSelection: React.FC = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.planner.selectedVenues);

  const handleChange = (id: string, delta: number) => {
    const current = selected[id] || 0;
    dispatch(setVenueQuantity({ id, quantity: current + delta }));
  };

  return (
    <section className="content">
      <h2>Venue Room Selection</h2>
      <div className="divider"></div>
      <div className="grid">
        {venues.map((venue) => (
          <div key={venue.id} className="card">
            <img src={venue.image} alt={venue.name} />
            <h3>{venue.name}</h3>
            <p>Capacity: {venue.capacity}</p>
            <p className="price">₱{venue.price.toLocaleString()} each</p>
            <div className="counter">
              <button onClick={() => handleChange(venue.id, -1)}>-</button>
              <span>{selected[venue.id] || 0}</span>
              <button onClick={() => handleChange(venue.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VenueSelection;
