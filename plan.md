# Plano de implementação — L2M Financial Solutions

## Escopo
Site institucional multipágina para a L2M Financial Solutions, com conteúdo final fornecido em `02_Conteúdo_Para_o_site`, identidade visual oficial e prompt como contrato de produto.

## Design Read
- Artefato: site institucional multipágina.
- Público: empresas, grupos econômicos, holdings e investidores estrangeiros.
- Linguagem visual: financeiro premium, institucional, tecnológico e consultivo.
- Modo: greenfield com identidade de marca existente.
- Variação visual: 5/10.
- Intensidade de movimento: 2/10.
- Densidade de informação: 7/10.
- Dependência de assets: 8/10.
- Fidelidade de marca: 10/10.

## Design system
- Movimento: editorial financeiro premium, com superfícies off-white, azul profundo e verde institucional.
- Princípios: clareza, confiança, precisão regulatória e sofisticação discreta.
- Paleta: azul escuro `#002753`, azul claro `#98C4CF`, off-white `#F0EBE1`, verde escuro `#005443`, verde claro `#B5DCB7`, bege `#FFDAA2`, caramelo `#CD733A`, preto institucional `#000F24`.
- Tipografia: Prime Regular para títulos e Prime Light para textos; sans-serif de sistema para apoio técnico.
- Espaçamento: base de 8px, com seções amplas e ritmo editorial.
- Bordas: cantos médios, sem excesso de arredondamento.
- Navegação: cabeçalho frost glass blur médio, legível em qualquer tema.
- Tema: claro/escuro global, com tokens para superfícies, textos, botões, ícones e bordas.
- Movimento: transições discretas; carrosséis suaves; pulso quase transparente no WhatsApp.

## Arquitetura
- `/` e `/home`: Home com hero, processo, serviços, prova social e CTA.
- `/cambio`: câmbio pronto, futuro, hedge, trava, NDF, trade finance e FAQ.
- `/banking`: produtos, BaaS, produtos customizados, escrow, login BS2 e FAQ.
- `/consultoria`: cinco verticais, 13 frentes, contratação e FAQ.
- `/jeito-l2m`: quem somos, missão, visão, história, valores e formulário.

## Implementação
- React + Vite, com rotas leves via History API e code splitting por página.
- CSS próprio com tokens da marca; sem dependência visual desnecessária.
- Assets reais otimizados em `public/assets`.
- Formulário preparado para endpoint server-side e Supabase via variáveis de ambiente; sem secrets versionados.
- SEO por rota, `sitemap.xml`, `robots.txt`, `llms.txt` e `manus-routes.json`.
- Validação de campos, honeypot, limite de tamanho, mensagens de erro e estados de envio.
- Cabeçalhos de segurança e cache configurados no servidor/deploy.
- SQL único em `supabase/schema.sql` com tabela de contatos, RLS e índices.

## Voz da marca
- Posicionamento: hub financeiro internacional para quem precisa mover capital com clareza, segurança regulatória e acompanhamento consultivo.
- Personalidade: preciso, seguro e próximo.
- CTA: “Falar no WhatsApp”, “Conhecer os serviços”, “Vamos estruturar isso”.

## Entrega
O repositório GitHub será a fonte oficial dos arquivos. A versão gerenciada será usada para preview e checkpoint; a hospedagem final será feita pelo fluxo GitHub/Netlify, sem incorporar tokens ou chaves privadas ao código.
