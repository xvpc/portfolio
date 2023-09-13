import React, { useEffect } from 'react'

// NextJs
import { useRouter } from 'next/router'

export default function NoMatch() {
    const router = useRouter()

    useEffect(() => {
        router.replace('/')
    }, [router])

    return (
        <div></div>
    )
}
