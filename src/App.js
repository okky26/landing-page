import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import HomePage from './components/routerPages/homePage/homePage';
import TeamsPage from './components/routerPages/teamsPage/teamsPage';
import ProductsPage from './components/routerPages/productsPage/productsPage';
import PolicyPage from './components/routerPages/policyPage/policyPage';
import ContactPage from './components/routerPages/contactPage/contactPage';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/teams' element={<TeamsPage/>} />
        <Route path='/products' element={<ProductsPage/>} />
        <Route path='/policy' element={<PolicyPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
