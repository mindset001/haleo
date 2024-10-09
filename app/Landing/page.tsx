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
function Landing() {
    return (
        <main className='test w-full'>
            {/* navbar  */}
            <section className=' w-full flex justify-center items-center'>
                <div className='w-[80%] flex justify-between ite py-4 items-center text-[16px] font-[400]'>
                    <div>
                       
                        <Link to=''>
                        <Image src={Logo} alt='logo' className='w-[124px] h-[27px]' />
                        </Link>
                    </div>
                    <div className="">
                        <ul className="flex gap-6 items-center">
                            <li><Link to="about"  smooth={true}
                    duration={500}
                    className='cursor-pointer'>About</Link></li>
                            <li><Link to="faq"  smooth={true}
                    duration={500}
                    className='cursor-pointer'>FAQ</Link></li>
                            <li className="bg-[#11D8FC] text-[#000000] p-2 rounded-[6px]">
                                <Link to="">Join Waitlist</Link>
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
                    <div className="flex items-center mt-4">
                        <div className='flex'>
                        <Image src={Face} alt="Image 1" className=" w-[40px] h-[40px]" />
                        <Image src={Face} alt="Image 1" className="ml-[-22%] w-[40px] h-[40px]" />
                        <Image src={Face} alt="Image 1" className="ml-[-22%] w-[40px] h-[40px]" />
                        </div>
                        <span>Join 5000+ Already Onboard</span>
                    </div>


                </div>
            </section>

            {/* about  */}

            <section className='w-full flex flex-col items-center justify-center mt-20' id='about'>
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
            <section className='w-full flex flex-col items-center justify-center mt-40' id='faq'>
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
                    <div className='border-b p-4 mb-4 pb-6 flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <Image src={Logo} alt='' className='w-[124px] h-[27px]' />
                            <div className='bg-[#fff] h-[50px] w-[2px]'></div>
                            <p className='font-[600] text-[16px] mt-2'>Fitness & Wellness</p>
                        </div>
                        <div className='flex gap-[5px]'>
                            <Image src={Face} alt='' className='w-[62.17px] h-[62.17px]' />
                            <Image src={Int} alt='' className='w-[62.17px] h-[62.17px]' />
                            <Image src={Twit} alt='' className='w-[62.17px] h-[62.17px]' />
                            <Image src={LInked} alt='' className='w-[62.17px] h-[62.17px]' />
                        </div>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <p>Copyright  @2024 Asteria. <br /> All Rights Reserved</p>
                        <div className="">
                            <ul className="flex gap-6 items-center text-[16px] font-[200]">
                                <li><Link to="">Privacy Policy</Link></li>
                                <li><Link to="">Terms Of Use</Link></li>

                            </ul>

                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Landing