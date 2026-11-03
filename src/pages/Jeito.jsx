import { useRef, useState } from 'react';
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import { ButtonLink, SectionHeading, StatStrip, TrustNote, whatsappUrl } from '../components/SiteChrome';
import { site, stats } from '../data/content';

function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [invalid, setInvalid] = useState({});
  const firstInvalid = useRef(null);
  const submit = async (event) => {
    event.preventDefault();
    setMessage('');
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());
    const nextInvalid = {};
    if (String(data.name).trim().length < 2) nextInvalid.name = 'Informe seu nome.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) nextInvalid.email = 'Informe um e-mail válido.';
    if (String(data.message).trim().length < 10) nextInvalid.message = 'Escreva uma mensagem com pelo menos 10 caracteres.';
    if (Object.keys(nextInvalid).length) { setInvalid(nextInvalid); setStatus('error'); setMessage('Confira os campos destacados antes de enviar.'); requestAnimationFrame(() => firstInvalid.current?.focus()); return; }
    setInvalid({});
    if (data.website) { setStatus('sent'); return; }
    const whatsappMessage = `*Novo contato pelo site L2M*\n\n*Nome:* ${String(data.name).trim()}\n*E-mail:* ${String(data.email).trim()}\n*Empresa:* ${String(data.company).trim() || 'Não informado'}\n*Mensagem:*\n${String(data.message).trim()}`;
    setStatus('sent');
    window.open(whatsappUrl(whatsappMessage), '_blank', 'noopener,noreferrer');
    event.currentTarget.reset();
  };
  const field = (name) => ({ ref: name === Object.keys(invalid)[0] ? firstInvalid : undefined, 'aria-invalid': Boolean(invalid[name]), 'aria-describedby': invalid[name] ? `${name}-error` : undefined });
  return <form className="contact-form" onSubmit={submit} noValidate aria-describedby="form-help">
    <p id="form-help" className="sr-only">Os campos nome, e-mail e mensagem são obrigatórios.</p>
    <label htmlFor="contact-name">Nome<input id="contact-name" name="name" required maxLength="120" autoComplete="name" {...field('name')} />{invalid.name && <span id="name-error" className="field-error">{invalid.name}</span>}</label>
    <label htmlFor="contact-email">E-mail<input id="contact-email" name="email" type="email" required maxLength="160" autoComplete="email" {...field('email')} />{invalid.email && <span id="email-error" className="field-error">{invalid.email}</span>}</label>
    <label htmlFor="contact-company">Empresa<input id="contact-company" name="company" maxLength="160" autoComplete="organization" /></label>
    <label htmlFor="contact-message">Mensagem<textarea id="contact-message" name="message" required minLength="10" maxLength="4000" {...field('message')} />{invalid.message && <span id="message-error" className="field-error">{invalid.message}</span>}</label>
    <label className="sr-only" htmlFor="contact-website">Website<input id="contact-website" name="website" tabIndex="-1" autoComplete="off" /></label>
    <div className="form-meta"><button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}<ArrowUpRight size={17} /></button><span className="form-message" role={status === 'error' ? 'alert' : undefined} aria-live="polite">{status === 'sent' ? 'Mensagem enviada. Obrigado.' : status === 'error' ? message : ''}</span></div>
  </form>;
}

export default function Jeito() { return <>
  <section className="page-hero"><div className="container"><p className="eyebrow">Jeito L2M · Quem somos</p><h1>O jeito L2M de operar câmbio internacional</h1><p className="intro">Fundada há mais de 10 anos por sócios com uma visão compartilhada, a L2M nasceu para tornar o processo de câmbio e as operações financeiras internacionais mais acessíveis e mais seguras.</p></div></section>
  <section className="section"><div className="container split-feature"><div className="split-image"><img src="/assets/images/office-lounge.webp" alt="Recepção da L2M com a marca na parede e poltronas para atendimento" loading="lazy" /><div className="image-caption">Um ambiente para conversar sobre operações complexas.</div></div><div className="feature-copy"><p className="eyebrow">Nossa história</p><h2>Conhecimento que acompanha o mercado.</h2><p>A L2M desenvolveu uma equipe altamente especializada, com conhecimento técnico aprofundado em câmbio, banking e estruturação regulatória.</p><p>Hoje, nossa equipe reúne especialistas em câmbio, regulatório e relacionamento com o cliente, estruturada para acompanhar cada operação do início ao fim, sempre com transparência sobre prazos, custos e próximos passos.</p><TrustNote>A L2M atua desde 2014.</TrustNote></div></div></section>
  <section className="section cream"><div className="container"><SectionHeading eyebrow="Missão e visão" title="Simplificar sem perder profundidade." /><div className="cards-grid"><article className="service-card" style={{background:'var(--navy)'}}><div className="service-card-content"><p className="eyebrow">Missão</p><h3>Soluções seguras, ágeis e transparentes.</h3><p>Simplificar operações financeiras internacionais, oferecendo soluções seguras, ágeis e transparentes para todos os nossos clientes.</p></div></article><article className="service-card" style={{background:'var(--green)'}}><div className="service-card-content"><p className="eyebrow">Visão</p><h3>Referência em câmbio consultivo.</h3><p>Ser a referência do mercado em câmbio consultivo, reconhecida pela qualidade do atendimento e pela inovação constante.</p></div></article><div className="feature-copy"><p className="eyebrow">Números</p><h2>Uma história feita de consistência.</h2><StatStrip items={stats} /></div></div></div></section>
  <section className="section" id="valores"><div className="container"><SectionHeading eyebrow="Valores" title="Cada interação precisa refletir o que acreditamos." text="Nosso objetivo é construir relacionamentos de confiança e gerar um impacto positivo nas operações financeiras dos nossos clientes." /><div className="step-grid"><article className="step"><h3>Transparência</h3><p>Comunicação clara e honesta com cada cliente, em cada etapa da operação.</p></article><article className="step"><h3>Ética</h3><p>Integridade e respeito em todas as ações e operações.</p></article><article className="step"><h3>Excelência</h3><p>Comprometimento com a qualidade em cada interação.</p></article><article className="step"><h3>Empatia e inovação</h3><p>Colocar o cliente no centro de cada decisão e estar à frente nas soluções.</p></article></div></div></section>
  <section className="section cream" id="fale-com-a-gente"><div className="container form-layout"><div className="feature-copy"><p className="eyebrow">Fale com a gente</p><h2>Fale com quem resolve.</h2><p>Encontre a solução financeira certa para o seu momento. Descubra serviços ágeis e adaptados às suas necessidades: entre em contato e experimente simplicidade e confiança em cada transação.</p><div className="bullet-lines"><div><ShieldCheck size={18} /><span>Atendimento consultivo do início ao fim.</span></div><div><Check size={18} /><span>Clareza sobre prazos, custos e próximos passos.</span></div></div><ButtonLink href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Olá, quero falar com a L2M.')}`} external>Falar no WhatsApp</ButtonLink></div><ContactForm /></div></section>
</>; }
