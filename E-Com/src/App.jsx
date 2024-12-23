

import React from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Countdown from './components/Countdown';
import EmailCaptureForm from './components/EmailCaptureForm';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="mt-16">
        <section id="home">
          <Hero />
        </section>

        <section id="features">
          <Features />
        </section>
        <section id="pricing">
        <Pricing />
        </section>

        <section id="countdown">
          <Countdown/>
        </section>
        

        <section id="emailcaptureform">
          <EmailCaptureForm />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
