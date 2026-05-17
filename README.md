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

## 4) Preview local do build

```bash
npm run preview
```

## 5) Publicar no GitHub Pages

Este projeto está configurado para publicar automaticamente no GitHub Pages via GitHub Actions.

### Pré-requisitos no GitHub

1. Vá em **Settings > Pages** do repositório.
2. Em **Build and deployment**, selecione **Source: GitHub Actions**.
3. Garanta que a branch principal seja `main`.

### Como publicar

1. Faça commit das alterações.
2. Faça push para a branch `main`.
3. O workflow `.github/workflows/deploy.yml` irá:
   - instalar dependências
   - executar `npm run build`
   - publicar `dist` no GitHub Pages

URL esperada de publicação:

`https://enriquitolussich-byte.github.io/Landing-page-da-CL-Educa-o-Desenvolvimento/`

## 6) Onde trocar links e textos principais

- **Links centralizados**: `src/constants.js`
  - WhatsApp
  - YouTube
  - Instagram
  - Substack
- **Textos da página**: `src/App.jsx`
- **Cores e estilos globais**: `src/styles.css`

## 7) Onde integrar formulário futuramente

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
