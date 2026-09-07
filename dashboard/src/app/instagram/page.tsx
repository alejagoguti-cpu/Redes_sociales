'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/Button'
import { Plus } from 'lucide-react'

interface InstagramPost {
  id: string
  title: string
  copy_text: string
  scheduled_date: string
  status: string
  priority: string
}

export default function InstagramPage() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('platform', 'Instagram')
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

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Administrador Instagram</h1>
          <p className="text-muted">Gestiona y publica contenido en Instagram</p>
        </div>
        <Button variant="primary" size="lg">
          <Plus className="w-5 h-5 mr-2" />
          Nuevo Post
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-dark-secondary border border-line-soft rounded-lg p-6">
          <p className="text-muted-dark text-sm mb-2">Total Posts</p>
          <p className="text-3xl font-bold">{posts.length}</p>
        </div>
        <div className="bg-dark-secondary border border-line-soft rounded-lg p-6">
          <p className="text-muted-dark text-sm mb-2">Programados</p>
          <p className="text-3xl font-bold">
            {posts.filter(p => p.status === 'scheduled').length}
          </p>
        </div>
        <div className="bg-dark-secondary border border-line-soft rounded-lg p-6">
          <p className="text-muted-dark text-sm mb-2">Publicados</p>
          <p className="text-3xl font-bold">
            {posts.filter(p => p.status === 'published').length}
          </p>
        </div>
      </div>

      {/* Posts Table */}
      <div className="bg-dark-secondary border border-line-soft rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-line-soft">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Título</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Fecha</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Estado</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Prioridad</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-muted-dark">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-muted">
                    Cargando posts...
                  </td>
                </tr>
              ) : posts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-muted">
                    No hay posts de Instagram
                  </td>
                </tr>
              ) : (
                posts.map((post) => (
                  <tr key={post.id} className="border-b border-line-soft hover:bg-dark-tertiary">
                    <td className="px-6 py-4 text-sm">{post.title}</td>
                    <td className="px-6 py-4 text-sm text-muted">{post.scheduled_date}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        post.status === 'published'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">{post.priority}</td>
                    <td className="px-6 py-4 text-sm">
                      <Button variant="ghost" size="sm">
                        Editar
                      </Button>
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
