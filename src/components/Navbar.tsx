import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { setPage, openModal } from '../features/plannerSlice';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.planner.page);

  return (
    <nav className="navbar">
      <h2 className="nav-brand">💍 Wedding Planner</h2>
      <div className="nav-links">
        <button 
          className={currentPage === 'venues' ? 'active' : ''} 
          onClick={() => dispatch(setPage('venues'))}
        >
          Venues
        </button>
        <button 
          className={currentPage === 'addons' ? 'active' : ''} 
          onClick={() => dispatch(setPage('addons'))}
        >
          Add-ons
        </button>
        <button 
          className={currentPage === 'meals' ? 'active' : ''} 
          onClick={() => dispatch(setPage('meals'))}
        >
          Meals
        </button>
        <button className="details-btn" onClick={() => dispatch(openModal())}>
          Show Details
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
