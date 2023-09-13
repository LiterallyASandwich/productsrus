import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    
    <main className="App">
      <h1>Products R Us</h1>
      { user ?
          <>
            <NavBar user={ user } setUser={ setUser }/>
            <Routes>
              {/* Route components in here */}
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={ setUser }/>
      }

      
      <h5>We sell products!</h5>
      <h5><i>"Well, what kind of products do ya'll sell?"</i> You ask?</h5>
      <h4>Y e s</h4>
    </main>
  );
}
