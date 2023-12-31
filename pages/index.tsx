import React, { useState, useEffect } from 'react'

// Nextjs
import dynamic from 'next/dynamic'

// Components
import Layout from '@/components/Layout'
const Home = dynamic(import('@/components/Home'), { ssr: false })

// Mui
import { LinearProgress } from '@mui/material'


export default function Main() {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;

    timeOut = setTimeout(() => { setLoading(false) }, 800)
    
    return () => {
      clearTimeout(timeOut)
    }
  }, [])

  return (
    <Layout>
      {loading && <LinearProgress />}
      <Home />
    </Layout>
  )
}
