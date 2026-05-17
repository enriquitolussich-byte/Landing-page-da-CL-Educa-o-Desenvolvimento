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

## 3) Build e preview local

```bash
npm run build
npm run preview
```

## 4) Publicação no GitHub Pages

A publicação está automatizada com GitHub Actions no arquivo `.github/workflows/deploy.yml`.

### Pré-requisitos no repositório

1. Em **Settings > Pages**, configure **Build and deployment** como **GitHub Actions**.
2. Garanta que a branch principal seja `main`.

### Como publicar

1. Faça commit e push para a branch `main`.
2. O workflow irá:
   - instalar dependências com `npm ci`;
   - executar `npm run build`;
   - publicar a pasta `dist` no GitHub Pages com actions oficiais.

URL final esperada:

- https://enriquitolussich-byte.github.io/Landing-page-da-CL-Educa-o-Desenvolvimento/

## 5) WhatsApp da landing page

- Link base: `https://wa.me/5511970672708`
- A landing também envia mensagem inicial automática:
  - "Olá, vim pela landing page da CL Educação & Desenvolvimento e gostaria de saber mais sobre a orientação para famílias."

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
