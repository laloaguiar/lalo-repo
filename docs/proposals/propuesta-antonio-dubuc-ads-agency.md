# BULLGROUND — Propuesta de Asesoria

---

**Cliente:** Antonio Dubuc & Socio
**Servicio:** Asesoria 1:1 en Claude Code, GitHub & Automatizaciones para Agencia de Ads
**Duracion:** 60 minutos
**Inversion:** $199 USD
**Formato:** Videollamada en vivo + implementacion en tiempo real

---

## Contexto

Antonio opera una agencia de ads y esta explorando Claude Code por su cuenta. Necesita a alguien con experiencia real implementando estas herramientas para acelerar su curva de aprendizaje y salir de la sesion con sistemas funcionales, no solo teoria.

---

## Que Vamos a Hacer en la Sesion

### 1. Setup & Fundamentos (10 min)
- Configuracion correcta de Claude Code + GitHub para su agencia
- Estructura de repositorios para manejar multiples clientes
- Como usar skills y hooks para estandarizar procesos repetitivos

### 2. Apify para Research de Ads (10 min)
- Configurar actors de Apify para scraping de Meta Ad Library y Google Ads Transparency
- Extraer datos de competencia de sus clientes automaticamente
- Conectar Apify con n8n para que los datos fluyan sin intervencion manual

### 3. Creacion de Anuncios Automatizados (15 min)
- Pipeline: brief del cliente → Claude genera variantes de copy → formatea para Google Ads y Meta Ads
- Conexion con Google Ads API y Meta Marketing API via n8n
- Workflow para generar y subir variantes de anuncios en lote

### 4. Agente de Reportes Semanales en PDF (15 min)
- Construir un workflow en n8n que cada lunes a las 8am:
  - Extraiga metricas de Google Ads y Meta Ads (CTR, CPA, ROAS, conversiones, gasto)
  - Genere un PDF con formato profesional personalizado por cliente
  - Lo deposite en la carpeta correcta (Google Drive / carpeta local)
  - Opcionalmente envie notificacion por email o Slack
- Template de reporte reutilizable para todos sus clientes

### 5. Casos de Uso Avanzados & Roadmap (10 min)
- Skill de Claude Code para generar briefs creativos desde datos de performance
- Agente que detecte campanas con bajo rendimiento y sugiera optimizaciones
- Automatizacion de onboarding de nuevos clientes (formulario → carpetas → accesos → primer reporte)
- Scraping de landing pages de competencia con Apify para analisis
- Bot de Slack/WhatsApp que responda preguntas sobre performance de campanas en tiempo real

---

## Que Se Lleva Antonio

| Entregable | Detalle |
|---|---|
| Repo configurado | GitHub listo con estructura para su agencia |
| Apify funcional | Actor configurado para scraping de ad libraries |
| Pipeline de ads | Workflow n8n: brief → copy → publicacion |
| Reporte PDF automatico | Workflow n8n con schedule cada lunes 8am |
| Skills de Claude Code | Skills personalizadas para su flujo de trabajo |
| Grabacion de la sesion | Para referencia futura de el y su socio |
| Roadmap de automatizaciones | Lista priorizada de siguientes pasos |

---

## Inversion

| Concepto | Precio |
|---|---|
| Asesoria 1:1 (60 min) con implementacion en vivo | **$199 USD** |

**Forma de pago:** Transferencia, Zelle, PayPal o Stripe — antes de la sesion.

---

## Por Que Bullground

No es una clase teorica. Es una sesion donde implementamos juntos, en tu pantalla, con tus cuentas, y sales con sistemas funcionando. Lo que normalmente toma semanas de prueba y error, lo resolvemos en 60 minutos porque ya lo hemos construido y probado.

---

## Siguiente Paso

Confirmar fecha y hora de la sesion. Antonio necesita tener listo antes de la llamada:

- [ ] Cuenta de GitHub activa
- [ ] Claude Code instalado (o acceso a claude.ai)
- [ ] Acceso a sus cuentas de Google Ads y Meta Ads (API keys o acceso de admin)
- [ ] Cuenta de Apify (plan free funciona para empezar)
- [ ] n8n instalado o cuenta en n8n.cloud

---

*Bullground — Clarity before wealth.*
