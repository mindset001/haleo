import Image from 'next/image'
import Face from '@/app/assets/face.png'
import React from 'react'

function Hero() {
  return (
    <section className='w-full flex flex-col justify-center items-center'>
    <div className="w-[80%] md:w-[50%] md:h-screen flex flex-col justify-center items-center text-center">
        <div>
            <h1 className='text-[30px] md:text-[60px] font-[400]'>Say <span className='outline-text'>Haleo</span> to your Fitness <br className='hidden md:block'/>
                & Wellness Companion.</h1>
            <p className='text-[#11D8FC] text-[16px] font-[400] capitalize'>Get ready to transform your health and wellness journey with Haleo, the ultimate third-party Apple Watch app that helps you stay healthy, strong, and active every day. making it easy to live your healthiest life— <br />
                all from the convenience of your wrist!</p>
        </div>
        <div className="w-full flex mt-10 email-container">
            <input type="email" placeholder="Your Email" className="email-input" />
            <button className="join-button">Join Waitlist</button>
        </div>
        <div className="flex items-center mt-4">
            <div className='flex'>
            <Image src={Face} alt="Image 1" className=" w-[40px] h-[40px]" />
            <Image src={Face} alt="Image 1" className="ml-[-22%] w-[40px] h-[40px]" />
            <Image src={Face} alt="Image 1" className="ml-[-22%] w-[40px] h-[40px]" />
            </div>
            <span className='text-[12px]'>Join 5000+ Already Onboard</span>
        </div>


    </div>
</section>
  )
}

export default Hero