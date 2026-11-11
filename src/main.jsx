import { StrictMode, Suspense, lazy, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { PageFrame, setDocumentMeta } from './components/SiteChrome';
import { meta } from './data/content';
import './styles.css';

const Home = lazy(() => import('./pages/Home.jsx'));
const Cambio = lazy(() => import('./pages/Cambio.jsx'));
const Banking = lazy(() => import('./pages/Banking.jsx'));
const Consultoria = lazy(() => import('./pages/Consultoria.jsx'));
const Jeito = lazy(() => import('./pages/Jeito.jsx'));
const Privacy = lazy(() => import('./pages/Privacy.jsx'));
const Ethics = lazy(() => import('./pages/Ethics.jsx'));

function routeKey(path) {
  if (path.startsWith('/cambio')) return 'cambio';
  if (path.startsWith('/banking')) return 'banking';
  if (path.startsWith('/consultoria')) return 'consultoria';
  if (path.startsWith('/jeito-l2m')) return 'jeito';
  if (path.startsWith('/codigo-de-etica')) return 'ethics';
  if (path.startsWith('/politica-de-privacidade')) return 'privacy';
  return 'home';
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('l2m-theme') || 'light');
  const [path, setPath] = useState(window.location.pathname);
  const key = routeKey(path);
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('l2m-theme', theme); }, [theme]);
  useEffect(() => { const onPop = () => setPath(window.location.pathname); window.addEventListener('popstate', onPop); return () => window.removeEventListener('popstate', onPop); }, []);
  useEffect(() => { setDocumentMeta(meta[key] || meta.home); window.scrollTo({ top: 0, behavior: 'instant' }); const hash = window.location.hash; if (hash) window.setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }), 80); }, [key, path]);
  useEffect(() => { const onClick = (event) => { const link = event.target.closest('a'); if (!link || link.target === '_blank' || link.origin !== window.location.origin || !link.pathname.startsWith('/')) return; event.preventDefault(); window.history.pushState({}, '', link.pathname + link.hash); setPath(link.pathname); }; document.addEventListener('click', onClick); return () => document.removeEventListener('click', onClick); }, []);
  const Page = key === 'cambio' ? Cambio : key === 'banking' ? Banking : key === 'consultoria' ? Consultoria : key === 'jeito' ? Jeito : key === 'ethics' ? Ethics : key === 'privacy' ? Privacy : Home;
  return <PageFrame theme={theme} setTheme={setTheme}><Suspense fallback={<div className="page-loading"><span className="loading-mark">L2M</span><span>Carregando conteúdo</span></div>}><Page /></Suspense></PageFrame>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
