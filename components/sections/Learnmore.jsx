import React from 'react'

// Nextjs
import Link from 'next/link';

// Icons
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";

// Others
import Ripples from 'react-ripples'

export default function Learnmore() {

    return (
        <div className='learn-container container d-flex flex-column text-center justify-content-center align-items-center gap-3' id='learn-more'>
            <h3 className='hover-effect fw-bold'>How It Works?</h3>

            <ol className="list-group list-group-numbered text-start w-100">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                        <div className="text-info ms-2 fw-bold">Website Design</div>
                        <p className='p-0 m-0 ms-4'>The client shares the design of the website with me in any format psd, figma, xd, sketch, etc...</p>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                        <div className="text-info ms-2 fw-bold">Understanding the requirements</div>
                        <p className='p-0 m-0 ms-4'>I will go through the design of the website to understand it and know what the project is about.</p>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                        <div className="text-info ms-2 fw-bold">Deal</div>
                        <p className='p-0 m-0 ms-4'>Time and price will be decided according to the complexity of the project. After agreeing on a deal, I will start working on the project.</p>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="me-auto">
                        <div className="text-info ms-2 fw-bold">Delivery</div>
                        <p className='p-0 m-0 ms-4'>The project will be completed and delivered within the agreed time.</p>
                    </div>
                </li>
            </ol>

            <div className='d-flex flex-column justify-content-center align-items-center gap-2'>
                <h6 className='text-center p-0 m-0'>Interested? You can find Me on Fiverr and Upwork</h6>
                <div className='w-100 d-flex flex-row justify-content-center align-items-center gap-2 text-center'>
                    <Ripples className='p-0 m-0 btn w-50 justify-content-center align-items-center'>
                        <Link style={{cursor: "pointer", background: '#1DBF73'}} href='https://www.fiverr.com/s/8RYLjq' target='_blank' className='text-white text-center w-100 p-2'><TbBrandFiverr className='fs-5 fw-bold' /></Link>
                    </Ripples>
                    <Ripples className='p-0 m-0 btn w-50 justify-content-center align-items-center'>
                        <Link style={{cursor: "pointer", background: '#6fda44'}} href='https://www.upwork.com/services/product/development-it-a-responsive-landing-page-or-e-commerce-website-1648754715831648256?ref=project_share' target='_blank' className='text-white text-center w-100 p-2'><SiUpwork className='fs-5 fw-bold' /></Link>
                    </Ripples>
                </div>
            </div>
            
        </div>
    )
}
