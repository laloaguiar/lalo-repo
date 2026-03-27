# Contexto de Sesión — Diego de la Mora · PAWLO
**Fecha:** 25 de marzo 2026
**Duración:** 60 minutos
**Consultor:** Eduardo Aguiar
**Cliente:** Diego de la Mora Villaseñor

---

## Negocio

| Campo | Detalle |
|-------|---------|
| Nombre | PAWLO |
| Servicio | Paseos con entrenamiento continuo para perros |
| Ciudad | Guadalajara, México |
| Instagram | @PAWLO_WALKS |
| Perros activos | 45 |
| Paseadores | 9 fijos (Alejandra, César, Diego M., Miguel, Memo, Andy, Wanda, Rodolfo, Gustavo) |
| Equipo adicional | 1 veterinario, 1 baños, 1 patín eléctrico, uniformes |
| Dashboard operativo | Connecteam |
| Meta semestral | 100 perros, entrenador fijo, planear Premios (snacks) y Hotel |

**Territorio de marca:** CONFIANZA
**Benchmark:** Pink Pup (editorial urban premium)
**Color primario:** #00BFA5 (teal) · Tipografía: Poppins

---

## Pilares del Servicio

1. Paseos con entrenamiento continuo (no solo paseos)
2. Geolocalización y reporte de salud en tiempo real
3. Facturación formal
4. Constancia y formalidad
5. Seguros

## Dolores que resuelve

- Servicio informal e inconsistente de la competencia
- Manadas grandes y estresantes
- Falta de entrenamiento real durante los paseos
- Ticket alto en entrenamiento sin resultados reales

---

## Arquitectura del Sistema Construido

```
Google Sheets (datos maestros)
        ↓
      n8n  ←── Claude Code genera los workflows
        ↓              ↓
  Connecteam      WhatsApp Business API
(agenda equipo,  (notificaciones a dueños
 GPS, turnos)     y paseadores)
```

---

## Estructura del Repo (pawlo-brain)

```
pawlo-brain/
├── CLAUDE.md                    ← Memoria del negocio (generado en sesión)
├── empresa/
│   ├── paquetes.md              ← Paquetes y precios
│   ├── empleados.md             ← 9 paseadores con zona y horario
│   └── zonas.md                 ← Colonias de cobertura GDL
├── clientes/
│   ├── README.md                ← Formato para nuevos perritos
│   ├── README-dueños.md         ← Formato para dueños
│   └── [nombre-paseador].md     ← Ficha individual por paseador
├── agenda/
│   └── semana-actual.md         ← Agenda de la semana activa
├── web/                         ← Archivos de página web
└── .claude/skills/
    └── contenido-video/
        └── SKILL.md             ← Skill para generar contenido + Creatomate
```

---

## Paseadores Reales (del Excel de Rutas)

| Nombre | Zona |
|--------|------|
| Alejandra | — |
| César | — |
| Diego M. | — |
| Miguel | — |
| Memo | — |
| Andy | — |
| Wanda | — |
| Rodolfo | — |
| Gustavo | — |

**Zonas sin cobertura identificadas:** Jardines del Sol, Minerva
**Perro sin paseador asignado:** Chispita / Vani / Güera (dueña: Ana Miriam)

---

## Lo Construido en Sesión

### 01 — CLAUDE.md (Memoria del negocio)
Archivo base con contexto completo de PAWLO. Todo agente lo lee primero.
Incluye: pilares, dolores, paseadores, zonas, reglas de operación, meta semestral.

### 02 — Fichas de paseadores
Una ficha `.md` por cada paseador en `clientes/` con zona, horario, capacidad máxima, perros asignados.

### 03 — Sistema de agendamiento (n8n workflow)
JSON listo para importar en n8n:
- Trigger: domingo 8pm
- Lee desde Google Sheets (`servicios-semana`)
- Aplica reglas: max perros/paseador, agrupación por zona, priorizar paseador habitual
- Crea turnos en **Connecteam** via API
- Envía WhatsApp a paseadores a las 7am

### 04 — Notificaciones WhatsApp (n8n)
- Agenda del día a cada paseador (7am)
- Recordatorio a dueños 1 hora antes del servicio
- Confirmación al dueño cuando el paseador reporta "listo"

### 05 — Skill de contenido con video (Creatomate)
`.claude/skills/contenido-video/SKILL.md` — genera captions, script de Reel y renderiza video.

**Credenciales Creatomate:**
- Endpoint: `https://api.creatomate.com/v2/renders`
- Template ID: `94227a16-91f4-40cd-9e81-b5f4a0b9d745`
- Campo editable: `Video-DHM.source`
- Bearer token: guardado en `.env` del proyecto

---

## Credenciales Pendientes de Conectar

| Servicio | Qué falta |
|----------|-----------|
| Google Sheets | Crear hoja `servicios-semana` + compartir Sheet ID a n8n |
| Connecteam | API Key del plan Business |
| WhatsApp Business API | Token de acceso (Meta for Developers) |
| Creatomate | Bearer token ya configurado en SKILL.md |

---

## Roadmap — Siguientes 5 Pasos

1. **Conectar Connecteam API** → activar workflow de agendamiento automático
2. **Configurar WhatsApp Business API** → activar notificaciones a paseadores y dueños
3. **Llenar Google Sheets con los 45 perritos** → datos reales para el agendador
4. **Subir video real a Cloudinary** → re-renderizar template de Creatomate con video de PAWLO
5. **Crear formulario de onboarding** → nuevo perrito → ficha automática → asignación → bienvenida

---

## Notas de la Sesión

- Diego trabaja con Connecteam como dashboard operativo en tiempo real (referencia video)
- El Excel de rutas tenía nombres de perros (Bayley, Dafne, Chimo) mezclados con paseadores — ya corregido en `empleados.md`
- Chispita/Vani/Güera (Ana Miriam) quedó pendiente de asignar al paseador con menor carga en su zona
- Video de Creatomate renderizó con template de ejemplo — necesita clip real del iPhone de Diego

---

*Eduardo Aguiar · Consultoría en Automatización & IA*
