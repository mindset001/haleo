import React from 'react'
import Face from '@/app/assets/face.png'
import LInked from '@/app/assets/link.png'
import Int from '@/app/assets/int.png'
import Twit from '@/app/assets/twit.png'
import { Link } from 'react-scroll';
import Image from 'next/image';
import Logo from '@/app/assets/logo.png'

function Footer() {
  return (
    <section className='flex justify-center items-center mt-40'>
    <div className='w-[80%] md:w-[60%]'>
        <div className='border-b p-4 mb-4 pb-6 flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center gap-2'>
                <Image src={Logo} alt='logo' className='w-[124px] h-[27px]' />
                <div className='bg-[#fff] h-[50px] w-[2px]'></div>
                <p className='font-[600] text-[16px] mt-2'>Fitness & Wellness</p>
            </div>
            <div className='flex gap-[5px] mt-4 md:mt-0'>
                <Image src={Face} alt='' className='w-[62.17px] h-[62.17px]' />
                <Image src={Int} alt='' className='w-[62.17px] h-[62.17px]' />
                <Image src={Twit} alt='' className='w-[62.17px] h-[62.17px]' />
                <Image src={LInked} alt='' className='w-[62.17px] h-[62.17px]' />
            </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row justify-between mt-10  mb-6'>
            <p>Copyright  @2024 Asteria. <br /> All Rights Reserved</p>
            <div className="mb-6 md:mb-0">
                <p className='mb-4 md:mb-0'>info@haleo.com</p>
                <ul className="flex gap-6 items-center text-[16px] font-[200]">
                    <li><Link to="">Privacy Policy</Link></li>
                    <li><Link to="">Terms Of Use</Link></li>

                </ul>

            </div>
        </div>
    </div>
</section>

  )
}

export default Footer