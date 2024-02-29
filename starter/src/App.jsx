import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fixed import statements


const App = () => {
  return (
    <div>
{/* navbar */}
      <div>
        <Navbar />
      </div>


{/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

    </div>
  );
};
// export the app
export default App;
