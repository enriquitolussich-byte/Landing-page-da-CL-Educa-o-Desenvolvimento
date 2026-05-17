# CL Educação & Desenvolvimento — Landing Page

Landing page em React + Vite para apresentar o serviço de orientação familiar de CL Educação & Desenvolvimento.

## 1) Instalar dependências

```bash
npm install
```

## 2) Rodar localmente

```bash
npm run dev
```

Acesse o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## 3) Build de produção

```bash
npm run build
```

## 4) Publicar na Vercel

1. Faça push do repositório no GitHub/GitLab/Bitbucket.
2. Na Vercel, clique em **Add New Project**.
3. Importe o repositório.
4. Framework Preset: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy.

## 5) Onde trocar links e textos principais

- **Links centralizados**: `src/constants.js`
  - WhatsApp
  - YouTube
  - Instagram
  - Substack
- **Textos da página**: `src/App.jsx`
- **Cores e estilos globais**: `src/styles.css`

## 6) Onde integrar formulário futuramente

O formulário está em `src/App.jsx` e hoje **somente valida e mostra confirmação inline**.

Integrações futuras sugeridas:
- Formspree
- Google Forms
- Typeform
- Make
- Zapier
- Backend próprio

Ponto recomendado para integração: função `handleSubmit` no componente principal (`src/App.jsx`).

## Observações

- O favicon atual é placeholder (`/favicon.ico`). Substitua o arquivo em `public/favicon.ico`.
- A página foi projetada para responsividade em celular, tablet e desktop.
