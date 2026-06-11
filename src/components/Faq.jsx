import React, { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      q: "O que dá para automatizar?",
      a: "Quase tudo: responder clientes no WhatsApp, postar nas redes sociais, enviar e-mails, organizar dados, gerar orçamentos, triar currículos e muito mais."
    },
    {
      q: "Preciso ter conhecimento técnico?",
      a: "Não é necessário nenhum conhecimento técnico! Nossa plataforma é intuitiva e fácil de usar. Cuidamos de toda a configuração técnica e oferecemos suporte contínuo."
    },
    {
      q: "Funciona com o que eu já uso?",
      a: "Sim! Conectamos com tudo o que você já usa: WhatsApp Business, Instagram, Gmail, Outlook, HubSpot, Salesforce, Notion, Slack e mais de 100 outras ferramentas."
    },
    {
      q: "Quanto tempo leva para configurar?",
      a: "A maioria das automações é configurada em 1-2 semanas. Soluções empresariais complexas podem levar de 4 a 6 semanas dependendo do escopo."
    },
    {
      q: "É seguro? Meus dados ficam protegidos?",
      a: "Sim, segurança é a prioridade número um. Seguimos a LGPD (Lei Geral de Proteção de Dados) e os padrões de criptografia mais rigorosos do mercado. Seus dados ficam completamente protegidos."
    }
  ];

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq">
      <div className="container">
        <h2 className="section-center-title">Tem Dúvidas? Nós Temos Respostas</h2>
        <div className="faq-list">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => toggleIndex(idx)}>
                  <span className="faq-num">{idx + 1}</span>
                  {item.q}
                  <span className="faq-plus">+</span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-content">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
