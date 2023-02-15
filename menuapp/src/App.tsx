import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { MenuRoute } from './components/MenuRoute';
import { DetailsRoute } from './components/DetailsRoute';

//looks at the routes in order
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/menu" element={<MenuRoute />} />
        <Route path="/details/:id" element={<DetailsRoute />} />
        {/* the next line is redirecting someone to the home, the * is a wild card, goes at the end */}
        <Route path="*" element={<Navigate to={"/menu"} />}></Route>
      </Routes>
    </div>
 </BrowserRouter>
  );
}

export default App;
