'use client'

import { useState } from 'react'
import { Newspaper, Plus, Archive } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface NewsItem {
  id: string
  title: string
  source: string
  category: string
  date: string
  status: string
}

export default function NewConsolidatorPage() {
  const [news, setNews] = useState<NewsItem[]>([
    {
      id: '1',
      title: 'Nuevas tendencias en marketing digital 2026',
      source: 'MarketingPro',
      category: 'Marketing',
      date: '2026-09-07',
      status: 'active',
    },
    {
      id: '2',
      title: 'La IA revoluciona la gestión financiera',
      source: 'FinancialTimes',
      category: 'Tecnología',
      date: '2026-09-06',
      status: 'active',
    },
  ])

  const categories = ['Marketing', 'Tecnología', 'Finanzas', 'Emprendimiento', 'General']

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Newspaper className="w-8 h-8 text-red-500" />
          Consolidador de Noticias
        </h1>
        <p className="text-muted">Centraliza y gestiona noticias relevantes para tu industria</p>
      </div>

      {/* Add News */}
      <div className="bg-dark-secondary border border-line-soft rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Agregar Noticia
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Título de la noticia"
              className="px-4 py-2 bg-dark-tertiary border border-line-soft rounded-lg text-white"
            />
            <input
              type="text"
              placeholder="Fuente"
              className="px-4 py-2 bg-dark-tertiary border border-line-soft rounded-lg text-white"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="px-4 py-2 bg-dark-tertiary border border-line-soft rounded-lg text-white">
              <option>Selecciona categoría</option>
              {categories.map(cat => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <input
              type="date"
              className="px-4 py-2 bg-dark-tertiary border border-line-soft rounded-lg text-white"
            />
          </div>
          <textarea
            placeholder="Resumen o descripción"
            className="w-full px-4 py-2 bg-dark-tertiary border border-line-soft rounded-lg text-white"
            rows={3}
          />
          <Button variant="primary">Guardar Noticia</Button>
        </form>
      </div>

      {/* News List */}
      <div className="space-y-4">
        {news.map(item => (
          <div
            key={item.id}
            className="bg-dark-secondary border border-line-soft rounded-lg p-6 hover:border-red-500 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-red-500/20 text-red-300 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                    {item.source}
                  </span>
                  <span className="text-xs px-2 py-1 text-muted-dark">
                    {item.date}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  Editar
                </Button>
                <Button variant="ghost" size="sm">
                  <Archive className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Categories Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
        {categories.map(cat => (
          <div key={cat} className="bg-dark-secondary border border-line-soft rounded-lg p-4 text-center">
            <p className="text-muted-dark text-sm mb-2">{cat}</p>
            <p className="text-2xl font-bold">
              {news.filter(n => n.category === cat).length}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
