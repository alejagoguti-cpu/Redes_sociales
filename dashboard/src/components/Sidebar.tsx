'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Instagram, BarChart3, Calendar, Zap, Newspaper } from 'lucide-react'

export const Sidebar = () => {
  const pathname = usePathname()

  const navItems = [
    { href: '/instagram', label: 'Administrador Instagram', icon: Instagram },
    { href: '/analytics', label: 'Análisis', icon: BarChart3 },
    { href: '/calendar', label: 'Calendario de Contenido', icon: Calendar },
    { href: '/competitors', label: 'Seguimiento Competencia', icon: Zap },
    { href: '/news-consolidator', label: 'Consolidador Noticias', icon: Newspaper },
  ]

  return (
    <aside className="w-64 bg-dark-tertiary border-r border-line-soft min-h-screen flex flex-col p-6">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-red-500">Bitaxus</h1>
        <p className="text-muted-dark text-sm mt-1">Panel de Control</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-red-500 text-white'
                      : 'text-muted hover:bg-dark-secondary'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-line-soft pt-4">
        <p className="text-muted-dark text-xs">v1.0.0</p>
        <p className="text-muted-dark text-xs mt-1">Conectado con Supabase</p>
      </div>
    </aside>
  )
}
