import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import ServiceGrid from './components/ServiceGrid';
import PricingPlans from './components/PricingPlans';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Restored Landing Page sections
import About from './components/About';
import Integrations from './components/Integrations';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';

// Special views & modals
import ConsultoriaView from './components/ConsultoriaView';
import TelemetryView from './components/TelemetryView';
import AuthView from './components/AuthView';
import AgentSetupModal from './components/AgentSetupModal';

export default function App() {
  const [view, setView] = useState('landing');
  const [loginOpen, setLoginOpen] = useState(false);
  const [setupOpen, setSetupOpen] = useState(false);

  useEffect(() => {
    const syncViewWithUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const viewParam = params.get('view');
      
      if (viewParam === 'consultoria') {
        setView('consultoria');
      } else if (viewParam === 'telemetry') {
        setView('telemetry');
      } else {
        setView('landing');
      }
      
      // Reset scroll position to top on route change
      window.scrollTo({ top: 0, behavior: 'instant' });

      if (window.location.hash === '#loginModal') {
        setLoginOpen(true);
      } else {
        setLoginOpen(false);
      }
    };

    syncViewWithUrl();
    window.addEventListener('popstate', syncViewWithUrl);
    window.addEventListener('hashchange', syncViewWithUrl);

    return () => {
      window.removeEventListener('popstate', syncViewWithUrl);
      window.removeEventListener('hashchange', syncViewWithUrl);
    };
  }, []);

  const navigateTo = (newView) => {
    setView(newView);
    const url = new URL(window.location.href);
    if (newView === 'landing') {
      url.searchParams.delete('view');
    } else {
      url.searchParams.set('view', newView);
    }
    url.hash = ''; // clear hash on view change
    window.history.pushState({}, '', url.toString());
    
    // Reset scroll position to top on navigation change
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleCloseLogin = () => {
    setLoginOpen(false);
    const url = new URL(window.location.href);
    url.hash = '';
    window.history.pushState({}, '', url.toString());
  };

  return (
    <>
      <Navbar currentView={view} navigateTo={navigateTo} setLoginOpen={setLoginOpen} />

      {/* Main View Switcher */}
      {view === 'landing' && (
        <main>
          <Hero navigateTo={navigateTo} setSetupOpen={setSetupOpen} />
          <Partners />
          <ServiceGrid />
          <About />
          <Integrations />
          <Team />
          <Testimonials />
          <Faq />
          <PricingPlans setSetupOpen={setSetupOpen} />
          <ContactForm />
        </main>
      )}

      {view === 'consultoria' && (
        <main>
          <ConsultoriaView setSetupOpen={setSetupOpen} />
          <ContactForm />
        </main>
      )}

      {view === 'telemetry' && (
        <main>
          <TelemetryView />
        </main>
      )}

      <Footer navigateTo={navigateTo} />

      {/* Modals */}
      <AuthView isOpen={loginOpen} onClose={handleCloseLogin} />
      <AgentSetupModal isOpen={setupOpen} onClose={() => setSetupOpen(false)} />
    </>
  );
}
