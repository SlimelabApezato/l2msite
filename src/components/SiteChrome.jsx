import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, Menu, Moon, ShieldCheck, Sun, X } from 'lucide-react';
import { navItems, site } from '../data/content';

export function whatsappUrl(message = 'Olá, gostaria de falar com a L2M.') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const currentPath = window.location.pathname;
  useEffect(() => { document.body.classList.toggle('menu-open', open); return () => document.body.classList.remove('menu-open'); }, [open]);
  return <header className="site-header">
    <div className="header-inner container">
      <a className="brand" href="/home" onClick={() => setOpen(false)} aria-label="L2M Financial Solutions - Home"><img src={theme === 'dark' ? '/assets/logos/logo-light.png' : '/assets/logos/logo-dark.png'} alt="L2M Financial Solutions" /></a>
      <button className="mobile-menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
        {navItems.map(item => <a key={item.path} className={currentPath === item.path || (currentPath === '/' && item.path === '/home') ? 'active' : ''} href={item.path} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a className="header-cta" href={whatsappUrl()} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Fale com a gente <ArrowUpRight size={16} /></a>
        <button className="theme-toggle" aria-label={`Ativar tema ${theme === 'dark' ? 'claro' : 'escuro'}`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}<span>{theme === 'dark' ? 'Claro' : 'Escuro'}</span></button>
      </nav>
    </div>
  </header>;
}

export function WhatsAppFab() { return <a className="whatsapp-fab" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Falar com a L2M pelo WhatsApp"><span className="pulse-ring" /><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.06 24l6.28-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.55 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.47-8.41ZM12.07 21.82h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.88 9.88 0 0 1-1.52-5.31C2.18 6.45 6.62 2 12.07 2c2.64 0 5.12 1.03 6.99 2.9a9.85 9.85 0 0 1 2.9 7c0 5.45-4.44 9.9-9.89 9.9Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg></a>; }

export function Footer() { return <footer className="site-footer"><div className="container footer-grid">
  <div className="footer-brand"><img src="/assets/logos/logo-light.png" alt="L2M Financial Solutions" /><p>Hub financeiro internacional. Do jeito certo.</p><div className="footer-socials"><a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">IG</a><a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a></div></div>
  <div><p className="footer-label">Câmbio</p><a href="/cambio#cambio-pronto">Câmbio Pronto</a><a href="/cambio#cambio-futuro">Câmbio Futuro</a><a href="/cambio#hedge-cambial">Hedge Cambial</a><a href="/cambio#trade-finance">Trade Finance</a><a href="/cambio#perguntas">Perguntas e Respostas</a></div>
  <div><p className="footer-label">Banking</p><a href="/banking#produtos-banking">Produtos de Banking</a><a href="/banking#baas">Bank as a Service</a><a href="/banking#produtos-customizados">Produtos Customizados</a><a href="/banking#perguntas">Perguntas e Respostas</a></div>
  <div><p className="footer-label">Consultoria</p><a href="/consultoria#cambio-pagamentos">Câmbio e Pagamentos</a><a href="/consultoria#capitais-estrangeiros">Capitais Estrangeiros</a><a href="/consultoria#estruturas-bancarias">Estruturas Bancárias</a><a href="/consultoria#consultoria-corporativa">Consultoria Corporativa</a><a href="/consultoria#regularizacao">Regularização</a></div>
  <div><p className="footer-label">Contato</p><a href={`mailto:${site.email}`}>{site.email}</a><a href={`tel:${site.phone.replace(/\D/g, '')}`}>{site.phone}</a><a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp {site.whatsappDisplay}</a><a href="/jeito-l2m#fale-com-a-gente">Enviar mensagem</a><p className="footer-address">{site.address}</p></div>
</div><div className="container footer-bottom"><span>{site.legalName} · CNPJ {site.cnpj}</span><div><a href={site.ethics} target="_blank" rel="noreferrer">Código de Ética</a><a href="/politica-de-privacidade">Política de Privacidade</a><span>© {new Date().getFullYear()} L2M</span></div></div></footer>; }

export function PageFrame({ children, theme, setTheme }) { return <><Header theme={theme} setTheme={setTheme} /><main>{children}</main><WhatsAppFab /><Footer /></>; }

export function SectionHeading({ eyebrow, title, text, align = 'left' }) { return <div className={`section-heading ${align}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="lead">{text}</p>}</div>; }

export function ButtonLink({ href, children, variant = 'primary', external = false }) { return <a className={`button ${variant}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{children}<ArrowUpRight size={17} /></a>; }

export function FAQ({ items }) { const [open, setOpen] = useState(null); return <div className="faq-list">{items.map(([question, answer], i) => <div className={`faq-item ${open === i ? 'open' : ''}`} key={question}><button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}><span>{question}</span>{open === i ? <X size={18} /> : <ChevronDown size={18} />}</button>{open === i && <div className="faq-answer"><p>{answer}</p></div>}</div>)}</div>; }

export function StatStrip({ items }) { return <div className="stat-strip">{items.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>; }

export function TrustNote({ children = 'Compliance e clareza em cada etapa.' }) { return <div className="trust-note"><ShieldCheck size={18} /><span>{children}</span></div>; }

export function setDocumentMeta({ title, description }) { document.title = title; let desc = document.querySelector('meta[name="description"]'); if (!desc) { desc = document.createElement('meta'); desc.name = 'description'; document.head.appendChild(desc); } desc.content = description; }
