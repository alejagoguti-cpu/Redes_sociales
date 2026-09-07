# Bitaxus - Panel de Control de Gestión de Contenido

## Descripción General

Panel de control moderno y escalable para la gestión centralizada de contenido social en Bitaxus. Integrado con Supabase para sincronización en tiempo real de posts, métricas y análisis de rendimiento. Diseñado con un tema oscuro corporativo que mantiene la identidad visual de Bitaxus.

## Stack Tecnológico

### Frontend
- **Next.js 16.3+** - React framework con App Router
- **TypeScript** - Type safety en todo el código
- **Tailwind CSS** - Utilidades CSS para estilos
- **Lucide React** - Iconografía consistente

### Backend & Base de Datos
- **Supabase** - PostgreSQL con autenticación y realtime
- **@supabase/supabase-js** - Cliente oficial de Supabase

### Dependencias Clave
- `class-variance-authority` - Variantes de componentes
- `clsx` - Utilidad para construcción de className
- `tailwind-merge` - Merge inteligente de clases Tailwind

## Estructura de Carpetas

```
dashboard/
├── src/
│   ├── app/                          # Rutas de Next.js App Router
│   │   ├── layout.tsx                # Layout raíz con Sidebar
│   │   ├── page.tsx                  # Home (redirige a Instagram)
│   │   ├── globals.css               # Estilos globales y tema Bitaxus
│   │   ├── instagram/
│   │   │   └── page.tsx              # Administrador de Instagram
│   │   ├── analytics/
│   │   │   └── page.tsx              # Panel de análisis
│   │   ├── calendar/
│   │   │   └── page.tsx              # Calendario de contenido
│   │   ├── competitors/
│   │   │   └── page.tsx              # Seguimiento de competencia
│   │   └── news-consolidator/
│   │       └── page.tsx              # Consolidador de noticias
│   │
│   ├── components/                   # Componentes reutilizables
│   │   ├── Sidebar.tsx               # Navegación lateral compartida
│   │   └── ui/
│   │       └── Button.tsx            # Componente Button base
│   │
│   └── lib/
│       └── supabase.ts               # Cliente y tipos de Supabase
│
├── public/                           # Archivos estáticos
├── tailwind.config.ts                # Configuración de Tailwind con tema
├── tsconfig.json                     # Configuración TypeScript
├── next.config.ts                    # Configuración Next.js
├── package.json                      # Dependencias y scripts
└── CLAUDE.md                         # Esta documentación

```

## Configuración del Tema Bitaxus

### Colores Base (Definidos en tailwind.config.ts y globals.css)

```
Primarios:
- Red: #E12C37 (rojo primario)
- Coral: #FF6B5B (hover/énfasis)

Backgrounds:
- Primary: #0F0F13
- Secondary: #151519
- Tertiary: #1A1A20

Borders:
- Soft: #2A2A32
- Standard: #3A3A42

Text:
- White: #FFFFFF
- Muted: #8B8B99
- Muted Dark: #6B6B77
```

### Aplicación Global
- El archivo `globals.css` define CSS variables y estilos base
- `tailwind.config.ts` extiende la configuración con colores personalizados
- Todas las páginas heredan automáticamente el tema oscuro

## Convenciones de Componentes

### Estructura de Componentes
1. **Client Components**: Marcar con `'use client'` cuando usen hooks
2. **Tipos**: Definir interfaces al inicio del archivo
3. **Exports**: Exportar como named export (no default)

### Ejemplo de Componente
```typescript
'use client'

import { useState } from 'react'

interface ComponentProps {
  title: string
  onClick?: () => void
}

export const MyComponent = ({ title, onClick }: ComponentProps) => {
  return <div>{title}</div>
}
```

### Estilos
- Usar Tailwind CSS clases siempre
- Para variantes: usar className condicionales o `clsx`
- Colores personalizados disponibles en `bg-dark-secondary`, `text-muted-dark`, etc.

### Botones
El componente `Button` soporta variantes:
- `primary` (rojo Bitaxus)
- `secondary` (gris con borde)
- `ghost` (sin fondo)
- `danger` (rojo oscuro)

Tamaños:
- `sm` - Pequeño
- `md` - Mediano (default)
- `lg` - Grande

## Integración con Supabase

### Configuración
Las credenciales están en `src/lib/supabase.ts`:
```typescript
const SUPABASE_URL = 'https://uobglfexvgxeogedthbh.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_t20trpv9gh1D4l4qz86LyA_U5scsSKq'
```

### Tablas de Base de Datos
1. **posts** - Contenido social
   - `id` (UUID)
   - `scheduled_date` (date)
   - `scheduled_time` (time)
   - `platform` (text: Instagram, Twitter, LinkedIn, Blog)
   - `title` (text)
   - `copy_text` (text)
   - `description` (text)
   - `status` (text: draft, scheduled, published, archived)
   - `priority` (text: low, normal, high)
   - `comments` (text)
   - `created_at` (timestamp)
   - `updated_at` (timestamp)

2. **engagement_metrics** - Analíticas
   - `id` (UUID)
   - `metric_date` (date)
   - `platform` (text)
   - `post_title` (text)
   - `impressions` (integer)
   - `engagement_rate` (numeric)
   - `created_at` (timestamp)

### Uso del Cliente
```typescript
import { supabase } from '@/lib/supabase'

// Fetch posts
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .eq('platform', 'Instagram')

// Realtime subscriptions
const subscription = supabase
  .channel('posts')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'posts' },
    (payload) => console.log(payload)
  )
  .subscribe()
```

## Páginas y Funcionalidades

### 1. Administrador Instagram (`/instagram`)
- Listado de posts de Instagram desde Supabase
- Estadísticas rápidas (total, programados, publicados)
- Tabla con opciones de edición
- Botón para crear nuevo post

### 2. Análisis (`/analytics`)
- Visualización de métricas de engagement
- Stats por plataforma (impresiones, engagement rate)
- Tabla de métricas recientes
- Integración con `engagement_metrics`

### 3. Calendario de Contenido (`/calendar`)
- Calendario visual de septiembre 2026
- Vista mensual con posts
- Controles para navegar meses
- Tabla de próximas publicaciones
- Color coding por plataforma

### 4. Seguimiento de Competencia (`/competitors`)
- Formulario para agregar competidores
- Tabla con datos de competidores
- Insights agregados (engagement promedio, mayor engagement, plataforma dominante)
- Estado: Con datos mock, listo para conectar con tabla en Supabase

### 5. Consolidador de Noticias (`/news-consolidator`)
- Formulario para agregar noticias
- Listado de noticias con categorías
- Tags por categoría, fuente y fecha
- Estadísticas por categoría
- Estado: Con datos mock, listo para conectar con tabla en Supabase

## Decisiones Arquitectónicas

### 1. Client vs Server Components
- Componentes de páginas: `'use client'` para usar hooks y Supabase
- Layout principal: Server component para mejor performance
- Sidebar: Client component para active link detection

### 2. Nombrado de Rutas
- Rutas en plural para colecciones (`/analytics`, `/competitors`)
- URLs descriptivas que reflejan funcionalidad

### 3. Tema Oscuro Obligatorio
- No se incluyó soporte para light mode (foco en identidad Bitaxus)
- `color-scheme: dark` en CSS raíz
- Tailwind configurado con `darkMode: 'class'`

### 4. Gestión de Estado
- State local con `useState` en componentes
- Supabase como single source of truth para datos
- Real-time subscriptions listos para implementar

### 5. Tipado
- Interfaces para tipos de datos (Posts, Metrics, etc.)
- Database types importables desde `@/lib/supabase`

## Variables de Entorno

Configuradas en `src/lib/supabase.ts` (valores públicos):
```
NEXT_PUBLIC_SUPABASE_URL=https://uobglfexvgxeogedthbh.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_t20trpv9gh1D4l4qz86LyA_U5scsSKq
```

## Cómo Ejecutar

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build producción
npm run build
npm start

# Lint
npm run lint
```

La aplicación estará disponible en `http://localhost:3000`

## Próximas Mejoras

1. **Autenticación** - Integrar login con Supabase Auth
2. **Edición en Vivo** - Formularios modales para crear/editar posts
3. **Real-time Updates** - WebSocket subscriptions de Supabase
4. **Upload de Imágenes** - Integración con Supabase Storage
5. **Exportación** - Descargar calendarios y reportes en PDF
6. **Dark/Light Mode Toggle** - Si es requerido en futuro
7. **Mobile Responsive** - Optimizar para tablets y móviles
8. **Paginación** - En tablas con muchos registros
9. **Búsqueda y Filtros** - Avanzados en cada sección
10. **Notificaciones** - Alertas de posts próximos a publicar

## Notas de Desarrollo

- TypeScript errors: Resolver antes de build
- Los componentes UI deben ser reutilizables
- Mantener consistencia de naming: camelCase en JS, kebab-case en URLs
- Documentar cambios en CLAUDE.md
- Testear cambios en navegación y rutas antes de commit

## Contacto & Soporte

Para preguntas sobre la arquitectura o stack:
- Stack: Next.js 16, TypeScript, Tailwind CSS, Supabase
- Documentación: https://nextjs.org/docs, https://supabase.com/docs
- Temas locales: Ver `tailwind.config.ts` y `src/app/globals.css`
