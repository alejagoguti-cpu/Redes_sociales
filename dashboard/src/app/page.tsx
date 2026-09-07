'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/instagram')
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-500">Bitaxus</h1>
        <p className="text-muted">Redirigiendo...</p>
      </div>
    </div>
  )
}
