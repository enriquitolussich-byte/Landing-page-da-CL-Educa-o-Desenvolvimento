import { useState } from 'react'
import { CONTACT_LINKS } from './constants'

const faqItems = [
  {
    q: 'Quantos encontros são necessários?',
    a: 'Depende da complexidade da situação. A maioria das famílias resolve em dois a três encontros. Casos mais complexos podem exigir mais. Isso é definido na triagem inicial, sem compromisso.',
  },
  { q: 'Os encontros são presenciais ou online?', a: 'Os encontros são realizados online, por videochamada, em horário combinado.' },
  {
    q: 'Cleonice Lussich pode falar com a escola por mim?',
    a: 'A orientação prepara você para conduzir essa conversa com clareza e segurança. Cleonice não representa a família perante a escola.',
  },
  {
    q: 'Preciso ter um laudo para solicitar a orientação?',
    a: 'Não. Muitas famílias chegam exatamente porque ainda não têm laudo e precisam entender o processo.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Os valores e formas de pagamento são informados após a triagem inicial, de acordo com a situação e a modalidade escolhida.',
  },
]

export default function App() {
  const [openFaq, setOpenFaq] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    // Formulário pronto para integração futura (Formspree, Google Forms, Typeform, Make, Zapier ou backend próprio).
    // Neste momento NÃO envia dados para e-mail, banco, CRM ou WhatsApp.
    setSubmitted(true)
    form.reset()
  }

  return (
    <>
      <header className="site-header">
        <div>
          <p className="brand">CL Educação & Desenvolvimento</p>
          <p className="subtitle">por Cleonice Lussich</p>
        </div>
        <a className="btn" href={CONTACT_LINKS.whatsapp} target="_blank" rel="noopener">
          Falar no WhatsApp
        </a>
      </header>

      <main>
        <section className="hero" id="topo">
          <h1>Você toma decisões sobre a vida escolar do seu filho sem ter as informações certas.</h1>
          <p>Orientação especializada para pais que precisam entender o que está acontecendo — e o que fazer a respeito.</p>
          <a className="btn" href={CONTACT_LINKS.whatsapp} target="_blank" rel="noopener">Quero entender minha situação</a>
          <a className="text-link" href="#orientacao">Saiba mais sobre o serviço ↓</a>
        </section>

        <section id="orientacao" className="section centered-text">
          <h2>O que é a orientação familiar</h2>
          <p>
            A orientação familiar é um espaço estruturado de análise e direcionamento — não é terapia, não é consultoria jurídica e não substitui o acompanhamento clínico do seu filho. É um processo de trabalho em que você entende a situação com clareza, organiza as decisões que precisam ser tomadas e recebe direção técnica baseada em legislação educacional, desenvolvimento infantil e neurociência aplicada.
          </p>
        </section>

        <section className="section alt-bg">
          <h2>O que você recebe</h2>
          <div className="cards">
            {['Análise da situação escolar atual do seu filho.','Leitura dos documentos e laudos, quando existentes.','Direcionamento sobre direitos, obrigações da escola e próximos passos.','Orientação sobre como conduzir reuniões e negociações com a escola.','Registro escrito do que foi discutido e das direções indicadas.'].map((item) => (
              <article key={item} className="card"><span aria-hidden="true">✓</span><p>{item}</p></article>
            ))}
          </div>
          <p className="note">A orientação não inclui diagnóstico, laudo clínico, representação legal ou plano terapêutico.</p>
        </section>

        <section className="section">
          <h2>Para quem é este serviço</h2>
          <div className="columns">
            <article className="audience yes"><h3>Para quem é</h3><ul><li>Pais com filhos em processo de avaliação ou reavaliação escolar.</li><li>Famílias que enfrentam conflito com a escola sobre inclusão ou adaptação.</li><li>Pais que receberam um laudo e não sabem o que fazer com ele.</li><li>Famílias em transição escolar, como mudança de escola, mudança de cidade ou mudança de país.</li><li>Pais que precisam tomar decisões escolares importantes e não têm referência técnica.</li></ul></article>
            <article className="audience no"><h3>Para quem não é</h3><ul><li>Quem busca diagnóstico ou laudo clínico.</li><li>Quem precisa de representação jurídica.</li><li>Quem busca sessões de terapia ou acompanhamento psicológico.</li><li>Quem precisa de tutoria ou reforço escolar para o filho.</li></ul></article>
          </div>
        </section>

        <section className="section alt-bg" id="faq">
          <h2>Perguntas frequentes</h2>
          <div className="faq-list">
            {faqItems.map((item, idx) => {
              const isOpen = idx === openFaq
              return (
                <article key={item.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <h3>
                    <button
                      type="button"
                      className="faq-btn"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                      id={`faq-button-${idx}`}
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    >
                      {item.q}
                    </button>
                  </h3>
                  <div id={`faq-panel-${idx}`} role="region" aria-labelledby={`faq-button-${idx}`} hidden={!isOpen}>
                    <p>{item.a}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="whatsapp-cta section">
          <h2>Pronto para entender sua situação?</h2>
          <p>O primeiro passo é uma triagem inicial sem custo e sem compromisso.</p>
          <a className="btn white" href={CONTACT_LINKS.whatsapp} target="_blank" rel="noopener"><span aria-hidden="true">☎</span> Falar com Cleonice no WhatsApp</a>
        </section>

        <section className="section form-section">
          <h2>Prefere começar pelo formulário?</h2>
          <p>Preencha abaixo. Sua solicitação será analisada e o retorno ocorrerá conforme disponibilidade de agenda.</p>
          <form noValidate onSubmit={handleSubmit}>
            <label>Nome completo<input required name="nome" type="text" /></label>
            <label>E-mail<input required name="email" type="email" /></label>
            <label>Telefone com WhatsApp<input required name="telefone" type="tel" /></label>
            <label>Cidade e estado<input required name="cidade" type="text" /></label>
            <label>Idade do filho<select required name="idade" defaultValue=""><option value="" disabled>Selecione</option><option>até 6 anos</option><option>7 a 12 anos</option><option>13 a 17 anos</option><option>18 anos ou mais</option></select></label>
            <label>Qual é a situação principal<textarea required name="situacao" placeholder="Descreva brevemente o que está acontecendo. Não é necessário compartilhar dados clínicos neste momento." rows="5" /></label>
            <label>Como conheceu o serviço<select required name="origem" defaultValue=""><option value="" disabled>Selecione</option><option>YouTube</option><option>Instagram</option><option>Indicação</option><option>Google</option><option>Outro</option></select></label>
            <button className="btn full" type="submit">Enviar triagem</button>
            <p className="privacy">Seus dados não serão compartilhados com terceiros. Este formulário é apenas o primeiro passo — não gera nenhum compromisso.</p>
            {submitted && <p className="success" role="status">Recebemos sua triagem. A solicitação será analisada e o retorno ocorrerá conforme disponibilidade de agenda.</p>}
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <p className="brand">CL Educação & Desenvolvimento</p>
          <p className="subtitle">por Cleonice Lussich</p>
          <nav aria-label="Redes sociais">
            <a href={CONTACT_LINKS.youtube}>YouTube</a>
            <span>|</span>
            <a href={CONTACT_LINKS.instagram}>Instagram</a>
            <span>|</span>
            <a href={CONTACT_LINKS.substack}>Substack</a>
          </nav>
          <p className="copyright">© 2026 CL Educação & Desenvolvimento. Este site não oferece diagnóstico, laudo clínico ou representação jurídica.</p>
        </div>
        <div className="footer-bar" aria-hidden="true" />
      </footer>
    </>
  )
}
