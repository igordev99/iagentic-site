import React, { useState } from 'react';

const formatCPFOrCNPJ = (value) => {
  const v = value.replace(/\D/g, '').slice(0, 14);
  if (v.length <= 11) {
    if (v.length <= 3) return v;
    if (v.length <= 6) return `${v.slice(0, 3)}.${v.slice(3)}`;
    if (v.length <= 9) return `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6)}`;
    return `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6, 9)}-${v.slice(9)}`;
  } else {
    if (v.length <= 12) {
      return `${v.slice(0, 2)}.${v.slice(2, 5)}.${v.slice(5, 8)}/${v.slice(8)}`;
    }
    return `${v.slice(0, 2)}.${v.slice(2, 5)}.${v.slice(5, 8)}/${v.slice(8, 12)}-${v.slice(12)}`;
  }
};

export default function AgentSetupModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [scope, setScope] = useState('atendimento'); // 'atendimento' | 'sdr' | 'vendas'
  const [channels, setChannels] = useState([]);
  
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [taxId, setTaxId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [password, setPassword] = useState('');
  
  const [status, setStatus] = useState('idle'); // 'idle' | 'processing' | 'success'

  const toggleChannel = (channel) => {
    if (channels.includes(channel)) {
      setChannels(channels.filter(c => c !== channel));
    } else {
      setChannels([...channels, channel]);
    }
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setStatus('processing');
    
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setStep(1);
        setScope('atendimento');
        setChannels([]);
        setName('');
        setEmail('');
        setTaxId('');
        setPassword('');
        onClose();
        
        // Redirect to telemetry panel
        const url = new URL(window.location.href);
        url.searchParams.set('view', 'telemetry');
        window.history.pushState({}, '', url.toString());
        window.dispatchEvent(new Event('popstate'));
      }, 1500);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className={`setup-modal ${isOpen ? 'open' : ''}`}>
      <div className="setup-modal-wrapper">
        <button className="setup-modal-close" onClick={onClose} aria-label="Close setup modal">
          &times;
        </button>

        {/* Progress bar */}
        <div className="setup-progress">
          <div className={`setup-progress-bar ${step >= 1 ? 'active' : ''}`}></div>
          <div className={`setup-progress-bar ${step >= 2 ? 'active' : ''}`}></div>
          <div className={`setup-progress-bar ${step >= 3 ? 'active' : ''}`}></div>
          <div className={`setup-progress-bar ${step >= 4 ? 'active' : ''}`}></div>
        </div>

        {/* STEP 1: SCOPE */}
        {step === 1 && (
          <div className="setup-step">
            <h3>Qual o objetivo do Agente?</h3>
            <p className="setup-step-desc">Selecione o escopo operacional principal do seu novo assistente virtual.</p>
            
            <div className="setup-options-grid">
              <div 
                className={`setup-option-card ${scope === 'atendimento' ? 'selected' : ''}`}
                onClick={() => setScope('atendimento')}
              >
                <div className="setup-radio"></div>
                <div className="setup-option-info">
                  <h4>Suporte e Atendimento</h4>
                  <p>Responda dúvidas, guie clientes e reduza em até 70% o volume de chamados de suporte.</p>
                </div>
              </div>

              <div 
                className={`setup-option-card ${scope === 'sdr' ? 'selected' : ''}`}
                onClick={() => setScope('sdr')}
              >
                <div className="setup-radio"></div>
                <div className="setup-option-info">
                  <h4>SDR / Prospecção</h4>
                  <p>Engaje leads frios, qualifique oportunidades e agende reuniões automaticamente no seu CRM.</p>
                </div>
              </div>

              <div 
                className={`setup-option-card ${scope === 'vendas' ? 'selected' : ''}`}
                onClick={() => setScope('vendas')}
              >
                <div className="setup-radio"></div>
                <div className="setup-option-info">
                  <h4>Agente de Fechamento</h4>
                  <p>Aborde carrinhos abandonados no WhatsApp, envie propostas e feche vendas ativamente.</p>
                </div>
              </div>
            </div>

            <div className="setup-actions" style={{ justifyContent: 'flex-end' }}>
              <button className="btn-cyan" onClick={handleNext}>
                Continuar &rarr;
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: CHANNELS */}
        {step === 2 && (
          <div className="setup-step">
            <h3>Quais conexões ele precisa?</h3>
            <p className="setup-step-desc">Selecione os canais e sistemas que o agente de IA precisará interagir.</p>
            
            <div className="setup-checkbox-grid">
              <div 
                className={`setup-checkbox-card ${channels.includes('whatsapp') ? 'selected' : ''}`}
                onClick={() => toggleChannel('whatsapp')}
              >
                <div className="setup-check-box">
                  {channels.includes('whatsapp') && '✓'}
                </div>
                <span>WhatsApp API</span>
              </div>

              <div 
                className={`setup-checkbox-card ${channels.includes('crm') ? 'selected' : ''}`}
                onClick={() => toggleChannel('crm')}
              >
                <div className="setup-check-box">
                  {channels.includes('crm') && '✓'}
                </div>
                <span>CRM Integrado</span>
              </div>

              <div 
                className={`setup-checkbox-card ${channels.includes('slack') ? 'selected' : ''}`}
                onClick={() => toggleChannel('slack')}
              >
                <div className="setup-check-box">
                  {channels.includes('slack') && '✓'}
                </div>
                <span>Slack & Discord</span>
              </div>

              <div 
                className={`setup-checkbox-card ${channels.includes('database') ? 'selected' : ''}`}
                onClick={() => toggleChannel('database')}
              >
                <div className="setup-check-box">
                  {channels.includes('database') && '✓'}
                </div>
                <span>Banco de Dados SQL</span>
              </div>

              <div 
                className={`setup-checkbox-card ${channels.includes('api') ? 'selected' : ''}`}
                onClick={() => toggleChannel('api')}
              >
                <div className="setup-check-box">
                  {channels.includes('api') && '✓'}
                </div>
                <span>APIs & Webhooks</span>
              </div>
            </div>

            <div className="setup-actions">
              <button className="btn-dark" onClick={handleBack}>
                Voltar
              </button>
              <button className="btn-cyan" onClick={handleNext}>
                Continuar &rarr;
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: BILLING */}
        {step === 3 && (
          <div className="setup-step">
            <h3>Dados para Faturamento</h3>
            <p className="setup-step-desc">Insira seus dados corporativos para a emissão de notas fiscais e ativação.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="auth-form" style={{ gap: '16px' }}>
              <div className="form-group">
                <label>Nome Completo / Razão Social</label>
                <input 
                  type="text" 
                  placeholder="Seu nome ou Nome da Empresa" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>E-mail Corporativo</label>
                <input 
                  type="email" 
                  placeholder="voce@empresa.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-row" style={{ gap: '16px' }}>
                <div className="form-group">
                  <label>CPF / CNPJ</label>
                  <input 
                    type="text" 
                    placeholder="00.000.000/0001-00" 
                    value={taxId} 
                    onChange={(e) => setTaxId(formatCPFOrCNPJ(e.target.value))} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Método de Pagamento</label>
                  <select 
                    value={paymentMethod} 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    style={{ background: '#121212', height: '45px', border: '1px solid var(--border)' }}
                  >
                    <option value="pix">PIX (Confirmação na hora)</option>
                    <option value="card">Cartão de Crédito</option>
                  </select>
                </div>
              </div>

              <div className="setup-actions" style={{ marginTop: '24px' }}>
                <button type="button" className="btn-dark" onClick={handleBack}>
                  Voltar
                </button>
                <button type="submit" className="btn-cyan">
                  Prosseguir &rarr;
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 4: PAYMENT & PASSWORD */}
        {step === 4 && (
          <div className="setup-step">
            <h3>Conclua seu Cadastro</h3>
            <p className="setup-step-desc">Defina sua senha de acesso ao painel e efetue o pagamento da taxa de setup de R$ 499,00.</p>
            
            <form onSubmit={handlePaymentSubmit} className="auth-form" style={{ gap: '20px' }}>
              <div className="form-group">
                <label>Crie uma Senha para o Painel iAgentic</label>
                <div className="input-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ left: '16px', position: 'absolute', top: '50%', transform: 'translateY(-50%)', color: '#666' }}>
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    disabled={status === 'processing'}
                  />
                </div>
              </div>

              {paymentMethod === 'pix' ? (
                <div style={{ background: '#0a0a0a', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: 'var(--cyan)', fontWeight: 700, marginBottom: '6px' }}>CHAVE PIX CNPJ</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#fff', userSelect: 'all', background: '#020202', padding: '10px', borderRadius: '6px', border: '1px solid var(--border)' }}>
                    56.914.123/0001-99
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '8px' }}>
                    Após a transferência, o robô identificará o Pix automaticamente.
                  </div>
                </div>
              ) : (
                <div style={{ background: '#0a0a0a', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', fontSize: '13px', color: 'var(--muted)' }}>
                  Cartão de crédito selecionado. O débito de R$ 499,00 será processado com segurança via Stripe.
                </div>
              )}

              <div className="setup-actions">
                <button type="button" className="btn-dark" onClick={handleBack} disabled={status === 'processing'}>
                  Voltar
                </button>
                
                <button 
                  type="submit" 
                  className="btn-cyan"
                  style={{
                    background: status === 'success' ? '#69D81B' : '',
                    color: status === 'success' ? '#fff' : '',
                    opacity: status === 'processing' ? 0.7 : 1
                  }}
                  disabled={status === 'processing' || status === 'success'}
                >
                  {status === 'idle' && 'Ativar Agente e Pagar'}
                  {status === 'processing' && 'Ativando Agente...'}
                  {status === 'success' && 'Ativado com Sucesso! ✓'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
