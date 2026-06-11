import React from 'react';

export default function Footer({ navigateTo }) {
  const handleLinkClick = (e, view, anchor) => {
    e.preventDefault();

    if (view) {
      navigateTo(view);
      if (anchor) {
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (anchor) {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigateTo('landing');
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  };

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" onClick={(e) => handleLinkClick(e, 'landing')} className="logo">
              <img src="/images/logo.png" alt="iAgentic Logo" style={{ height: '44px', objectFit: 'contain' }} />
            </a>
            <p className="footer-tagline">Seu Novo Aliado em Automação de IA</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <a href="#features" onClick={(e) => handleLinkClick(e, 'landing', 'features')}>Recursos</a>
              <a href="#services" onClick={(e) => handleLinkClick(e, 'landing', 'services')}>Serviços</a>
              <a href="#about" onClick={(e) => handleLinkClick(e, 'landing', 'about')}>Sobre</a>
              <a href="?view=consultoria" onClick={(e) => handleLinkClick(e, 'consultoria')}>Consultoria IA</a>
            </div>
            <div className="footer-col">
              <a href="?view=telemetry" onClick={(e) => handleLinkClick(e, 'telemetry')}>Painel Telemetria</a>
              <a href="#faq" onClick={(e) => handleLinkClick(e, 'landing', 'faq')}>FAQ</a>
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'landing', 'contact')}>Contato</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 iAgentic. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
