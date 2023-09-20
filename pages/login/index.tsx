import React, { useEffect, useState } from 'react'

// NextJs
import { useRouter } from 'next/router'

// Components
import Layout from '@/components/Layout'
import Login from '@/components/Login'

// Utils
import isLoggedin from '@/utils/Loggedin'

// Mui
import { LinearProgress } from '@mui/material'

export default function LoginPage() {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        (async() => {
            setLoading(true);
            if(await isLoggedin()){
                router.replace('/admin')
            }
            setTimeout(() => { setLoading(false) }, 500)
        })()
    }, [])

    return (
        <Layout>
            {loading ? <LinearProgress /> : <Login />}
        </Layout>
    )
}
