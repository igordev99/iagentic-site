import React from 'react';

export default function TelemetryBar() {
  return (
    <div className="telemetry-bar">
      <div className="telemetry-bar-items">
        <div className="telemetry-bar-item">
          <span className="pulse-dot"></span>
          <span>Rede: <span style={{ color: 'var(--cyan)' }}>Live</span></span>
        </div>
        <div className="telemetry-bar-item" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: '12px' }}>
          <span>Active Nodes: <span style={{ color: 'var(--white)' }}>32 nodes</span></span>
        </div>
        <div className="telemetry-bar-item" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: '12px' }}>
          <span>Hosted Agents: <span style={{ color: 'var(--white)' }}>482 active</span></span>
        </div>
        <div className="telemetry-bar-item" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: '12px' }}>
          <span>Novo: <span style={{ color: 'var(--purple)' }}>Webmail Pro Ativo</span></span>
        </div>
      </div>
      <div className="telemetry-bar-items">
        <div className="telemetry-bar-item">
          <span>Latency: <span style={{ color: 'var(--cyan)' }}>1.2ms</span></span>
        </div>
        <div className="telemetry-bar-item" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: '12px' }}>
          <span>SLA: <span style={{ color: 'var(--cyan)' }}>99.99%</span></span>
        </div>
      </div>
    </div>
  );
}
