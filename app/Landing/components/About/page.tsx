import Image from 'next/image'
import Box from '@/app/assets/box.png'
import React from 'react'

function About() {
  return (
  
    <section className='w-full flex flex-col items-center justify-center mt-20' id='about'>
    <div className='flex flex-col md:flex-row justify-between w-[80%] md:w-[50%] items-center'>
        <h1 className='text-[40px] md:text-[60px] font-[400]'>Why <span className='text-[#0787A7]'>Haleo?</span></h1>
        <p className='md:w-[360px] text-[16px] text-center md:text-left'>We help you achieve a balanced, vibrant lifestyle through consistent exercise and mindful living. <span className='text-[#0787A7]'>Haleo</span> supports you with:</p>
    </div>
    <div className='w-[50%] gap-4 mt-4 flex flex-col md:flex-row'>
        <div className='bg-test'>
            <Image src={Box} alt='' />
            <p className='mt-2 text-center'>Real-time Health Insights</p>
        </div>
        <div className='bg-test'>
            <Image src={Box} alt='' />
            <p className='mt-2 text-center'>Wellness Tracking</p>
        </div>
        <div className='bg-test'>
            <Image src={Box} alt='' />
            <p className='mt-2 text-center'>Goal Setting & Progress</p>
        </div>
    </div>
</section>
  )
}

export default About