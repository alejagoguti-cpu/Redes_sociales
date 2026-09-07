'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { BarChart3, TrendingUp } from 'lucide-react'

interface Metric {
  platform: string
  impressions: number
  engagement_rate: number
  post_title: string
}

export default function AnalyticsPage() {
  const [metrics, setMetrics] = useState<Metric[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const { data, error } = await supabase
          .from('engagement_metrics')
          .select('*')
          .order('metric_date', { ascending: false })
          .limit(20)

        if (error) throw error
        setMetrics(data || [])
      } catch (error) {
        console.error('Error fetching metrics:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMetrics()
  }, [])

  const platformStats = metrics.reduce((acc, metric) => {
    const platform = metric.platform || 'Unknown'
    if (!acc[platform]) {
      acc[platform] = { impressions: 0, engagement: 0, count: 0 }
    }
    acc[platform].impressions += metric.impressions || 0
    acc[platform].engagement += metric.engagement_rate || 0
    acc[platform].count += 1
    return acc
  }, {} as Record<string, { impressions: number; engagement: number; count: number }>)

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <BarChart3 className="w-8 h-8 text-red-500" />
          Análisis
        </h1>
        <p className="text-muted">Visualiza el rendimiento de tus posts en todas las plataformas</p>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {Object.entries(platformStats).map(([platform, stats]) => (
          <div key={platform} className="bg-dark-secondary border border-line-soft rounded-lg p-6">
            <p className="text-muted-dark text-sm mb-4">{platform}</p>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-dark mb-1">Impresiones Totales</p>
                <p className="text-2xl font-bold">{stats.impressions.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-muted-dark mb-1">Engagement Promedio</p>
                <p className="text-2xl font-bold text-green-400">
                  {(stats.engagement / stats.count).toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Metrics */}
      <div className="bg-dark-secondary border border-line-soft rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-line-soft">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-red-500" />
            Métricas Recientes
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-line-soft bg-dark-tertiary">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Plataforma</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Post</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Impresiones</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-muted">
                    Cargando métricas...
                  </td>
                </tr>
              ) : metrics.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-muted">
                    No hay datos de métricas disponibles
                  </td>
                </tr>
              ) : (
                metrics.map((metric, idx) => (
                  <tr key={idx} className="border-b border-line-soft hover:bg-dark-tertiary">
                    <td className="px-6 py-4 text-sm font-medium">{metric.platform}</td>
                    <td className="px-6 py-4 text-sm text-muted truncate max-w-xs">{metric.post_title}</td>
                    <td className="px-6 py-4 text-sm">{(metric.impressions || 0).toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm text-green-400">{(metric.engagement_rate || 0).toFixed(2)}%</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
