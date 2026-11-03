# Variáveis da Netlify — L2M Financial Solutions

Configure estas variáveis em **Netlify → Site configuration → Environment variables**. Os valores server-side não devem ser colocados no GitHub, no frontend, no `index.html` ou em mensagens públicas.

```env
NODE_VERSION=20
SUPABASE_URL=<URL do projeto Supabase, configurada somente no painel privado da Netlify>
SUPABASE_SERVICE_ROLE_KEY=<cole aqui uma nova service role key rotacionada, somente no painel privado da Netlify>
```

A função `netlify/functions/contact.js` usa `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY` exclusivamente no servidor para inserir registros em `public.contact_submissions`. A chave publishable não é necessária para esta implementação porque o navegador não acessa o banco diretamente.

Antes de configurar produção, revogue o token do GitHub e as chaves Supabase que foram expostos na conversa e gere novos valores. Não adicione `GITHUB_TOKEN` às variáveis de runtime da Netlify: ele foi usado apenas para o push inicial e não é necessário para o site publicado.

## Build do site

- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`
- Node: `20`

Depois de colar as variáveis privadas no painel, conecte o repositório `SlimelabApezato/l2msite` e publique a branch `main`.
