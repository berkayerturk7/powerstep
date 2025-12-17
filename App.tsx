
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Comparison from './components/Comparison';
import SuccessStories from './components/SuccessStories';
import SharepointSection from './components/SharepointSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SuccessStories />
        <SharepointSection />
        <Comparison />
      </main>
      <Footer />
    </div>
  );
}

export default App;
