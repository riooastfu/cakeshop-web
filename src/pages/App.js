import React from 'react';
import './App.css';

//components import
import Home from '../components/home/home';
import { Headbar } from '../components/headbar/Headbar';
import Menu from '../components/menu/Menu';
import Contact from '../components/contact/Contact';
import About from '../components/about/about';
import { Footer } from '../components/footer/Footer';
import { Sidebar } from '../components/headbar/Sidebar';

function App() {
  return (
    <>
      <Headbar />
      <Sidebar/>
      <main className='main'>
        <Home />
        <Menu />
        <About />
        <Contact />
        <Footer />
      </main>

    </>
  );
}

export default App;
