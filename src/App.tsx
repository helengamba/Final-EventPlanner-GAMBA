import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from './app/store';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import VenueSelection from './components/VenueSelection';
import AddonsSelection from './components/AddonsSelection';
import MealsSelection from './components/MealsSelection';
import DetailsModal from './components/DetailsModal';
import './App.css';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const currentPage = useSelector((state: RootState) => state.planner.page);

  return (
    <div className="app">
      {showLanding ? (
        <LandingPage onStart={() => setShowLanding(false)} />
      ) : (
        <>
          <Navbar />
          <main>
            {currentPage === 'venues' && <VenueSelection />}
            {currentPage === 'addons' && <AddonsSelection />}
            {currentPage === 'meals' && <MealsSelection />}
          </main>
          <DetailsModal />
        </>
      )}
    </div>
  );
}

export default App;
