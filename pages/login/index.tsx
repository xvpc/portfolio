import React, { useEffect } from 'react'

// NextJs
import { useRouter } from 'next/router'

// Components
import Layout from '@/components/Layout'
import Login from '@/components/Login'

// Utils
import isLoggedin from '@/utils/Loggedin'

export default function LoginPage() {
    const router = useRouter()

    useEffect(() => {
        (async() => {
            if(await isLoggedin()){
                router.replace('/admin')
            }
        })()
    }, [])

    return (
        <Layout>
            <Login />
        </Layout>
    )
}
