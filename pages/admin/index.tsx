import React, { useEffect } from 'react'

// Components
import Layout from '@/components/Layout'
import Dashboard from '@/components/Dashboard'

// NextJs
import { useRouter } from 'next/router'

// Utils
import isLoggedin from '@/utils/Loggedin'

export default function DashboardPage() {
    const router = useRouter()

    useEffect(() => {
        (async() => {
            if(!await isLoggedin()){
                router.replace('/login')
            }
        })()
    }, [])

    return (
        <Layout>
            <Dashboard />
        </Layout>
    )
}
