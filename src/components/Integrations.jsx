import React from 'react';

export default function Integrations() {
  const handleStartClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features">
      <div className="container">
        <h2 className="big-heading">Todos os recursos em um só lugar</h2>
        <div className="integrations-split">
          <div className="integrations-left">
            <h2>Conexões sem esforço em todas as plataformas</h2>
          </div>
          <div className="integrations-right">
            <p>
              Conectamos tudo o que você usa. WhatsApp, Instagram, e-mail, CRM - tudo trabalhando junto, sem complicação.
            </p>
            <a href="#contact" className="btn-sm" onClick={handleStartClick}>
              Começar Agora
            </a>
          </div>
        </div>
        
        <div className="orbit-area">
          <div className="orbit-ring orbit-ring-1"></div>
          <div className="orbit-ring orbit-ring-2"></div>
          <div className="orbit-ring orbit-ring-3"></div>
          
          {/* Email / Webmail (Gmail/Outlook) */}
          <div className="orbit-dot orbit-dot-1" title="E-mail & Webmail (Gmail)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#EA4335' }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          
          {/* OpenAI / AI Engines */}
          <div className="orbit-dot orbit-dot-2" title="OpenAI / ChatGPT">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#10a37f' }}>
              <path d="M21.2 12.8a5.2 5.2 0 0 0 1.1-3.6 5.3 5.3 0 0 0-2.8-4.5 5.2 5.2 0 0 0-4.6-.3 5.3 5.3 0 0 0-4.5-2.8 5.2 5.2 0 0 0-4.9 3.5 5.2 5.2 0 0 0-1.1 3.6 5.3 5.3 0 0 0 2.8 4.5 5.2 5.2 0 0 0 4.6.3 5.3 5.3 0 0 0 4.5 2.8 5.2 5.2 0 0 0 4.9-3.5zm-8.4 6.8c-.8 0-1.5-.4-1.9-1.1l-2.4-4.2 1.6-.9 2.4 4.2c.2.4.6.6 1 .6.7 0 1.2-.5 1.2-1.2v-8.4l1.6-.9V17c-.1 1.4-1.2 2.6-2.5 2.6zm-5-3.8c-.4 0-.8-.2-1-.6L4.4 11c-.4-.7-.2-1.5.5-1.9L9.4 6.7c.4-.2.8-.3 1.2-.3.7 0 1.2.5 1.2 1.2v4.8l-4.2 2.4c-.2.2-.5.2-.7.2zm0-7.2c-.4 0-.8-.2-1-.6l-4.2-2.4c.4-.7 1.2-.9 1.9-.5l4.2 2.4-1.6.9zm10-1c.4 0 .8.2 1 .6l4.2 2.4c.4.7.2 1.5-.5 1.9l-4.2 2.4V8.7l4.2-2.4c.2-.2.5-.2.7-.2zm-3.4 3.4L10.2 9l1.6-.9 4.2 2.4-1.6.9z"/>
            </svg>
          </div>
          
          {/* CRM / HubSpot */}
          <div className="orbit-dot orbit-dot-3" title="CRM & HubSpot">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#FF7A59' }}>
              <path d="M22.846 10.384a2.923 2.923 0 0 0-2.34-2.822 2.923 2.923 0 0 0-2.311 1.096L14.73 6.471a4.35 4.35 0 0 0-.616-2.14L15.34 2.87a2.154 2.154 0 1 0-.962-.962L12.92 3.37a4.343 4.343 0 0 0-3.528.006L7.9 2.053a2.154 2.154 0 1 0-.962.962L8.43 4.437a4.35 4.35 0 0 0-.62 2.148L4.351 8.784a2.923 2.923 0 1 0 1.488 1.488l3.411-2.197a4.34 4.34 0 0 0 1.83 1.343v4.618a2.923 2.923 0 1 0 1.84 0v-4.618a4.34 4.34 0 0 0 1.83-1.343l3.411 2.197a2.923 2.923 0 1 0 1.488-1.488l-3.411-2.197a4.35 4.35 0 0 0 .62-2.148l3.459-2.222a2.923 2.923 0 0 0 2.959 2.959z"/>
            </svg>
          </div>
          
          {/* Slack / Team Alerts */}
          <div className="orbit-dot orbit-dot-4" title="Notificações & Slack">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <g fill="none" fillRule="evenodd">
                <path d="M5.04 15.17a2.52 2.52 0 1 1-2.52 2.52h2.52v-2.52zM6.3 15.17a2.52 2.52 0 0 1 2.52-2.52h5.04a2.52 2.52 0 0 1 2.52 2.52v5.04a2.52 2.52 0 0 1-2.52 2.52H8.82a2.52 2.52 0 0 1-2.52-2.52v-5.04z" fill="#36C5F0"/>
                <path d="M8.82 5.04a2.52 2.52 0 1 1-2.52-2.52v2.52h2.52zM8.82 6.3a2.52 2.52 0 0 1 2.52 2.52v5.04a2.52 2.52 0 0 1-2.52 2.52H3.78a2.52 2.52 0 0 1-2.52-2.52V8.82a2.52 2.52 0 0 1 2.52-2.52h5.04z" fill="#2EB67D"/>
                <path d="M18.96 8.82a2.52 2.52 0 1 1 2.52-2.52h-2.52v2.52zM17.7 8.82a2.52 2.52 0 0 1-2.52 2.52h-5.04a2.52 2.52 0 0 1-2.52-2.52V3.78a2.52 2.52 0 0 1 2.52-2.52h5.04a2.52 2.52 0 0 1 2.52 2.52v5.04z" fill="#ECB22E"/>
                <path d="M15.18 18.96a2.52 2.52 0 1 1 2.52 2.52h-2.52v-2.52zM15.18 17.7a2.52 2.52 0 0 1-2.52-2.52v-5.04a2.52 2.52 0 0 1 2.52-2.52h5.04a2.52 2.52 0 0 1 2.52 2.52v5.04a2.52 2.52 0 0 1-2.52 2.52h-5.04z" fill="#E01E5A"/>
              </g>
            </svg>
          </div>
          
          {/* Instagram / Social Media */}
          <div className="orbit-dot orbit-dot-5" title="Redes Sociais (Instagram)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="url(#instagram-orbit-grad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="instagram-orbit-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433"/>
                  <stop offset="25%" stopColor="#e6683c"/>
                  <stop offset="50%" stopColor="#dc2743"/>
                  <stop offset="75%" stopColor="#cc2366"/>
                  <stop offset="100%" stopColor="#bc1888"/>
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </div>
          
          {/* WhatsApp Business */}
          <div className="orbit-dot orbit-dot-6" title="WhatsApp Business">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#25D366' }}>
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.077-1.331a9.936 9.936 0 004.93 1.302h.005c5.507 0 9.99-4.479 9.99-9.986.002-2.67-1.037-5.18-2.929-7.072A9.92 9.92 0 0012.012 2zm5.83 14.154c-.247.697-1.229 1.305-1.691 1.353-.454.047-.905.247-2.93-.568-2.59-1.042-4.223-3.69-4.354-3.864-.132-.174-1.066-1.423-1.066-2.715 0-1.292.678-1.927.92-2.19.24-.263.527-.329.702-.329.176 0 .35.006.502.012.16.007.377-.06.59.45.22.53.75 1.83.816 1.96.066.13.11.28.02.46-.088.18-.13.29-.26.44-.13.15-.27.34-.38.45-.12.13-.25.27-.11.51.14.24.63 1.03 1.35 1.67a6.22 6.22 0 001.95 1.21c.23.1.37.09.51-.07.14-.16.61-.71.78-.96.16-.25.33-.21.56-.12.23.09 1.48.7 1.73.82s.42.2.48.31c.07.11.07.64-.18 1.34v-.002z"/>
            </svg>
          </div>
          
          {/* Center Branded AI Hexagon Core */}
          <div className="orbit-center" style={{ background: '#000', border: '2px solid var(--cyan)', boxShadow: '0 0 25px rgba(6, 182, 212, 0.6)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--cyan)' }}>
              <polygon points="12 2 22 7 22 17 12 22 2 17 2 7 12 2"/>
              <text x="12" y="15" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" style={{ letterSpacing: '-0.5px' }}>iA</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
