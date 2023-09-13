import React, { useEffect, useRef, useState } from 'react'

// Emails
import emailjs from '@emailjs/browser';

// Bootstrap
import { Button, Form, Spinner } from 'react-bootstrap';

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Framer motion
import { motion } from 'framer-motion'

// Others
import Ripples from 'react-ripples'

export default function ContactUs() {
    const form = useRef<any>()

    // Toastify
    const toastifyError = (error: string) => 
    toast.error(String(error || 'Something went Wrong!'), {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })

    const toastifySuccess = (results: string) => 
    toast.success('Message Sent Successfully', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })

    // EmailJs
    const [emailsCount, setEmailsCount] = useState(0)
    const [loadingButton, setLoadingButton] = useState(false)

    const sendEmail = (e: any) => {
        e.preventDefault()
        if(e.target[1].value){
            setLoadingButton(true)
            setEmailsCount(prev => prev + 1)

            emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY as string)
            .then((result: any[any]) => {
                console.log(result.text)
                toastifySuccess(result.text)
                setLoadingButton(false)
            }, (error) => {
                console.log(error.text)
                toastifyError(error.text)
                setLoadingButton(false)
            })
        }
    }

    const [blocked, setBlocked] = useState(false)
    useEffect(() => {
        if(emailsCount >= 10){
            if(typeof window !== 'undefined'){
                localStorage.setItem('blocked', 'blocked')
            }
        }
        typeof window !== 'undefined' && localStorage.getItem('blocked') && setBlocked(true)
    }, [emailsCount]) 
    

    // 
    return (
        <motion.section 
        id='contact-us'
        className='extra-space bg-black bg-opacity-25 mb-0 container-fluid d-flex flex-column text-center justify-content-center align-items-center gap-3' 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.2}}
        >
            <h2 className='hover-effect text-info fw-bold text-uppercase'>Contact Us</h2>

            <Form ref={form} onSubmit={sendEmail} className='container d-flex flex-column justify-content-center align-items-center gap-2'>
                <Form.Group className='w-100 d-flex flex-row justify-content-between align-items-center gap-3'>
                    <Form.Control style={{background: '#0000004f', border: 'none', color: 'white'}} className='contact-form-input fw-bold' minLength={1} type='text' id='name' name='user_name' placeholder='Your Name' />
                    <Form.Control style={{background: '#0000004f', border: 'none', color: 'white'}} className='contact-form-input fw-bold' type='email' id='email' name='user_email' placeholder='Email' />
                </Form.Group>
                <Form.Control style={{background: '#0000004f', border: 'none', color: 'white'}} className='contact-form-input fw-bold' minLength={5} as='textarea' rows={8} id='message' name='message' placeholder='How can I help you?' />

                {blocked ?
                <Button className='user-select-none rounded text-center' variant="secondary" disabled>
                    Blocked
                </Button>
                :
                loadingButton ?
                <Button className='user-select-none rounded text-center d-flex flex-row justify-content-center align-items-center gap-2' variant="secondary" disabled>
                    Send Message
                    <Spinner size='sm' animation='border' variant='primary' /> 
                </Button>
                :
                <Ripples>
                    <Button style={{cursor: "pointer"}} className='rounded' type='submit' value='Send' variant='primary'>Send Message</Button>
                </Ripples>
                }
            </Form>

            <ToastContainer
            position='bottom-center'
            autoClose={5000}
            limit={10}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
            />
        </motion.section>
    )
}