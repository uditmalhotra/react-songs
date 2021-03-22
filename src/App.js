import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Featured from './components/Featured';
import Products from './components/Products';
import Services from './components/Services';
import Quote from './components/Quote';
import BlogNews from './components/BlogNews';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Info />
        <Featured />
        <Products />
        <Services />
        <Quote />
        <BlogNews />
        <Footer />
        <Switch>
          <route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
