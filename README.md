# Portfólio + Blog Técnico com Astro

Site estático moderno para portfólio pessoal e blog técnico, com suporte bilíngue (`pt-BR` e `en`) e deploy no GitHub Pages.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Markdown/MDX (Content Collections)
- GitHub Actions + GitHub Pages

## Estrutura de pastas

```text
src/
  components/
  content/
    blog/
      pt/
      en/
  data/
  i18n/
  layouts/
  pages/
    [lang]/
      blog/
  styles/
  utils/
```

## Instalação

```bash
npm install
```

## Executar localmente

```bash
npm run dev
```

Aplicação disponível em `http://localhost:4321`.

## Build de produção

```bash
npm run build
```

Saída gerada em `dist/`.

## Internacionalização

- Idiomas: `pt` (padrão) e `en`
- Rotas:
  - `/pt/`
  - `/en/`
- Traduções de interface:
  - `src/i18n/pt.ts`
  - `src/i18n/en.ts`

## Blog com Content Collections

Schema em `src/content/config.ts` com os campos:

- `title`
- `description`
- `date`
- `tags`
- `lang`
- `draft`

Posts em:

- `src/content/blog/pt/`
- `src/content/blog/en/`

## Deploy no GitHub Pages

Workflow: `.github/workflows/deploy.yml`.

Ele:

1. Instala dependências.
2. Faz build Astro.
3. Publica `dist/` no GitHub Pages.

### Base path (importante)

Ajuste em `astro.config.mjs`:

```js
const base = process.env.BASE_PATH ?? "/";
```

- Repositório de projeto (`https://usuario.github.io/repositorio/`): use `BASE_PATH=/repositorio/`
- User site (`https://usuario.github.io/`): use `BASE_PATH=/`

No workflow isso já é calculado automaticamente com base no nome do repositório.

## Personalização rápida

- Dados pessoais: `src/data/profile.ts`
- Projetos: `src/data/projects.ts`
- Textos da UI: `src/i18n/pt.ts` e `src/i18n/en.ts`
- Tema global: `src/styles/global.css` e `tailwind.config.mjs`
