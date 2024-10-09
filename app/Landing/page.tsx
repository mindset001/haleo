'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '@/app/assets/logo.png'
import Link from 'next/link'
import Wine from '@/app/assets/wine.png'
import Orange from '@/app/assets/orange.png'
import Box from '@/app/assets/box.png'
import Accordion from './components/Accordion/page'

function Landing() {
    return (
        <main className='test w-full'>
            {/* navbar  */}
            <section className=' w-full flex justify-center items-center'>
                <div className='w-[80%] flex justify-between ite py-4 items-center text-[16px] font-[400]'>
                    <div>
                        <Image src={Logo} alt='logo' className='w-[124px] h-[27px]' />
                    </div>
                    <div className="">
                        <ul className="flex gap-6 items-center">
                            <li><Link href="">About</Link></li>
                            <li><Link href="">FAQ</Link></li>
                            <li className="bg-[#11D8FC] text-[#000000] p-2 rounded-[6px]">
                                <Link href="">Join Waitlist</Link>
                            </li>
                        </ul>

                    </div>

                </div>


                {/* <div className=" flex items-center">
                    <Image src={Wine} alt="Wine" className="" />
                    <Image src={Orange} alt="Orange" className="" />
                </div> */}
            </section>

            {/* hero  */}
            <section className='w-full flex flex-col justify-center items-center'>
                <div className="w-[50%] h-screen flex flex-col justify-center items-center text-center">
                    <div>
                        <h1 className='text-[60px] font-[400]'>Say <span className='outline-text'>Haleo</span> to your Fitness <br />
                            & Wellness Companion.</h1>
                        <p className='text-[#11D8FC] text-[16px] font-[400] capitalize'>Get ready to transform your health and wellness journey with Haleo, the ultimate third-party Apple Watch app that helps you stay healthy, strong, and active every day. making it easy to live your healthiest life— <br />
                            all from the convenience of your wrist!</p>
                    </div>
                    <div className="w-full mt-10 email-container">
                        <input type="email" placeholder="Your Email" className="email-input" />
                        <button className="join-button">Join Waitlist</button>
                    </div>

                </div>
            </section>

            {/* about  */}

            <section className='w-full flex flex-col items-center justify-center mt-20'>
                <div className='flex justify-between w-[50%] items-center'>
                    <h1 className='text-[60px] font-[400]'>Why <span className='text-[#0787A7]'>Haleo?</span></h1>
                    <p className='w-[360px] text-[16px]'>We help you achieve a balanced, vibrant lifestyle through consistent exercise and mindful living. <span className='text-[#0787A7]'>Haleo</span> supports you with:</p>
                </div>
                <div className='w-[50%] gap-4 mt-4 flex'>
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

            {/* questions  */}
            <section className='w-full flex flex-col items-center justify-center mt-40'>
                <div className='w-[50%] flex justify-between'>
                    <div className='w-full  justify-between'>
                        <h1 className='text-[60px]'>Common <br /> Questions</h1>
                        <p>Frequently Asked Questions</p>
                    </div>
                    <div className='w-[80%]'>
                        <Accordion />
                    </div>
                </div>
            </section>

            {/* footer  */}
            <section className='flex justify-center items-center mt-40'>
                <div className='w-[60%]'>
                    <div className='border-b p-4 mb-4 pb-10'>
                        <div>
                            <Image src={Logo} alt='' className='w-[124px] h-[27px]' />
                        </div>
                        <div></div>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <p>Copyright  @2024 Asteria. <br /> All Rights Reserved</p>
                        <div className="">
                            <ul className="flex gap-6 items-center text-[16px] font-[200]">
                                <li><Link href="">Privacy Policy</Link></li>
                                <li><Link href="">Terms Of Use</Link></li>

                            </ul>

                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Landing