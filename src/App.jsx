import { useState } from 'react'

function CheckIcon() {
  return (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
      <path
        d="M1 4L3.5 6.5L9 1"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function App() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const isValid = nombre.trim() !== '' && email.trim() !== '' && agreed

  function handleSubmit(e) {
    e.preventDefault()
    if (!isValid) return
    setSubmitted(true)
  }

  return (
    <div className="page">
      <main className="container">

        {/* ── LEFT PANEL ── */}
        <section className="left-panel" aria-label="Brand">
          <div className="card-wrapper">
            <img
              src="/assets/asset-33.jpg"
              alt="BullGround — King of Diamonds"
              className="king-card"
            />
          </div>
          <p className="tagline">
            <strong>clarity</strong>
            <br />
            before wealth.
          </p>
        </section>

        {/* ── RIGHT PANEL ── */}
        <section className="right-panel" aria-label="Registro">
          {submitted ? (
            <div className="success-wrapper">
              <p className="brand-name">BullGround</p>
              <p className="success-title">¡Bienvenido, Grounder!</p>
              <p className="description">
                Revisaremos tu información y nos pondremos en contacto contigo pronto.
              </p>
            </div>
          ) : (
            <div className="form-wrapper">
              <p className="brand-name">BullGround</p>
              <p className="subtitle">Bienvenido de vuelta</p>
              <p className="description">
                Ingresa tus datos para unirte a la comunidad de Grounders
              </p>

              <form className="form" onSubmit={handleSubmit} noValidate>

                {/* Nombre */}
                <div className="field-group">
                  <label className="field-label" htmlFor="nombre">
                    NOMBRE <span className="required">*</span>
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    className="field-input"
                    placeholder="Nombre Completo"
                    autoComplete="name"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="field-group">
                  <label className="field-label" htmlFor="email">
                    EMAIL <span className="required">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="field-input"
                    placeholder="tu@email.com"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Separator */}
                <div className="form-rule" />

                {/* Checkbox */}
                <div className="checkbox-group">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={agreed}
                    className={`checkbox-box${agreed ? ' is-checked' : ''}`}
                    onClick={() => setAgreed(!agreed)}
                  >
                    {agreed && <CheckIcon />}
                  </button>
                  <p className="checkbox-text">
                    Acepto que Bullground me contacte por email, teléfono o texto.
                    Entiendo que este contenido es educativo, no asesoría
                    personalizada, y acepto la{' '}
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      Política de Privacidad
                    </a>{' '}
                    y los{' '}
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      Términos de Servicio
                    </a>
                    .
                  </p>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={!isValid}
                >
                  Registrarme
                </button>
              </form>

              <p className="alt-link">
                ¿Ya tienes cuenta?{' '}
                <button
                  type="button"
                  className="alt-link-btn"
                  onClick={() => {}}
                >
                  Inicia sesión
                </button>
              </p>
            </div>
          )}
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-rule" aria-hidden="true" />
          <img
            src="/assets/bull-black.svg"
            alt="BullGround"
            className="footer-bull"
          />
          <div className="footer-rule" aria-hidden="true" />
        </div>
      </footer>
    </div>
  )
}
