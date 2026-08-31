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
- Exportar datos — JSON, CSV, Markdown
- Atajos de teclado — Búsqueda rápida, navigation

---

## 📁 Archivos del Proyecto

```
Redes_sociales/
├── bitaxus-cm-guide.html        # 🌟 Guía interactiva principal
├── README.md                     # Este archivo
├── calendar.json                 # Calendario Q1 en formato JSON
├── templates/
│   ├── weekly-report.csv         # Template reporte semanal
│   ├── engagement-tracker.xlsx   # Tracker de engagement
│   ├── content-calendar.csv      # Calendario de contenido
│   └── insights-sheet.xlsx       # Hoja de insights
├── docs/
│   ├── BRAND_KIT.md              # Detalles de marca
│   ├── CONTENT_STRATEGY.md       # Estrategia de contenido
│   └── MODERATION_GUIDE.md       # Guía de moderación
└── dashboards/
    ├── analytics.html            # Métricas y analytics
    └── cheat-sheet.html          # Referencia rápida
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

## 📖 Flujo de Trabajo Semanal

### Lunes: Programa Posts
1. Abre `bitaxus-cm-guide.html`
2. Ve a sección de posts (sidebar)
3. Copia contenido propuesto
4. Adapta al tono de tu voz
5. Programa en Buffer/Later

### Martes-Jueves: Moderación
1. Usa `cheat-sheet.html` para respuestas rápidas
2. Busca con `Ctrl+F` o `/`
3. Adapta a contexto específico
4. Log en tracking sheet si es pregunta nueva

### Viernes: Reporta y Analiza
1. Completa `weekly-report.csv`
2. Extrae data de `analytics.html`
3. Identifica patrones
4. Prepara ideas de blogs

---

## 📊 Exportar Datos

### Desde la Interfaz Web
- Click en card → "Copy" → Pega en editor
- Selecciona categoría → "Export as CSV"
- Presiona `Ctrl+P` para imprimir (layout optimizado)

### Archivos de Datos
- `calendar.json` — Todo el calendario Q1
- `colors.json` — Paleta de colores (código)
- `templates/` — Excel/CSV descargables

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
