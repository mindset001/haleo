'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { Link } from 'react-scroll';
import Logo from '@/app/assets/logo.png'
import Men from '@/app/assets/Menu@2x.png'

function Navbar() {

    const [show, setShow] = useState(true);
    const [hide, setHide] = useState(false);
  
    const handleShow = () => {
      setHide(true);
      setShow(false);
    };
    
    const handleHide = () => {
      setShow(true);
      setHide(false);
    };

  return (
    <section className=' w-full flex justify-center items-center'>
    <div className='w-[80%] flex justify-between ite py-4 items-center text-[16px] font-[400]'>
        <div>
           
            <Link to=''>
            <Image src={Logo} alt='logo' className='w-[124px] h-[27px]' />
            </Link>
        </div>
        <div className="hidden md:block">
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

       {/* mobile  */}
       <div className='block lg:hidden'>
            {show && (
              <div onClick={handleShow}>
                <Image src={Men} alt='' className='h-[30px] w-[30px]'/>
              </div>
            )}
            {hide && (
              <div onClick={handleHide}>
                <p className='text-[40px] font-[700] mt-[-10px]' >x</p>
              </div>
            )}
          </div>

          {hide && (
       
             <div className='w-[80%] bg-white p-6 absolute right-10 top-12 block lg:hidden mt-6'>
               <ul className="flex flex-col text-black gap-6 items-center">
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
      
        )}
    

    </div>


    {/* <div className=" flex items-center">
        <Image src={Wine} alt="Wine" className="" />
        <Image src={Orange} alt="Orange" className="" />
    </div> */}
</section>
  )
}

export default Navbar