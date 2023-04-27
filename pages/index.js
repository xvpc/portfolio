import React from 'react'

// Next
import Head from 'next/head'

// Components
import dynamic from 'next/dynamic'
const Home = dynamic(import('@/components/Home'), { ssr: false })

export default function Main() {

  return (
    <>
      <Head>
          <title>Viper - Mahmoud</title>
        <meta name="title" content='Viper - Mahmoud' />
        <meta name="description" content="Hello, my name is Mahmoud Nabil you may also know me as 'Viper'. I'm A Software engineer/web developer with +4 years of experience. I Enjoy Coding and Programming, but I shine more in Frontend development." />
        <meta name="keywords" content='viper, mahmoud, dev, programmer, programming, developer, website, portfolio, fiverr, discord, github, project, anime, whatsapp, react, freelancer, front end, back end, full stack, software engineer, custom website, animation, html, css, javascript, nextjs, bootstrap, company, IT' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ICONS */}
        <link rel="shortcut icon" type="image/x-icon" href='./favicon/favicon.ico' />
        <link rel="apple-touch-icon" sizes="180x180" href='./favicon/apple-touch-icon.png' />
        <link rel="icon" type="image/png" sizes="32x32" href='./favicon/favicon-32x32.png'/>
        <link rel="icon" type="image/png" sizes="16x16" href='./favicon/favicon-16x16.png'/>
      </Head>
      
      <Home />
    </>
  )
}
