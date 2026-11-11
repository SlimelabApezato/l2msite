import { ButtonLink, SectionHeading } from '../components/SiteChrome';
import { site } from '../data/content';

const principles = [
  ['Integridade e honestidade', 'A L2MTeam age com honestidade e integridade em cada relação com o cliente. Tratamos cada negócio com objetividade, buscando sempre o melhor para nossos clientes.'],
  ['Conhecimento a serviço do cliente', 'A L2MTeam coloca seu conhecimento técnico a serviço dos melhores resultados para seus clientes. Estudamos, aplicamos e inovamos continuamente para oferecer sempre o melhor.'],
  ['Conformidade e ética', 'Somos rigorosos no cumprimento das leis brasileiras e de todas as normas e práticas de compliance. Atuamos com responsabilidade e vigilância para prevenir riscos como a lavagem de dinheiro e o financiamento ao terrorismo.'],
  ['Escolha pelo que é correto', 'Não buscamos apenas o que é legal, mas o que é certo. Atuamos com responsabilidade, respeito e senso de justiça em cada decisão e ação.'],
  ['Proibição de ofertas e favores', 'A L2MTeam não oferece, aceita ou realiza, em seu nome ou de seus clientes, qualquer favor ou vantagem financeira para funcionários públicos, no Brasil ou no exterior, em troca de favores comerciais ou regulatórios.'],
  ['Proteção da reputação', 'Cuidamos da reputação da L2M e dos clientes que confiam em nosso trabalho. Nossa marca e a de nossos clientes são nossos ativos mais valiosos.'],
  ['Confidencialidade e sigilo', 'Tratamos todos os serviços e negócios de nossos clientes com total confidencialidade e respeito ao sigilo profissional. Protegemos a privacidade e a segurança das informações de cada cliente, sem exceção.'],
  ['Justiça e Transparência na Precificação', 'Nossos serviços têm preço justo, com critérios claros e alinhados ao valor que entregamos. Estamos sempre prontos para explicar, de forma transparente, os serviços e a precificação envolvida.'],
  ['Igualdade e respeito', 'Todos são tratados com igualdade pela L2MTeam. Valorizamos cada cliente e cada parceiro, independentemente de características, tamanho, capacidade financeira ou valor de honorários.'],
];

export default function Ethics() { return <>
  <section className="page-hero"><div className="container"><p className="eyebrow">L2M · Governança e integridade</p><h1>Código de Ética</h1><p className="intro">Premissas básicas inegociáveis para relações responsáveis, transparentes e conformes.</p></div></section>
  <section className="section"><div className="container legal-copy ethics-copy"><SectionHeading eyebrow="Premissas básicas inegociáveis" title="Integridade que orienta cada decisão." text="As regras e compromissos abaixo orientam a atuação da L2M e a relação com clientes, parceiros e instituições." />
    {principles.map(([title, text], index) => <article className="ethics-principle" key={title}><span className="row-number">{String(index + 1).padStart(2, '0')}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}
    <article className="ethics-benefit"><p className="eyebrow">Benefícios exclusivos L2M</p><p>A principal vantagem da L2M é a nossa capacidade exclusiva de personalizar e oferecer serviços financeiros de forma ágil, proporcionando experiências adaptadas às necessidades dos clientes, com simplicidade, segurança e total conformidade com as regulamentações vigentes.</p></article>
  </div></section>
  <section className="cta-band"><div className="container"><div className="section-heading"><p className="eyebrow">Financial Solutions</p><h2>Soluções financeiras personalizadas.</h2><p className="lead">Descubra serviços ágeis e adaptados às suas necessidades. Entre em contato e experimente simplicidade e confiança em cada transação.</p></div><ButtonLink href="/jeito-l2m#fale-com-a-gente">Contato</ButtonLink></div></section>
</>; }
