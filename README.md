# Bitaxus Community Manager Suite

Herramienta completa e interactiva para gestionar la comunidad de Bitaxus. Incluye brand kit, plan de contenido Q1 2025, guiones de moderación, templates y dashboards.

**Status:** Production Ready | **Version:** 1.0.0 | **Last Updated:** Agosto 2024

---

## 📋 Contenido

1. [Características](#características)
2. [Archivos del Proyecto](#archivos-del-proyecto)
3. [Instalación y Uso](#instalación-y-uso)
4. [Guía Rápida](#guía-rápida)
5. [Estructura de Datos](#estructura-de-datos)
6. [Contribución](#contribución)

---

## ✨ Características

### 🎨 Brand Kit Completo
- Paleta de colores oficial — Rojo primario (#D1232E), grises, neutrales
- Tipografía — Inter 400/500/600
- Tono de voz — Directo, conversacional, humano
- Guías de escritura — Estructura de blogs, reglas de oro

### 📅 Plan Trimestral Q1 2025
- 36 posts de redes — 3 por semana (LinkedIn, Instagram, Twitter/X)
- 3 blogs profundos — 1 por mes, 1200-1500 palabras
- 4 pilares de contenido — Dinero, seguridad, decisiones, historias
- Calendario detallado — Temas, hooks, CTAs por semana

### 💬 10 Guiones de Moderación
- Respuestas expandibles — Versiones corta y extendida
- Búsqueda interactiva — Encuentra respuestas al instante
- Temas cubiertos — SAGRILAFT, WhatsApp, comisiones, soporte
- Tono consistente — Educador, no vendedor

### 🎯 Herramientas para el Trabajo
- Interfaz web moderna — Dark mode, responsive, sin dependencias
- Navegación rápida — Sidebar sticky, enlaces directos
- **Calendario del Centro Editorial** — Vista de semana/mes con posts programados
- **Dashboard de Analytics** — Métricas, gráficos, importar CSV
- **Cheat Sheet** — Respuestas copiables para FAQ rápidas
- Exportar datos — JSON, CSV, Markdown
- Atajos de teclado — Búsqueda rápida, navigation

### 📊 Flujo Real Operativo
- **Lunes (45 min)** — Planificación: revisa fin de semana, programa 3 posts
- **Martes-Jueves (15-30 min)** — Moderación: responde FAQ, participa en conversaciones
- **Viernes (60 min)** — Análisis: reporta métricas, identifica patrones
- **Mensual** — Blog post de FAQ más frecuentes
- Ver `docs/WORKFLOW_PROCESS.md` para detalles completos

---

## 📁 Archivos del Proyecto

```
Redes_sociales/
├── bitaxus-cm-guide.html        # 🌟 Guía interactiva principal
├── README.md                     # Este archivo
├── calendar.json                 # Calendario Q1 en formato JSON
├── templates/
│   ├── weekly-report.md          # Template reporte semanal
│   ├── engagement-tracker.csv    # Tracker de engagement
│   ├── faq-log.md                # Log de FAQ
│   └── faq-responses.md          # Respuestas guardadas
├── docs/
│   ├── BRAND_KIT.md              # Detalles de marca
│   ├── MODERATION_GUIDE.md       # Guía de moderación
│   ├── WORKFLOW_PROCESS.md       # Flujo real semanal/diario
│   └── DEPLOYMENT.md             # Guía de deployment
└── dashboards/
    ├── cheat-sheet.html          # Referencia rápida (copy-paste)
    ├── calendar-view.html        # Calendario de contenido Q1
    └── analytics.html            # Dashboard de métricas
```

---

## 🚀 Instalación y Uso

### Opción 1: Usar Localmente (Recomendado)

```bash
# Clonar repositorio
git clone https://github.com/alejagoguti-cpu/Redes_sociales.git
cd Redes_sociales

# Abrir en navegador
open bitaxus-cm-guide.html
```

### Opción 2: GitHub Pages (En Línea)

Visita: `https://alejagoguti-cpu.github.io/Redes_sociales/bitaxus-cm-guide.html`

### Con Servidor Local

```bash
# Python 3
python -m http.server 8000

# Luego: http://localhost:8000/bitaxus-cm-guide.html
```

---

## 📖 Cómo Usar — Guía Rápida

### 🌟 Inicio Rápido
1. **Abre `bitaxus-cm-guide.html`** — Toda la información en un lugar
2. **Referencia: `dashboards/cheat-sheet.html`** — Respuestas copy-paste para FAQ
3. **Planificación: `editorial.html?view=calendar`** — Calendario de posts Q1
4. **Métricas: `dashboards/analytics.html`** — Trackea engagement y tendencias

### 📅 Lunes: Planificación (45 min)
1. Abre `editorial.html?view=calendar`
2. Identifica 3 posts de la semana
3. Adapta al tono Bitaxus (ver `docs/BRAND_KIT.md`)
4. Programa en Buffer/Later
5. Log en calendario local

### 💬 Martes-Jueves: Moderación (15-30 min/día)
1. Abre `dashboards/cheat-sheet.html`
2. Responde FAQ con respuestas del cheat sheet
3. Participa en conversaciones (educator stance)
4. Log en `templates/engagement-tracker.csv`
5. Guarda nuevas preguntas en `templates/faq-log.md`

### 📊 Viernes: Análisis (60 min)
1. Abre `dashboards/analytics.html`
2. Importa CSV del `engagement-tracker.csv`
3. Analiza métricas y tendencias
4. Completa `templates/weekly-report.md`
5. Identifica 1-2 temas para blog
6. Reporta a Ale con insights

**Ver `docs/WORKFLOW_PROCESS.md` para workflow completo con checklists y KPIs**

---

## 🎛️ Los 3 Dashboards

### 1️⃣ Cheat Sheet (`dashboards/cheat-sheet.html`)
**Para: Respuestas rápidas a preguntas frecuentes**
- 6 respuestas copiables: SAGRILAFT, WhatsApp, Comisiones, Comparaciones, Tiempos, Sin App
- Checkbox diario para tracking
- Atajos de teclado rápido
- FAQ categorizado por tipo
- Diseño optimizado para responder en vivo

### 2️⃣ Calendario del Centro Editorial (`editorial.html?view=calendar`)
**Para: Planificar y visualizar posts Q1**
- Vista por semana o mes
- Todos los 36 posts con detalles (pillar, tipo, contenido)
- Blogs programados por mes
- Estadísticas: posts totales, blogs, cobertura por semana
- Click en cada post para ver detalles completos

### 3️⃣ Analytics Dashboard (`dashboards/analytics.html`)
**Para: Medir engagement y ver tendencias**
- Importar datos CSV del tracker
- Métricas: posts, engagement rate, impresiones
- Breakdown por plataforma (LinkedIn, Instagram, Twitter)
- Gráficos de tendencias
- Exportar datos como JSON/CSV
- Filtrar por fecha y plataforma
- Identify mejor pillar y tipo de post

---

## 📊 Exportar Datos

### Desde Analytics Dashboard
- **Botones de exportación:** JSON, CSV
- **Upload CSV:** Importa tu tracker local
- **Print:** Presiona `Ctrl+P` para reporte imprimible

### Archivos de Datos
- `calendar.json` — Calendario Q1 completo (36 posts + 3 blogs)
- `templates/engagement-tracker.csv` — Template para importar en analytics
- `templates/weekly-report.md` — Template de reporte semanal
- `templates/faq-log.md` — Tracking de preguntas nuevas

---

## 🚀 Deployment

### GitHub Pages (Automático)
El repositorio está configurado para desplegarse automáticamente en:
`https://alejagoguti-cpu.github.io/Redes_sociales/`

### Servidor Local (Desarrollo)
```bash
# Python 3
python3 -m http.server 8000
# Luego: http://localhost:8000

# Node.js
npx http-server

# VSCode + Live Server extension
# Click derecho en archivo → "Open with Live Server"
```

Ver `docs/DEPLOYMENT.md` para más opciones (VPS, Nginx, Apache, custom domain)

---

## 🤝 Contribución

```bash
# Crear rama
git checkout -b feature/tu-idea

# Commit
git commit -m "feat: Add descripción"

# Push
git push origin feature/tu-idea

# Abre PR en GitHub
```

---

## 📞 Soporte

**Preguntas:**
- GitHub Issues
- Email: alejagoguti@gmail.com

**¿Listo para empezar?** Abre `bitaxus-cm-guide.html` ahora. 🚀

---

**Créditosः** Alejandra Torres (Aleja), CEO Bitaxus
**Desarrollado con:** Claude Code
**Versión:** 1.0.0 | Agosto 2024
