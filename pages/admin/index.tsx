import React, { useEffect, useState } from 'react'

// Components
import Layout from '@/components/Layout'
import Dashboard from '@/components/Dashboard'

// NextJs
import { useRouter } from 'next/router'

// Utils
import isLoggedin from '@/utils/Loggedin'

// Mui
import { LinearProgress } from '@mui/material'

export default function DashboardPage() {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        (async() => {
            setLoading(true);
            if(!await isLoggedin()){
                router.replace('/login')
            }
            setTimeout(() => { setLoading(false) }, 1500)
        })();
    }, [])

    return (
        <Layout>
            {loading ? <LinearProgress /> : <Dashboard />}
        </Layout>
    )
}
