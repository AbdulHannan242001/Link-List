import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Lists from './pages/Lists/Lists';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import { DataProvider } from './context/DataContext';
import ListSpace from './pages/ListSpace/ListSpace';
import CreateListSpace from './pages/CreateListSpace/CreateListSpace';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login' && location.pathname !== '/list-space' && location.pathname !== '/create-list-space' && location.pathname !== '/register';

  return (
    <div>
      {showNavbar && <Navbar />}
      <DataProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list-space" element={<ListSpace />} />
          <Route path="/create-list-space" element={<CreateListSpace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories/:categoryName" element={<CategoryPage />} />
          <Route path="/lists/:categoryName/:listName" element={<Lists />} />
          <Route path="/lists/:listName" element={<Lists />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
