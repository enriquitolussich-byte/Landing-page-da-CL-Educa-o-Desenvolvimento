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

      - name: Setup Node.js
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
