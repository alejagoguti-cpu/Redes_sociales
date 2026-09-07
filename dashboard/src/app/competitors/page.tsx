'use client'

import { Zap, Target } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function CompetitorsPage() {
  const competitors = [
    { name: 'Empresa A', platform: 'Instagram', followers: 45000, engagement: 3.2 },
    { name: 'Empresa B', platform: 'Twitter', followers: 28000, engagement: 2.1 },
    { name: 'Empresa C', platform: 'LinkedIn', followers: 67000, engagement: 4.5 },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Zap className="w-8 h-8 text-red-500" />
          Seguimiento de Competencia
        </h1>
        <p className="text-muted">Monitorea el desempeño de tus competidores</p>
      </div>

      {/* Add Competitor */}
      <div className="bg-dark-secondary border border-line-soft rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Agregar Competidor</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Nombre"
            className="px-4 py-2 bg-dark-tertiary border border-line-soft rounded-lg text-white"
          />
          <select className="px-4 py-2 bg-dark-tertiary border border-line-soft rounded-lg text-white">
            <option>Selecciona plataforma</option>
            <option>Instagram</option>
            <option>Twitter</option>
            <option>LinkedIn</option>
            <option>TikTok</option>
          </select>
          <Button variant="primary">Agregar</Button>
        </form>
      </div>

      {/* Competitors Table */}
      <div className="bg-dark-secondary border border-line-soft rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-line-soft bg-dark-tertiary">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Competidor</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Plataforma</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Seguidores</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Engagement</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((competitor, idx) => (
                <tr key={idx} className="border-b border-line-soft hover:bg-dark-tertiary">
                  <td className="px-6 py-4 text-sm font-medium">{competitor.name}</td>
                  <td className="px-6 py-4 text-sm">{competitor.platform}</td>
                  <td className="px-6 py-4 text-sm">{competitor.followers.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-green-400">{competitor.engagement}%</td>
                  <td className="px-6 py-4 text-sm">
                    <Button variant="ghost" size="sm">
                      Ver Análisis
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-dark-secondary border border-line-soft rounded-lg p-6">
          <Target className="w-6 h-6 text-red-500 mb-3" />
          <p className="text-muted-dark text-sm mb-2">Engagement Promedio</p>
          <p className="text-3xl font-bold">3.27%</p>
        </div>
        <div className="bg-dark-secondary border border-line-soft rounded-lg p-6">
          <Target className="w-6 h-6 text-red-500 mb-3" />
          <p className="text-muted-dark text-sm mb-2">Mayor Engagement</p>
          <p className="text-3xl font-bold text-green-400">Empresa C</p>
        </div>
        <div className="bg-dark-secondary border border-line-soft rounded-lg p-6">
          <Target className="w-6 h-6 text-red-500 mb-3" />
          <p className="text-muted-dark text-sm mb-2">Plataforma Dominante</p>
          <p className="text-3xl font-bold">LinkedIn</p>
        </div>
      </div>
    </div>
  )
}
