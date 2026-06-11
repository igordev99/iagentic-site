import React, { useState, useEffect } from 'react';

export default function Navbar({ currentView, navigateTo, setLoginOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, view, anchor) => {
    e.preventDefault();
    setMenuOpen(false);

    if (view) {
      navigateTo(view);
      // Wait for view transition, then scroll if anchor is given
      if (anchor) {
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) {
            window.scrollTo({
              top: el.getBoundingClientRect().top + window.pageYOffset - 110,
              behavior: 'smooth',
            });
          }
        }, 100);
      }
    } else if (anchor) {
      if (currentView !== 'landing') {
        navigateTo('landing');
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) {
            window.scrollTo({
              top: el.getBoundingClientRect().top + window.pageYOffset - 110,
              behavior: 'smooth',
            });
          }
        }, 150);
      } else {
        const el = document.getElementById(anchor);
        if (el) {
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.pageYOffset - 110,
            behavior: 'smooth',
          });
        }
      }
    }
  };

  return (
    <header id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <a href="#" onClick={(e) => handleLinkClick(e, 'landing')} className="logo">
          <img src="/images/logo.png" alt="iAgentic Logo" style={{ height: '44px', objectFit: 'contain' }} />
        </a>

        {/* Desktop Links */}
        <nav className="nav-links">
          <a
            href="#features"
            className={currentView === 'landing' ? 'active' : ''}
            onClick={(e) => handleLinkClick(e, 'landing', 'features')}
          >
            Recursos
          </a>
          <a
            href="#services"
            onClick={(e) => handleLinkClick(e, 'landing', 'services')}
          >
            Serviços
          </a>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, 'landing', 'about')}
          >
            Sobre
          </a>
          <a
            href="?view=consultoria"
            className={currentView === 'consultoria' ? 'active' : ''}
            onClick={(e) => handleLinkClick(e, 'consultoria')}
          >
            Consultoria IA
          </a>
          <a
            href="?view=telemetry"
            className={currentView === 'telemetry' ? 'active' : ''}
            onClick={(e) => handleLinkClick(e, 'telemetry')}
          >
            Painel Telemetria
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'landing', 'contact')}
          >
            Contato
          </a>
        </nav>

        <button
          className="btn-get-started"
          onClick={() => {
            setLoginOpen(true);
            window.location.hash = 'loginModal';
          }}
        >
          Acesso Portal <span>&rarr;</span>
        </button>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <a href="#features" onClick={(e) => handleLinkClick(e, 'landing', 'features')}>
          Recursos
        </a>
        <a href="#services" onClick={(e) => handleLinkClick(e, 'landing', 'services')}>
          Serviços
        </a>
        <a href="#about" onClick={(e) => handleLinkClick(e, 'landing', 'about')}>
          Sobre
        </a>
        <a href="?view=consultoria" onClick={(e) => handleLinkClick(e, 'consultoria')}>
          Consultoria IA
        </a>
        <a href="?view=telemetry" onClick={(e) => handleLinkClick(e, 'telemetry')}>
          Painel Telemetria
        </a>
        <a href="#contact" onClick={(e) => handleLinkClick(e, 'landing', 'contact')}>
          Contato
        </a>
        <button
          className="btn-cyan mobile-cta"
          onClick={() => {
            setMenuOpen(false);
            setLoginOpen(true);
            window.location.hash = 'loginModal';
          }}
        >
          Acesso Portal
        </button>
      </nav>
    </header>
  );
}
