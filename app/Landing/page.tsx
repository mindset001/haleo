'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '@/app/assets/logo.png'
// import Link from 'next/link'
import Wine from '@/app/assets/wine.png'
import Orange from '@/app/assets/orange.png'
import Box from '@/app/assets/box.png'
import Accordion from './components/Accordion/page'
import Face from '@/app/assets/face.png'
import LInked from '@/app/assets/link.png'
import Int from '@/app/assets/int.png'
import Twit from '@/app/assets/twit.png'
import { Link } from 'react-scroll';
import Navbar from './components/Navbar/page'
import Hero from './components/Hero/page'
import Questions from './components/Questions/page'
import Footer from './components/Footer/page'
import About from './components/About/page'
function Landing() {
    return (
        <main className='test w-full'>
        
            <Navbar />
         
            <Hero />
        
            <About />

       
            <Questions />

          
            <Footer />
        </main>
    )
}

export default Landing