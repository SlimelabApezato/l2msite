export const site = {
  brand: 'L2M Financial Solutions',
  whatsapp: '5521976344203',
  whatsappDisplay: '(21) 97634-4203',
  phone: '+55 21 4102 8564',
  email: 'contato@l2m.com.br',
  address: 'Av. Ator José Wilker, 605 · Bloco Asia · Salas 1220, 1221, 1228 e 1229 · Barra da Tijuca · Rio de Janeiro · RJ · CEP 22775-024',
  legalName: 'L2M Consultoria e Assessoria Ltda.',
  cnpj: '18.045.454/0001-44',
  instagram: 'https://www.instagram.com/L2MTeam',
  linkedin: 'https://www.linkedin.com/company/l2m-financial-solution/',
  bs2: 'https://www.bancobs2.com.br/',
  ethics: 'https://l2m.com.br/staging/codigo-de-etica',
};

export const navItems = [
  { label: 'Home', path: '/home' },
  { label: 'Câmbio', path: '/cambio' },
  { label: 'Banking', path: '/banking' },
  { label: 'Consultoria', path: '/consultoria' },
  { label: 'Jeito L2M', path: '/jeito-l2m' },
];

export const stats = [
  ['10', 'anos de história'],
  ['1.400', 'clientes satisfeitos'],
  ['21.000', 'contratos fechados'],
];

export const homeSteps = [
  { number: '01', title: 'Análise Personalizada', text: 'Avaliamos suas necessidades específicas e seus objetivos financeiros para indicar o caminho certo, sem soluções genéricas.' },
  { number: '02', title: 'Planejamento Estratégico', text: 'Desenvolvemos estratégias de câmbio que minimizam riscos, aproveitam oportunidades e tornam suas operações internacionais mais eficientes.' },
  { number: '03', title: 'Gerenciamento de Risco', text: 'Identificamos e reduzimos os riscos cambiais da sua operação, com soluções que protegem seu negócio contra flutuações de mercado.' },
  { number: '04', title: 'Aderência às Normas Cambiais', text: 'Garantimos que cada operação esteja em conformidade com as regras do Banco Central do Brasil, evitando multas e problemas regulatórios.' },
];

export const serviceCards = [
  { eyebrow: '01 / Câmbio', title: 'Câmbio consultivo para quem não pode errar.', text: 'Câmbio pronto, câmbio futuro, hedge cambial e trade finance, com atendimento consultivo da L2M em cada operação.', path: '/cambio', cta: 'Conhecer Câmbio', image: '/assets/images/office-reception.webp' },
  { eyebrow: '02 / Banking', title: 'Banking sob medida para operar sem fronteiras.', text: 'Conta digital, cartão e estrutura financeira via nossa plataforma BaaS, no mesmo ecossistema que já cuida do seu câmbio.', path: '/banking', cta: 'Conhecer Banking', image: '/assets/images/office-team.webp' },
  { eyebrow: '03 / Consultoria', title: 'Estrutura, acompanhamento e regularização.', text: 'Câmbio, registros no Banco Central, empréstimos externos, BaaS e operações societárias para empresas que movem capital entre países.', path: '/consultoria', cta: 'Conhecer Consultoria', image: '/assets/images/office-lounge.webp' },
];

export const changeServices = [
  { id: 'cambio-pronto', title: 'Câmbio Pronto', text: 'Compra e venda de moeda estrangeira com liquidação em até 2 dias úteis. Ideal para pagamentos internacionais e recebimentos do exterior que não podem esperar, com atendimento para todos os perfis de cliente e sem valor mínimo ou máximo por operação.' },
  { id: 'cambio-futuro', title: 'Câmbio Futuro', text: 'Contrato de câmbio para liquidação em uma data futura definida, com prazo de até 360 dias. Protege contra a oscilação da taxa entre a contratação e o vencimento, pensado para quem já sabe quando vai pagar ou receber em moeda estrangeira e quer travar a previsibilidade desde já.' },
  { id: 'hedge-cambial', title: 'Hedge Cambial', text: 'Nossa linha de proteção cambial reúne os instrumentos certos para cada tipo de exposição ao câmbio, com a taxa definida com antecedência para dar mais previsibilidade ao seu resultado.' },
  { id: 'trava-cambio', title: 'Trava de Câmbio', text: 'Fixa a taxa de câmbio no momento da contratação para uma operação real de compra ou venda de moeda estrangeira, com entrega física da moeda. Funciona para todas as moedas conversíveis, sem valor mínimo ou máximo.' },
  { id: 'ndf', title: 'NDF (Non-Deliverable Forward)', text: 'Protege o resultado financeiro da sua exposição cambial sem movimentar fisicamente a moeda: a liquidação acontece pela diferença entre a taxa contratada e a taxa de referência no vencimento. Indicado quando a proteção precisa ser só financeira.' },
  { id: 'trade-finance', title: 'Trade Finance', text: 'Financiamos suas operações de comércio exterior com Finimp, ACC e ACE, além de antecipação de recebíveis de exportação, dando fôlego de caixa para o seu negócio importar e exportar sem travar a operação.' },
];

export const bankingProducts = [
  { id: 'produtos-banking', title: 'Produtos de Banking', text: 'Através de tecnologia própria e de uma plataforma digital robusta, facilitamos o acesso a serviços financeiros essenciais, para que você administre suas finanças internacionais com total controle e confiança.' },
  { id: 'baas', title: 'Bank as a Service (BaaS) L2M', text: 'O BaaS da L2M é uma plataforma própria, em aplicativo e web, que reúne conta digital, movimentação internacional e gestão financeira no mesmo lugar. A plataforma é integrada ao Banco BS2, e a conta e a movimentação internacional são operadas no Brasil. Atende a empresa que precisa centralizar a gestão financeira e ter mais visibilidade da operação internacional.', highlight: 'Controle, visibilidade e autonomia para a empresa conduzir a própria operação.' },
  { id: 'produtos-customizados', title: 'Produtos Customizados', text: 'Estruturas financeiras desenhadas para necessidades específicas de empresas estrangeiras, não residentes e operações internacionais complexas.' },
  { id: 'contas', title: 'Contas para empresas e não residentes', text: 'A L2M abre contas para empresas e para não residentes pela plataforma BaaS, integrada ao Banco BS2. É uma estrutura de conta e de movimentação internacional operada no Brasil, com a segurança de uma estrutura bancária formal.' },
  { id: 'escrow', title: 'Escrow Account', text: 'A conta escrow, ou conta garantia, mantém o valor de uma transação protegido até que as condições do contrato sejam cumpridas. É usada em transações complexas, como aquisições e contratos internacionais. Com a escrow, o pagamento acontece quando o combinado é cumprido.' },
];

export const consultingGroups = [
  {
    id: 'cambio-pagamentos', title: 'Câmbio e Pagamentos Internacionais', description: 'Operações cambiais, fluxo de pagamentos e recebimentos com o exterior e proteção contra a variação da taxa.',
    items: [
      ['consultoria-cambio', 'Consultoria em Câmbio e Operações Internacionais', 'A L2M estrutura, contrata e acompanha operações de câmbio: remessas, recebimentos, câmbio de importação e de exportação e operações casadas. O acompanhamento cobre a documentação, o custo da operação (spread, tarifa e tributo) e a interlocução com o banco, em todas as etapas.', 'Se a empresa quer clareza de custo e de documentação em cada operação, a L2M acompanha o processo até a conclusão.'],
      ['pagamentos-recebimentos', 'Consultoria em Estruturação de Pagamentos e Recebimentos Internacionais', 'A L2M estrutura o fluxo de recebimento de clientes e de pagamento a fornecedores no exterior, com transferências via SWIFT e bancos correspondentes. Também organiza os comprovantes e identifica inconsistências nas transferências.', 'Quando a empresa paga ou recebe do exterior, a L2M organiza o fluxo e confere cada transferência com o seu comprovante.'],
      ['risco-trade', 'Consultoria em Gestão de Risco Cambial e Trade Finance', 'A L2M avalia a exposição cambial da empresa e compara as alternativas de proteção, como NDF e câmbio a termo, com as linhas de financiamento à importação e à exportação: Finimp, ACC e ACE. O objetivo do hedge é proteger resultado, margem e caixa. A consultoria atende importadores, exportadores e empresas com compromissos em moeda estrangeira.', 'Para decidir como proteger margem e caixa, a L2M coloca as alternativas de hedge e de financiamento lado a lado.'],
    ],
  },
  {
    id: 'capitais-estrangeiros', title: 'Capitais Estrangeiros e Banco Central', description: 'Registros, declarações e regularização de capital estrangeiro, empréstimos externos e investimento no Brasil.',
    items: [
      ['registros-bacen', 'Consultoria em Capitais Estrangeiros e Registros no Banco Central', 'A L2M cuida dos registros e das declarações de capital internacional junto ao Banco Central: investimento estrangeiro direto, no SCE-IED, módulo do Sistema de Câmbio e Capitais Internacionais (SCE), e empréstimos externos, no SCE-Crédito. O trabalho inclui o diagnóstico de inconsistências cadastrais e a regularização de operações antigas ou com registro incorreto.', 'Quando o capital internacional precisa estar em dia com o Banco Central, a L2M cuida do registro, da declaração e da regularização.'],
      ['emprestimos-externos', 'Consultoria em Empréstimos Externos e Financiamentos Internacionais', 'A L2M estrutura empréstimos com credor estrangeiro ou entre empresas do mesmo grupo, o chamado mútuo internacional. O trabalho cobre o cronograma de desembolso e de pagamento, o câmbio de ingresso, o registro no SCE-Crédito e, quando necessário, a renegociação e a conversão da dívida em capital.', 'Se a empresa contrata um empréstimo com credor estrangeiro, a L2M organiza cronograma, câmbio e registro desde o início.'],
      ['investimento-estrangeiro', 'Consultoria em Investimento Estrangeiro no Brasil', 'A L2M orienta o investidor não residente e a empresa brasileira que recebe capital estrangeiro. Na entrada do recurso, o apoio cobre a integralização e o aumento de capital. Na saída, cobre repatriação, redução de capital, remessa de dividendos e juros sobre capital próprio.', 'Quando o investimento estrangeiro entra ou sai do Brasil, a L2M orienta cada etapa da operação.'],
    ],
  },
  {
    id: 'estruturas-bancarias', title: 'Estruturas Bancárias e BaaS', description: 'Diagnóstico da necessidade bancária da empresa e implantação da estrutura adequada.',
    items: [
      ['estruturas-baas', 'Consultoria em Estruturas Bancárias e Bank as a Service (BaaS)', 'A L2M diagnostica a necessidade bancária da empresa e apoia a abertura de conta, para empresas e para não residentes, e a implantação do BaaS, com PIX, boleto e onboarding. O acompanhamento continua depois da implantação e não termina na escolha da estrutura.', 'Quando a empresa precisa de uma estrutura bancária para operar, a L2M diagnostica a necessidade e implanta a estrutura adequada.'],
    ],
  },
  {
    id: 'consultoria-corporativa', title: 'Consultoria Financeira Corporativa', description: 'Organização financeira, societária e bancária de empresas com operações internacionais.',
    items: [
      ['financeiro-internacional', 'Consultoria Financeira para Empresas com Operações Internacionais', 'A L2M mapeia o fluxo de entrada e saída de recursos da empresa, organiza a tesouraria internacional, identifica o risco cambial e revisa o processo interno de contratação e liquidação de câmbio.', 'Se a empresa não tem uma equipe dedicada a operações internacionais, a L2M organiza e acompanha esse financeiro com ela.'],
      ['operacoes-societarias', 'Consultoria em Operações Financeiras e Societárias Internacionais', 'A L2M conecta a movimentação financeira internacional ao evento societário que a origina: aumento ou redução de capital, conversão de empréstimo em capital, dividendo a sócio estrangeiro e reorganização societária.', 'Quando uma movimentação internacional nasce de um evento societário, a L2M trata a parte financeira e a societária juntas.'],
      ['relacionamento-bancario', 'Consultoria em Relacionamento Bancário', 'A L2M avalia a estrutura bancária da empresa e negocia com mais de um banco ao mesmo tempo, sem vínculo com uma única instituição.', 'Se a empresa quer revisar as suas relações bancárias, a L2M conduz a negociação com independência.'],
    ],
  },
  {
    id: 'regularizacao', title: 'Regularização e Operações Especiais', description: 'Revisão de operações antigas, cadastros de investidores estrangeiros e estruturas de garantia.',
    items: [
      ['regularizacao-operacoes', 'Consultoria em Regularização e Diagnóstico de Operações Financeiras', 'A L2M revisa operações de câmbio ou de crédito externo feitas no passado sem acompanhamento e concilia o contrato com o que de fato entrou ou saiu. Com a revisão pronta, monta o plano de regularização.', 'Quando uma operação antiga ficou sem acompanhamento, a L2M revisa, concilia e monta o plano para regularizar.'],
      ['cadastros-investidores', 'Consultoria em Cadastros e Habilitações de Investidores Estrangeiros', 'A L2M organiza a documentação que o investidor estrangeiro precisa para operar no Brasil: CNPJ, Cadastro Declaratório de Não-Residente (CDNR), beneficiário final e cadastro junto às instituições.', 'Quando o investidor estrangeiro vai começar a operar no Brasil, a L2M organiza a documentação que ele precisa.'],
      ['garantias', 'Consultoria em Garantias e Estruturas Financeiras Especiais', 'A L2M estrutura conta escrow, carta de compromisso bancário e mecanismos de pagamento condicionado ao cumprimento de uma obrigação contratual, como em aquisições e contratos internacionais.', 'Quando as partes de um contrato precisam de segurança no pagamento, a L2M estrutura a garantia que libera o pagamento quando o contrato é cumprido.'],
    ],
  },
];

export const faqs = {
  cambio: [
    ['O que é o mercado de câmbio?', 'O mercado de câmbio é essencial para a economia global: permite a troca de moedas entre países e viabiliza transações internacionais. Atende empresas que importam e exportam, investidores em mercados estrangeiros e pessoas que precisam fazer remessas ou pagamentos em outra moeda. No Brasil, é regulado pelo Banco Central, o que garante segurança e legalidade nas operações.'],
    ['O que é um correspondente cambial e bancário?', 'É o agente que viabiliza as operações entre clientes e instituições financeiras, garantindo que essas transações estejam em total conformidade com as regulamentações brasileiras, incluindo as diretrizes de PLD-FT do Banco Central. O correspondente também garante que os processos sejam conduzidos de forma ágil e segura.'],
    ['A L2M é diferente do câmbio do meu banco?', 'A diferença está no escopo. Além do câmbio, a L2M acompanha o que vem junto da operação: conta, registros e declarações no Banco Central e consultoria, no mesmo atendimento e com um interlocutor só. A empresa acompanha cada passo, sem precisar executar nada.'],
    ['Quando usar câmbio pronto e quando usar câmbio futuro?', 'O câmbio pronto atende a necessidade imediata: a compra ou a venda de moeda estrangeira é liquidada em até 2 dias úteis. O câmbio futuro serve para quem já conhece a data de um pagamento ou de um recebimento e quer definir a taxa agora, com liquidação em até 360 dias.'],
    ['Trava de câmbio ou NDF: qual faz mais sentido para a minha empresa?', 'Depende do tipo de exposição. A trava de câmbio fixa a taxa de uma operação real de compra ou de venda de moeda estrangeira, com entrega física da moeda. O NDF protege o resultado financeiro sem entrega da moeda: a liquidação acontece em reais, pela diferença entre a taxa contratada e a taxa de referência no vencimento.'],
    ['Existe valor mínimo ou máximo para operar?', 'Câmbio pronto, câmbio futuro e trava de câmbio não têm valor mínimo nem máximo por operação. O NDF também não tem valor mínimo.'],
    ['Como a L2M apresenta o custo da operação?', 'Antes de fechar, a L2M apresenta taxa, spread e custo operacional. A empresa decide com todos os números à mesa e acompanha cada etapa até a liquidação.'],
  ],
  banking: [
    ['O que é BaaS?', 'BaaS é a sigla de Bank as a Service. Na L2M, é a plataforma própria, em aplicativo e web, que reúne conta digital, movimentação internacional e gestão financeira, integrada ao Banco BS2.'],
    ['Como funciona a conta internacional da L2M?', 'É uma estrutura de conta e de movimentação internacional operada no Brasil, pela plataforma BaaS da L2M integrada ao Banco BS2. A empresa acompanha a conta e a movimentação pelo aplicativo e pela versão web.'],
    ['Quem pode abrir uma conta pela L2M?', 'A abertura de conta é para empresas e para não residentes.'],
    ['Para que serve uma conta escrow?', 'Ela dá segurança a quem paga e a quem recebe em uma transação complexa, como uma aquisição ou um contrato internacional: o valor fica na conta garantia e é liberado quando as condições do contrato são cumpridas.'],
  ],
  consultoria: [
    ['Para quem é a consultoria da L2M?', 'Para empresas com operações internacionais, grupos econômicos e holdings, e para investidores estrangeiros que operam no Brasil.'],
    ['Qual é a diferença entre a consultoria e os produtos de câmbio e banking?', 'Os produtos de câmbio e de banking são as operações em si, como o câmbio pronto e a conta digital. A consultoria é o trabalho de estruturar, acompanhar e regularizar essas operações, o que inclui os registros no Banco Central e a organização do fluxo financeiro da empresa.'],
    ['O que é o registro no SCE-IED?', 'O SCE-IED é o módulo do Sistema de Câmbio e Capitais Internacionais, do Banco Central, usado para registrar o investimento estrangeiro direto no Brasil. Ele se aplica quando um investidor não residente investe em uma empresa brasileira e quando a empresa recebe esse capital.'],
    ['A L2M substitui o meu advogado, o contador ou o banco?', 'Não. A L2M presta consultoria e assessoria: coordena e acompanha cada etapa ao lado do seu advogado, do seu contador e das instituições financeiras. Parecer jurídico, parecer tributário, decisão de crédito e operações privativas de instituição autorizada seguem com o profissional ou a instituição responsável.'],
    ['Minha operação fica segura e em conformidade com o Banco Central?', 'A segurança está no processo. Toda operação é registrada, documentada e acompanhada do fechamento à liquidação, dentro da regulamentação do Banco Central, e o compliance faz parte de cada etapa. A plataforma BaaS é integrada ao Banco BS2, uma estrutura bancária formal, e a conta e a movimentação internacional são operadas no Brasil. A L2M atua desde 2014.'],
  ],
};

export const meta = {
  home: { title: 'L2M | Hub Financeiro Internacional no Rio de Janeiro', description: 'Hub financeiro internacional no Rio de Janeiro: câmbio consultivo, banking, BaaS e consultoria para operações internacionais, com segurança regulatória.' },
  cambio: { title: 'Câmbio Pronto, Futuro e Hedge Cambial para Empresas | L2M', description: 'Câmbio pronto, câmbio futuro, hedge cambial (trava e NDF) e trade finance com atendimento consultivo da L2M. Fale com a gente.' },
  banking: { title: 'Banking Internacional e BaaS: Conta e Escrow | L2M', description: 'Plataforma BaaS integrada ao Banco BS2, com conta digital, movimentação internacional, gestão financeira e conta escrow para operações internacionais.' },
  consultoria: { title: 'Consultoria em Câmbio e Capitais Estrangeiros | L2M', description: 'Consultoria em câmbio, registros no Banco Central (SCE-IED e SCE-Crédito), empréstimos externos, BaaS e regularização de operações internacionais.' },
  jeito: { title: 'Sobre a L2M | Consultoria em Câmbio e Estruturação Internacional', description: 'Conheça a L2M: mais de 10 anos de experiência em câmbio consultivo, banking e estruturação financeira internacional, com transparência e compliance regulatório.' },
};
