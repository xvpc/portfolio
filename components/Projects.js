import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub'
import { SlLink } from 'react-icons/sl'

export default function Projects({projectInfo}) {
    const {name, image, link, repo} = projectInfo
    // 
    return (
        <div style={{width: '250px', height: '200px'}} className='project-container d-flex flex-column justify-content-center align-items-center rounded px-2 py-3 gap-2'>
            <Link className='rounded overflow-hidden shadow bg-dark' title={name || ''} href={link || '#'} target='_blank'>
                <Image style={{objectFit: 'cover'}} className='img-fluid' src={image || '/images/placeholder2.png'} height='1080' width='1920' alt='Inroduction Image' />
            </Link>
            <div style={{fontSize: '30px'}} className='w-100 d-flex flex-row justify-content-center align-items-center gap-2'>
                <Link className='w-100 p-2 d-flex text-center align-items-center justify-content-center rounded' title={link || ''} href={link || '#'} target='_blank'>
                    <SlLink />
                </Link>
            
                <Link className={`text-white w-100 p-2 d-flex text-center align-items-center justify-content-center rounded`} title={repo || ''} href={repo || '#'} target='_blank'>
                    <AiFillGithub />
                </Link>
            </div>
        </div>
    )
}
