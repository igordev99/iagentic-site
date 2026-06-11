import React, { useState } from 'react';

export default function AuthView({ isOpen, onClose }) {
  const [authView, setAuthView] = useState('login'); // 'login' | 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setEmail('');
        setPassword('');
        onClose();
        // Redirect to telemetry panel on successful login
        const url = new URL(window.location.href);
        url.searchParams.set('view', 'telemetry');
        window.history.pushState({}, '', url.toString());
        // Force popstate to trigger App.jsx view sync
        window.dispatchEvent(new Event('popstate'));
      }, 1000);
    }, 1500);
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-wrapper">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className="auth-header">
          <img src="/images/logo.png" alt="iAgentic Logo" style={{ height: '32px', objectFit: 'contain' }} />
        </div>

        <div className="auth-card">
          {authView === 'login' ? (
            <div id="auth-login-view">
              <h2>Bem-vindo de volta</h2>
              <p className="auth-sub">Entre com suas credenciais para gerenciar seu painel.</p>
              
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-group">
                  <label htmlFor="login-email">E-MAIL</label>
                  <div className="input-icon-wrap">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <input
                      type="email"
                      id="login-email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>
                
                <div className="auth-group">
                  <label htmlFor="login-pass">SENHA</label>
                  <div className="input-icon-wrap">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <input
                      type="password"
                      id="login-pass"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                <button type="submit" className="btn-auth" disabled={status === 'loading'}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" x2="3" y1="12" y2="12" />
                  </svg>
                  {status === 'idle' && 'Acessar Painel'}
                  {status === 'loading' && 'Acessando...'}
                  {status === 'success' && 'Sucesso! ✓'}
                </button>
              </form>
              
              <div className="auth-switch">
                Não tem uma conta?{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); setAuthView('register'); }}>
                  Cadastre-se agora
                </a>
              </div>
            </div>
          ) : (
            <div id="auth-register-view">
              <h2>Criar nova conta</h2>
              <p className="auth-sub">Comece a gerenciar sua infraestrutura hoje.</p>
              
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-group">
                  <label htmlFor="reg-email">E-MAIL</label>
                  <div className="input-icon-wrap">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <input
                      type="email"
                      id="reg-email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>
                
                <div className="auth-group">
                  <label htmlFor="reg-pass">SENHA</label>
                  <div className="input-icon-wrap">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <input
                      type="password"
                      id="reg-pass"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                <button type="submit" className="btn-auth" disabled={status === 'loading'}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <line x1="19" x2="19" y1="8" y2="14" />
                    <line x1="22" x2="16" y1="11" y2="11" />
                  </svg>
                  {status === 'idle' && 'Criar Conta'}
                  {status === 'loading' && 'Criando conta...'}
                  {status === 'success' && 'Criado com sucesso! ✓'}
                </button>
              </form>
              
              <div className="auth-switch">
                Já tem uma conta?{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); setAuthView('login'); }}>
                  Faça login
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="auth-footer">PROTECTED BY SUPABASE SHIELD</div>
      </div>
    </div>
  );
}
