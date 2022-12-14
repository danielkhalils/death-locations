import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import CarouselApp from './components/Carousel';

function App() {
  return (
    <div>
      <NavBar></NavBar>

      <main>
        <div className='page-wrapper'>
          <div className='welcome-page'>
            <h1 className="text-center-page">Welcome Death Locations</h1>
            <h3 className="text-center-page">Você já houviu falar desses crimes. Agora veja onde eles ocorreram</h3>
            <CarouselApp></CarouselApp>
          </div>
          <div className='carousel'>
            
          </div>
        </div>
      </main>

    </div>
  ) 
}

export default App;
