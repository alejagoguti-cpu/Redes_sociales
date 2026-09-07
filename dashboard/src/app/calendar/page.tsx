'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface Post {
  id: string
  scheduled_date: string
  scheduled_time: string
  platform: string
  title: string
  status: string
}

export default function CalendarPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [currentDate, setCurrentDate] = useState(new Date(2026, 8)) // September 2026
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .order('scheduled_date', { ascending: true })

        if (error) throw error
        setPosts(data || [])
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getPostsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return posts.filter(post => post.scheduled_date === dateStr)
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const monthName = currentDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Calendar className="w-8 h-8 text-red-500" />
          Calendario de Contenido
        </h1>
        <p className="text-muted">Visualiza tu calendario editorial de septiembre 2026</p>
      </div>

      {/* Calendar Controls */}
      <div className="bg-dark-secondary border border-line-soft rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold capitalize">{monthName}</h2>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="sm">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
            <div key={day} className="text-center text-xs font-semibold text-muted-dark py-2 border-b border-line-soft">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}
          {days.map(day => {
            const dayPosts = getPostsForDate(day)
            return (
              <div
                key={day}
                className="aspect-square border border-line-soft rounded-lg p-2 hover:border-red-500 cursor-pointer transition-colors bg-dark-tertiary"
              >
                <p className="text-xs font-semibold mb-1">{day}</p>
                <div className="space-y-1">
                  {dayPosts.slice(0, 2).map((post, idx) => (
                    <div
                      key={idx}
                      className={`text-xs px-1 py-0.5 rounded truncate ${
                        post.platform === 'Instagram'
                          ? 'bg-purple-500/20 text-purple-300'
                          : post.platform === 'Twitter'
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-red-500/20 text-red-300'
                      }`}
                    >
                      {post.platform}
                    </div>
                  ))}
                  {dayPosts.length > 2 && (
                    <p className="text-xs text-muted">+{dayPosts.length - 2} más</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Posts List */}
      <div className="bg-dark-secondary border border-line-soft rounded-lg">
        <div className="px-6 py-4 border-b border-line-soft">
          <h3 className="font-semibold">Próximas Publicaciones</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-line-soft">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Fecha</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Plataforma</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Título</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Estado</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-muted">
                    Cargando calendario...
                  </td>
                </tr>
              ) : posts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-muted">
                    No hay posts programados
                  </td>
                </tr>
              ) : (
                posts.slice(0, 10).map((post) => (
                  <tr key={post.id} className="border-b border-line-soft hover:bg-dark-tertiary">
                    <td className="px-6 py-4 text-sm">{post.scheduled_date}</td>
                    <td className="px-6 py-4 text-sm font-medium">{post.platform}</td>
                    <td className="px-6 py-4 text-sm">{post.title}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-2 py-1 rounded text-xs bg-yellow-500/20 text-yellow-400">
                        {post.status}
                      </span>
                    </td>
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
