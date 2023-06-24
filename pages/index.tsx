import React from 'react'

// Nextjs
import dynamic from 'next/dynamic'

// Components
import Layout from '@/components/Layout'

// Components
const Home = dynamic(import('@/components/Home'), { ssr: false })

export default function Main() {

  return (
    <Layout>
      <Home />
    </Layout>
  )
}
