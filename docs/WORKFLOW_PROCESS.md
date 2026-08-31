# FLUJO DE TRABAJO REAL — Community Manager Bitaxus

Documento operativo: qué hacer, cuándo, cómo y por qué.

---

## 📊 VISTA GENERAL DEL PROCESO

```
LUNES (Planificación)
    ↓
MARTES-JUEVES (Ejecución)
    ↓
VIERNES (Análisis & Planeación siguiente)
    ↓
REPETIR
```

---

## 📅 LUNES: DÍA DE PLANIFICACIÓN (30-45 min)

### 09:00 — Revisión de Fin de Semana (15 min)
**Qué hacer:**
- Abre `bitaxus-cm-guide.html`
- Revisa comentarios del viernes/sábado/domingo
- Prioriza preguntas sin responder
- Log de urgencia en `templates/faq-log.md`

**Preguntas que debes responder:**
- ¿Hay preguntas nuevas que no conocía?
- ¿Hay patrones emergentes?
- ¿Hay problemas urgentes?

---

### 09:15 — Programa 3 Posts (20 min)

**Paso 1: Abre la Guía**
```
Abre: bitaxus-cm-guide.html
Ve a: ENERO → Semana X
Copia: Los 3 posts de la semana
```

**Paso 2: Adapta al Tono**
- LinkedIn (Narrativo): Expande con tu voz
- Instagram (Visual): Crea caption + adjunta foto/gráfico
- Twitter (Conciso): Resume en 6 tweets

**Paso 3: Programa**
- Usa Buffer, Later, o Meta Business Suite
- LinkedIn: Lunes 9:00 AM
- Instagram: Miércoles 10:00 AM
- Twitter: Viernes 2:00 PM

**Archivo de Control:**
Log en `templates/content-calendar.csv`:
```
Date | Platform | Post Title | Status | Link | Notes
2025-01-06 | LinkedIn | "Te pagaron en dólares" | Scheduled | buffer.com/... | Personal hook
```

---

### 09:35 — Identifica Tema de Blog (10 min)

**Revisa Preguntas:**
- ¿5+ personas preguntaron lo mismo?
- ¿Es tema que aparece en FAQ log?

**Resultado:**
- Sí → Agrega a `blog-ideas.md` para próxima semana
- No → Continúa

---

## 📌 MARTES-JUEVES: DÍA DE EJECUCIÓN (15-30 min/día)

### Mañana (10:00-10:30)
**1. Revisa Alertas**
- Nuevos comentarios en LinkedIn
- Nuevas preguntas en Instagram DMs
- Menciones en Twitter

**2. Responde Rápido (< 2 min)**
Para preguntas en FAQ log existente:
- Busca pregunta con `Ctrl+F`
- Copia respuesta
- Adapta ligeramente
- Responde en plataforma

**Archivo:** Log en `templates/faq-log.md`:
```
[Fecha] — Pregunta: [Tema]
Asked by: @username
Platform: LinkedIn
Response: [Tu respuesta]
Status: ✓ Answered
Frequency: Pregunta #3 esta semana
```

---

### Tarde (14:00-14:30)
**1. Participa en Conversaciones**
- NO solo responder FAQs
- Participa en threads
- Valida a usuarios que comparten éxitos
- Reacciona a contenido relevante

**Ejemplo:**
```
Usuario: "Acabo de recibir dinero por Bitaxus, llegó en 24h!"
Tu respuesta: "Eso es 🔥 Exacto, ese es el punto. 
Sin sorpresas, sin demoras. 
¿Cuánto tiempo esperabas normalmente?"
```

**Archivo:** Log en `templates/engagement-tracker.csv`:
```
Date | Platform | Interaction Type | User | Engagement Type | Notes
2025-01-15 | LinkedIn | Comment reply | @usuario | Validation | Shared success story
```

---

### Noche (18:00-18:15)
**1. Checklist de Cierre**
```
☑ ¿Respondí todas las preguntas del día?
☑ ¿Logueé preguntas nuevas?
☑ ¿Identifiqué patrones?
☑ ¿Participé (no solo vendí)?
```

**2. Prepara para Mañana**
- Revisa qué posts se publicaron hoy
- Nota engagement inicial
- Planifica respuesta a comentarios de mañana

---

## 🎯 VIERNES: DÍA DE ANÁLISIS (60 min)

### 09:00 — Recolecta Datos (20 min)

**LinkedIn:**
- Posts publicados: [X]
- Engagement total: [X] (likes + comments + shares)
- Mejor post: [Título]
- Rate: [X]%

**Instagram:**
- Posts publicados: [X]
- Impressions: [X]
- Saves: [X]
- Rate: [X]%

**Twitter:**
- Tweets publicados: [X]
- Impressions: [X]
- Retweets: [X]
- Rate: [X]%

**Template:** Completa `templates/weekly-report.md`

---

### 09:20 — Analiza Preguntas (15 min)

**Preguntas por Categoría:**
```
SEGURIDAD (4 preguntas)
├─ SAGRILAFT/Validaciones (2)
├─ WhatsApp seguro (1)
└─ Verificar canal oficial (1)

PRECIO (3 preguntas)
├─ Comisión (2)
└─ Comparación (1)

TIEMPOS (2 preguntas)
```

**Pregunta Clave:** "¿Hay 1 tema que 5+ personas preguntaron?"

**Si SÍ → Blog Post Next Week**
```
Tema identificado: [X]
Veces preguntado: [X]
Blog post propuesto: [Título]
Sección en guía actual: [Link]
```

---

### 09:35 — Identifica Insights (15 min)

**Qué es un Insight:**
- Patrón que NO esperabas
- Oportunidad de mejora
- Punto fuerte que queremos explotar

**Ejemplos:**
```
✓ INSIGHT POSITIVO:
"Post sobre 'Las 6 preguntas' tuvo 42 comments.
Usuario decía: 'Nunca me lo habían explicado así'.
Oportunidad: Hacer más contenido tipo 'antes/después' de ideas"

✗ INSIGHT NEGATIVO:
"3 personas preguntaron si hay app requerida.
Parecería que mensaje no es claro.
Oportunidad: Clarificar en website/bio que NO requiere app"
```

**Template:** Completa en `weekly-report.md`:
```
### ✨ LO QUE FUNCIONÓ
- Insight 1: [Descriu]
- Insight 2: [Descriu]

### ❌ LO QUE QUEDÓ
- Issue 1: [Descriu]
- Issue 2: [Descriu]
```

---

### 09:50 — Reporta a Ale (10 min)

**Formato:**
```
SEMANA 1 | Community Report
---------

📊 NÚMEROS
- Total posts: 3
- Total engagement: 589
- Rate promedio: 5.2%

💬 TOP PREGUNTAS
1. SAGRILAFT (4 veces) → Blog post idea
2. Tiempos de envío (3 veces) → Update FAQ
3. Comparación con X (2 veces) → Monitor

✨ INSIGHT
Post "Las 6 preguntas" resonó mucho (42 comments).
Usuarios dicen: "Nunca me lo habían explicado así"
→ Hacer más contenido tipo "Educación vs Venta"

❌ BLOCKER
Algunos confused sobre si app es requerida.
Clarificar en website + próximo post

🎯 PRÓXIMA SEMANA
- 3 posts programados: [Títulos]
- Blog: "SAGRILAFT explicado" (de pregunta recurrente)
- Focus: Educación + validaciones
```

---

## 📈 KPIs SEMANALES

Track estos números:

| KPI | Meta | Semana 1 | Semana 2 | Semana 3 |
|-----|------|----------|----------|----------|
| Posts Publicados | 3 | 3 | 3 | 3 |
| Engagement Rate Promedio | 4%+ | 5.2% | 4.8% | 6.1% |
| Preguntas Respondidas | 95%+ | 100% | 98% | 100% |
| Patrones Identificados | 2-3/week | 3 | 2 | 3 |
| Blog Ideas | 1-2/week | 1 | 2 | 1 |
| Community Growth | 2-3%/week | 2.1% | 2.8% | 3.2% |

---

## 📱 HERRAMIENTAS QUE USAS

### Durante Semana
- **Guía Principal:** `bitaxus-cm-guide.html` (respuestas)
- **Templates:** En `templates/` (trackear)
- **Buffers:** Buffer/Later (programar)

### Fin de Semana
- **Report Template:** `templates/weekly-report.md` (completar)
- **Tracker:** `templates/engagement-tracker.csv` (metrics)
- **FAQ Log:** `templates/faq-log.md` (preguntas)

---

## 🎨 FLUJO VISUAL

```
SEMANA

┌─────────────────────────────────┐
│ LUNES (45 min)                  │
│ ✓ Review fin de semana          │
│ ✓ Programa 3 posts (Buffer)     │
│ ✓ Identifica tema de blog       │
└──────────────┬──────────────────┘
               │
    ┌──────────┴──────────┬──────────────┐
    │                     │              │
┌───▼────┐         ┌──────▼──┐      ┌────▼────┐
│MARTES  │         │WEDNESDAY│      │THURSDAY │
│(15min) │         │ (15min) │      │ (15min) │
│        │         │         │      │         │
│ ✓ FAQ  │         │ ✓ FAQ   │      │ ✓ FAQ   │
│ ✓ Chat │         │ ✓ Chat  │      │ ✓ Chat  │
│ ✓ Log  │         │ ✓ Log   │      │ ✓ Log   │
└────────┘         └─────────┘      └────────┘
    │                     │              │
    └──────────────┬──────────────┬──────┘
                   │              │
            ┌──────▼──────────────▼──────┐
            │ VIERNES (60 min)           │
            │ ✓ Recolecta datos          │
            │ ✓ Analiza preguntas        │
            │ ✓ Identifica insights      │
            │ ✓ Reporta a Ale            │
            │ ✓ Planifica próxima semana │
            └────────────────────────────┘
```

---

## 📋 CHECKLIST DIARIO

```
MARTES-JUEVES (15:00)
☐ ¿Respondí FAQs del día?
☐ ¿Participé (no solo vendí)?
☐ ¿Logueé preguntas nuevas?
☐ ¿Identifiqué patrones?

VIERNES (10:00)
☐ ¿Recolecté datos de las 3 plataformas?
☐ ¿Completé weekly report?
☐ ¿Identifiqué 2-3 insights?
☐ ¿Encontré tema para blog si aplica?
☐ ¿Reporté a Ale?
```

---

## 🔄 CICLO MENSUAL

**Semana 1-3:** Ejecuta proceso arriba

**Semana 4 (Fin de Mes):**
- Resumen de mes
- Comparar KPIs vs meta
- Ajustar estrategia si aplica
- Planificar mes siguiente

---

**Última Actualización:** Agosto 2024
**Versión:** 1.0.0
**Status:** OPERATIVO
