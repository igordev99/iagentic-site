import React, { useState, useEffect } from 'react';

const PORTFOLIO_AGENTS = [
  {
    client: "Ideal Company",
    agentType: "Agente de SDR Inteligente",
    model: "Claude 3.5 Sonnet",
    metric1Name: "Precisão Operacional",
    metric1Val: "98.4%",
    metric2Name: "Taxa de Leads/Hora",
    metric2Val: 141,
    metric3Name: "Tempo de Trabalho Salvo",
    metric3Val: "82h",
    webmail: "sender@iagentic.com.br",
    deliveryRate: "99.98%",
    consoleName: "Console de Telemetria SDR",
    logs: [
      "Lead qualificado: Everton R. (Comercial)",
      "Mensagem enviada: WhatsApp Business API",
      "E-mail Charlotte Pro enviado"
    ]
  },
  {
    client: "Sanville Contabilidade",
    agentType: "Agente de NFS-e Automático",
    model: "Claude 3.5 Sonnet",
    metric1Name: "Precisão Operacional",
    metric1Val: "99.9%",
    metric2Name: "NFS-e Processadas",
    metric2Val: 1530,
    metric3Name: "Tempo de Trabalho Salvo",
    metric3Val: "148h",
    webmail: "nfse@sanville.com.br",
    deliveryRate: "100.00%",
    consoleName: "Console de Leitura Sanville",
    logs: [
      "Leitura de contrato concluída via OCR",
      "Calculando tempo previdenciário: OK",
      "Guia DAS emitida e enviada por e-mail"
    ]
  },
  {
    client: "Uphold Contabilidade",
    agentType: "Agente Conciliador Bancário",
    model: "Gemini 1.5 Flash",
    metric1Name: "Precisão Operacional",
    metric1Val: "99.97%",
    metric2Name: "Conciliações Realizadas",
    metric2Val: 26800,
    metric3Name: "Economia Realizada (FTE)",
    metric3Val: "85%",
    webmail: "conciliacao@uphold.com.br",
    deliveryRate: "99.95%",
    consoleName: "Console de Conciliação Uphold",
    logs: [
      "Handshake API Itaú: OK",
      "Conciliação bancária concluída",
      "Divergência de R$ 0,00 identificada"
    ]
  },
  {
    client: "Zac Contábil",
    agentType: "Agente de Agendamento Cal.com",
    model: "Claude 3.5 Sonnet",
    metric1Name: "Precisão Operacional",
    metric1Val: "99.99%",
    metric2Name: "Agendamentos Concluídos",
    metric2Val: 1150,
    metric3Name: "Boletos Enviados",
    metric3Val: "9.4k",
    webmail: "agenda@zac.com.br",
    deliveryRate: "100.00%",
    consoleName: "Console de Agendamento Zac",
    logs: [
      "Webhook Cal.com recebido",
      "Reunião agendada com sucesso",
      "Boleto gerado via WhatsApp"
    ]
  },
  {
    client: "Nexos Advocacia",
    agentType: "Leitor de Petições & Diários",
    model: "Claude 3.5 Sonnet",
    metric1Name: "Precisão Operacional",
    metric1Val: "99.98%",
    metric2Name: "Diários Varridos",
    metric2Val: 410,
    metric3Name: "Tempo de Trabalho Salvo",
    metric3Val: "38h",
    webmail: "lex@nexos.adv.br",
    deliveryRate: "100.00%",
    consoleName: "Console de Leitura Nexos",
    logs: [
      "Varredura no DJE concluída",
      "Intimação identificada no processo 08021",
      "Alerta enviado ao advogado responsável"
    ]
  },
  {
    client: "Vanguard Construtora",
    agentType: "Agente de Compras & Insumos",
    model: "Gemini 1.5 Flash",
    metric1Name: "Precisão Operacional",
    metric1Val: "99.94%",
    metric2Name: "Cotações Geradas",
    metric2Val: 1890,
    metric3Name: "Economia em Compras",
    metric3Val: "18.5%",
    webmail: "suprimentos@vanguard.eng.br",
    deliveryRate: "99.94%",
    consoleName: "Console de Compras Vanguard",
    logs: [
      "Cotação de cimento enviada para 5 fornecedores",
      "Melhor preço identificado: R$ 32/saco",
      "Pedido de compra gerado automaticamente"
    ]
  },
  {
    client: "Apex E-commerce",
    agentType: "Recuperação de Carrinho",
    model: "Claude 3.5 Sonnet",
    metric1Name: "Precisão Operacional",
    metric1Val: "99.98%",
    metric2Name: "Carrinhos Recuperados",
    metric2Val: 3120,
    metric3Name: "Receita Recuperada",
    metric3Val: "R$ 48k",
    webmail: "vendas@apexshop.com.br",
    deliveryRate: "99.98%",
    consoleName: "Console de Recuperação Apex",
    logs: [
      "Carrinho abandonado identificado (R$ 450,00)",
      "Cupom de 10% enviado via WhatsApp",
      "Cliente finalizou compra via Pix"
    ]
  },
  {
    client: "MedPrime Clínicas",
    agentType: "Agendador de Consultas",
    model: "Claude 3.5 Sonnet",
    metric1Name: "Precisão Operacional",
    metric1Val: "100.00%",
    metric2Name: "Consultas Confirmadas",
    metric2Val: 720,
    metric3Name: "Tempo de Agendamento Salvo",
    metric3Val: "60h",
    webmail: "contato@medprime.com.br",
    deliveryRate: "100.00%",
    consoleName: "Console de Agendamento MedPrime",
    logs: [
      "Confirmação de consulta enviada",
      "Paciente confirmou presença para amanhã 14h",
      "Agenda médica atualizada no Google Calendar"
    ]
  },
  {
    client: "Contabiliza Descomplica",
    agentType: "Triagem de Tickets",
    model: "Gemini 1.5 Flash",
    metric1Name: "Precisão Operacional",
    metric1Val: "99.91%",
    metric2Name: "Tickets Respondidos",
    metric2Val: 480,
    metric3Name: "Tempo de Resposta Médio",
    metric3Val: "< 1.2m",
    webmail: "suporte@contabilizadescomplica.com.br",
    deliveryRate: "99.91%",
    consoleName: "Console de Suporte Descomplica",
    logs: [
      "Novo ticket recebido: Dúvida eSocial",
      "Classificado como Alta Prioridade",
      "Respondido utilizando Base de Conhecimento"
    ]
  },
  {
    client: "Paineira Contabilidade",
    agentType: "Lançamento de Contas",
    model: "Llama 3 70B",
    metric1Name: "Precisão Operacional",
    metric1Val: "100.00%",
    metric2Name: "Contas Lançadas",
    metric2Val: 310,
    metric3Name: "Automação Domínio",
    metric3Val: "100%",
    webmail: "financeiro@paineira.com.br",
    deliveryRate: "100.00%",
    consoleName: "Console de Lançamento Paineira",
    logs: [
      "Extrato PDF importado com sucesso",
      "14 lançamentos efetuados no sistema Domínio",
      "Relatório de fechamento gerado"
    ]
  },
  {
    client: "Dr. Saúde Laboratório",
    agentType: "Entrega de Laudos",
    model: "Gemini 1.5 Flash",
    metric1Name: "Precisão Operacional",
    metric1Val: "99.97%",
    metric2Name: "Laudos Entregues",
    metric2Val: 2150,
    metric3Name: "Arquivos Anexados",
    metric3Val: "21.5k",
    webmail: "laudos@drsaude.com.br",
    deliveryRate: "99.97%",
    consoleName: "Console de Entrega Dr. Saúde",
    logs: [
      "Laudo de exames de sangue liberado",
      "Notificação enviada ao paciente",
      "Arquivo PDF anexado com sucesso"
    ]
  },
  {
    client: "Belo Foco Estética",
    agentType: "Instagram SDR & Agendamento",
    model: "Claude 3.5 Sonnet",
    metric1Name: "Precisão Operacional",
    metric1Val: "99.96%",
    metric2Name: "Contatos Qualificados",
    metric2Val: 290,
    metric3Name: "Agendamentos Concluídos",
    metric3Val: "48h",
    webmail: "belofoco@gmail.com",
    deliveryRate: "99.96%",
    consoleName: "Console de Direct Belo Foco",
    logs: [
      "Novo seguidor no Instagram qualificado",
      "Enviado menu de serviços via direct",
      "Horário reservado para Limpeza de Pele"
    ]
  },
  {
    client: "Alfa Seguros",
    agentType: "Agente de Renovação Ativa",
    model: "Claude 3.5 Sonnet",
    metric1Name: "Precisão Operacional",
    metric1Val: "99.99%",
    metric2Name: "Cotações Realizadas",
    metric2Val: 2450,
    metric3Name: "Tempo de Renovação Salvo",
    metric3Val: "115h",
    webmail: "renovacao@alfaseguros.com.br",
    deliveryRate: "99.99%",
    consoleName: "Console de Renovação Alfa",
    logs: [
      "Apólice vencendo em 15 dias identificada",
      "Cotação de renovação calculada automaticamente",
      "Proposta enviada para o WhatsApp do cliente"
    ]
  },
  {
    client: "Parati Distribuidora",
    agentType: "Rastreamento de Carga",
    model: "Gemini 1.5 Flash",
    metric1Name: "Precisão Operacional",
    metric1Val: "99.92%",
    metric2Name: "Status Rasteados",
    metric2Val: 1980,
    metric3Name: "Notificações SMS/Zap",
    metric3Val: "9.9k",
    webmail: "logistica@parati.com.br",
    deliveryRate: "99.92%",
    consoleName: "Console de Logística Parati",
    logs: [
      "Carga rastreada: Motorista a 10km da entrega",
      "SMS enviado para o cliente destinatário",
      "Status atualizado no ERP para Em Rota"
    ]
  },
  {
    client: "TechSoluções IT",
    agentType: "Filtro de Incidentes",
    model: "Llama 3 70B",
    metric1Name: "Precisão Operacional",
    metric1Val: "100.00%",
    metric2Name: "Alertas Filtrados",
    metric2Val: 940,
    metric3Name: "Redução de Falsos Alertas",
    metric3Val: "94%",
    webmail: "infra@techsolucoes.com.br",
    deliveryRate: "100.00%",
    consoleName: "Console de Monitoramento TechSol",
    logs: [
      "Alerta: CPU do servidor 3 em 91%",
      "Instância autoscaling criada via AWS API",
      "Incidente fechado com sucesso"
    ]
  }
];

export default function Hero({ navigateTo, setSetupOpen }) {
  const [agentIndex, setAgentIndex] = useState(0);
  const [phase, setPhase] = useState('initializing'); // 'initializing' | 'running' | 'completed'
  const [fade, setFade] = useState(true);
  const [cpuUsage, setCpuUsage] = useState(12);
  const [ticker, setTicker] = useState(0);
  
  const currentAgent = PORTFOLIO_AGENTS[agentIndex];
  const [requestFeed, setRequestFeed] = useState([]);

  // 1. Ticking Simulator & Agent Cockpit Rotator (12 seconds)
  useEffect(() => {
    const statsInterval = setInterval(() => {
      setTicker(prev => prev + 1);
    }, 3000);

    const rotatorInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setAgentIndex(prev => (prev + 1) % PORTFOLIO_AGENTS.length);
        setFade(true);
      }, 300);
    }, 12000);

    return () => {
      clearInterval(statsInterval);
      clearInterval(rotatorInterval);
    };
  }, []);

  // 2. Realistic Live Execution Timeline Simulator per Agent Lifecycle (12-second cycle)
  useEffect(() => {
    // Reset state for the new agent
    setPhase('initializing');
    setCpuUsage(24);
    
    const initialLog = { id: `init-1-${Date.now()}`, text: `Iniciando agente para ${currentAgent.client}...` };
    setRequestFeed([initialLog]);

    const timeouts = [];

    // Step 2: 1000ms - Connect LLM
    timeouts.push(setTimeout(() => {
      setCpuUsage(32);
      setRequestFeed(prev => [
        { id: `init-2-${Date.now()}`, text: `Conectando ao modelo LLM (${currentAgent.model})...` },
        ...prev
      ].slice(0, 4));
    }, 1000));

    // Step 3: 2000ms - MCP Auth
    timeouts.push(setTimeout(() => {
      setCpuUsage(28);
      setRequestFeed(prev => [
        { id: `init-3-${Date.now()}`, text: `MCP Client: Autenticado e carregado.` },
        ...prev
      ].slice(0, 4));
    }, 2000));

    // Step 4: 3000ms - RUNNING - Start task execution (Log 1)
    timeouts.push(setTimeout(() => {
      setPhase('running');
      setCpuUsage(68);
      setRequestFeed(prev => [
        { id: `run-1-${Date.now()}`, text: currentAgent.logs[0] },
        ...prev
      ].slice(0, 4));
    }, 3000));

    // Step 5: 5500ms - RUNNING - Task execution (Log 2)
    timeouts.push(setTimeout(() => {
      setCpuUsage(82);
      setRequestFeed(prev => [
        { id: `run-2-${Date.now()}`, text: currentAgent.logs[1] },
        ...prev
      ].slice(0, 4));
    }, 5500));

    // Step 6: 8000ms - RUNNING - Task execution (Log 3)
    timeouts.push(setTimeout(() => {
      setCpuUsage(64);
      setRequestFeed(prev => [
        { id: `run-3-${Date.now()}`, text: currentAgent.logs[2] },
        ...prev
      ].slice(0, 4));
    }, 8000));

    // Step 7: 9800ms - COMPLETED - Success
    timeouts.push(setTimeout(() => {
      setPhase('completed');
      setCpuUsage(7);
      setRequestFeed(prev => [
        { id: `done-1-${Date.now()}`, text: `Execução finalizada com sucesso.` },
        ...prev
      ].slice(0, 4));
    }, 9800));

    // Step 8: 11000ms - COMPLETED - Waiting
    timeouts.push(setTimeout(() => {
      setCpuUsage(5);
      setRequestFeed(prev => [
        { id: `done-2-${Date.now()}`, text: `Aguardando próximo trigger...` },
        ...prev
      ].slice(0, 4));
    }, 11000));

    return () => {
      timeouts.forEach(t => clearTimeout(t));
    };
  }, [agentIndex]);

  const getDisplayMetric2 = () => {
    if (typeof currentAgent.metric2Val === 'number') {
      return (currentAgent.metric2Val + Math.floor(ticker * 0.4)).toLocaleString('pt-BR');
    }
    return currentAgent.metric2Val;
  };

  return (
    <section id="hero">
      <div className="hero-glow"></div>
      <div className="container">
        <div className="hero-layout">
          
          {/* Left Column - Copy */}
          <div className="hero-inner">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              Hosting Elite & IA Integrada
            </div>
            <h1>CONSTRUA<br /><em>SEM LIMITES.</em></h1>
            <p className="hero-sub">
              Hospedagem de elite, Agentes de IA e infraestrutura premium para empresas que buscam performance real. Simplificamos a complexidade técnica para você escalar seu negócio de forma autônoma.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn-cyan" 
                onClick={() => setSetupOpen(true)}
              >
                COMEÇAR AGORA <span>&rarr;</span>
              </button>
              <a 
                href="#features" 
                className="btn-dark"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('features');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Saber Mais
              </a>
            </div>
          </div>

          {/* Right Column - Dashboard Showcase (Interactive Cockpit) */}
          <div className={`dashboard-showcase ${fade ? 'fade-in' : 'fade-out'}`}>
            
            {/* Row 1 - Active Agent */}
            <div className="showcase-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', width: '100%', minWidth: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
                  <span style={{ fontSize: '9px', textTransform: 'uppercase', color: 'var(--cyan)', fontWeight: 800, letterSpacing: '0.5px', marginBottom: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {currentAgent.client}
                  </span>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{currentAgent.agentType}</h4>
                </div>
                <div className={`status-indicator ${phase}`} style={{ flexShrink: 0 }}>
                  <span className={`pulse-dot ${phase === 'initializing' ? 'orange' : phase === 'completed' ? 'purple' : ''}`}></span>
                  {phase === 'initializing' ? 'Inicializando' : phase === 'completed' ? 'Standby' : 'Executando'}
                </div>
              </div>
              <div className="showcase-card-stats">
                <div className="showcase-stat-item">
                  <span>Precisão Operacional</span>
                  <span>{currentAgent.metric1Val}</span>
                </div>
                <div className="showcase-stat-item">
                  <span>{currentAgent.metric2Name}</span>
                  <span>{getDisplayMetric2()}</span>
                </div>
                <div className="showcase-stat-item">
                  <span>{currentAgent.metric3Name}</span>
                  <span>{currentAgent.metric3Val}</span>
                </div>
              </div>
            </div>

            {/* Row 2 - Webmail & CPU usage */}
            <div className="showcase-grid-row">
              {/* Webmail */}
              <div className="showcase-card">
                <h4>Webmail Pro</h4>
                <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {currentAgent.webmail}
                </div>
                <div className="showcase-card-stats" style={{ marginTop: '8px' }}>
                  <div className="showcase-stat-item">
                    <span>Taxa de Entrega</span>
                    <span style={{ color: 'var(--cyan)' }}>{currentAgent.deliveryRate}</span>
                  </div>
                </div>
              </div>

              {/* CPU load */}
              <div className="showcase-card">
                <h4>Infraestrutura</h4>
                <div style={{ fontSize: '24px', fontWeight: 800, marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                  {cpuUsage}% <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 500 }}>CPU</span>
                </div>
                <div className="showcase-graph-container">
                  <svg viewBox="0 0 100 30" style={{ width: '100%', height: '30px' }}>
                    <path
                      className={`showcase-graph-line ${phase}`}
                      d={`M0 25 L20 18 L40 22 L60 12 L80 ${25 - cpuUsage * 0.7} L100 15`}
                      style={{ transition: 'd 0.5s ease-in-out' }}
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 3 - Live request logs */}
            <div className="showcase-card" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.03)', fontFamily: 'var(--font-mono)', minWidth: 0, overflow: 'hidden' }}>
              <div style={{ fontSize: '9px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.5px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {currentAgent.consoleName}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '8px', fontSize: '11px', overflow: 'hidden', minWidth: 0, height: '80px' }}>
                {requestFeed.map((item) => (
                  <div key={item.id} style={{ display: 'flex', gap: '8px', color: 'rgba(255,255,255,0.7)', minWidth: 0, overflow: 'hidden' }}>
                    <span style={{ color: 'var(--cyan)', flexShrink: 0 }}>&gt;</span>
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0, flex: 1 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
