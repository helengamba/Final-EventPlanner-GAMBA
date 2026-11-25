import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { setAddOnQuantity } from '../features/plannerSlice';
import { addOns } from '../data';

const AddonsSelection: React.FC = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.planner.selectedAddOns);

  const handleChange = (id: string, delta: number) => {
    const current = selected[id] || 0;
    dispatch(setAddOnQuantity({ id, quantity: current + delta }));
  };

  return (
    <section className="content">
      <h2>Add-ons</h2>
      <div className="divider"></div>
      <div className="grid">
        {addOns.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">₱{item.price.toLocaleString()}</p>
            <div className="counter">
              <button onClick={() => handleChange(item.id, -1)}>-</button>
              <span>{selected[item.id] || 0}</span>
              <button onClick={() => handleChange(item.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddonsSelection;
