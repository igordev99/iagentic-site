import React from 'react';

export default function Partners() {
  const models = [
    '✦ GEMINI', '✦ CLAUDE', '✦ DEEPSEEK', '✦ OPENAI', '✦ GROK',
    '✦ MINIMAX', '✦ MISTRAL', '✦ LLAMA', '✦ NEMOTRON'
  ];

  return (
    <section id="partners">
      <div className="container">
        <p className="partners-label">Desenvolvido com os modelos de Inteligência Artificial mais avançados do mundo.</p>
      </div>
      <div className="marquee-wrap">
        <div className="marquee-track">
          {models.concat(models).map((model, i) => (
            <span key={i} className="partner">{model}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
