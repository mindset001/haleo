'use client'
import Image from 'next/image';
import { useState } from 'react';
import Plus from '@/app/assets/plus.png'
import Minus from '@/app/assets/minus.png'

const Accordion = () => {
  // State to track the currently open accordion item
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the accordion
  const toggleAccordion = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Accordion Item 1 */}
      <div className="border-b border-1 border-slate-200">
        <button onClick={() => toggleAccordion(1)} className="w-full flex justify-between items-center py-5 text-[#fff]">
          <span className='text-[16px] font-[600]'>What is Haleo?</span>
          <span className="text-slate-800 transition-transform duration-300">
            {openIndex === 1 ? (
              <Image src={Minus}  alt='' className='h-[5px] w-[21px]'/>
            ) : (
              <Image src={Plus}  alt='' className='h-[21px] w-[21px]'/>
            )}
          </span>
        </button>
        <div
          className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${
            openIndex === 1 ? 'max-h-screen' : ''
          }`}
        >
          <div className="pb-5 text-[11px] font-[300] text-sm text-[#FFFFFF] bg-[#B0750F80] rounded-[10px] p-2 mb-2">
          Inspired by the word HALE, meaning healthy and robust, Haleo is designed with one goal in mind: to help you achieve a balanced, vibrant lifestyle through consistent exercise and mindful living. Whether you're into yoga, HIIT, or stretching, 
          </div>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className="border-b border-1 border-slate-200">
        <button onClick={() => toggleAccordion(2)} className="w-full flex justify-between items-center py-5 text-[#fff]">
          <span className='text-[16px] font-[600]'>What Services Does Haleo Offer</span>
          <span className="text-slate-800 transition-transform duration-300">
            {openIndex === 2 ? (
              <Image src={Minus}  alt='' className='h-[5px] w-[21px]'/>
            ) : (
              <Image src={Plus}  alt='' className='h-[21px] w-[21px]'/>
            )}
          </span>
        </button>
        <div
          className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${
            openIndex === 2 ? 'max-h-screen' : ''
          }`}
        >
          <div className="pb-5 text-[11px] font-[300] text-sm text-[#FFFFFF] bg-[#B0750F80] rounded-[10px] p-2 mb-2">
          Inspired by the word HALE, meaning healthy and robust, Haleo is designed with one goal in mind: to help you achieve a balanced, vibrant lifestyle through consistent exercise and mindful living. Whether you're into yoga, HIIT, or stretching, 
          </div>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className="border-b border-1 border-slate-200">
        <button onClick={() => toggleAccordion(3)} className="w-full flex justify-between items-center py-5 text-[#fff]">
          <span className='text-[16px] font-[600]'>How can Haleo Help my Health</span>
          <span className="text-slate-800 transition-transform duration-300">
            {openIndex === 3 ? (
              <Image src={Minus}  alt='' className='h-[5px] w-[21px]'/>
            ) : (
              <Image src={Plus}  alt='' className='h-[21px] w-[21px]'/>
            )}
          </span>
        </button>
        <div
          className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${
            openIndex === 3 ? 'max-h-screen' : ''
          }`}
        >
          <div className="pb-5 text-[11px] font-[300] text-sm text-[#FFFFFF] bg-[#B0750F80] rounded-[10px] p-2 mb-2">
          Inspired by the word HALE, meaning healthy and robust, Haleo is designed with one goal in mind: to help you achieve a balanced, vibrant lifestyle through consistent exercise and mindful living. Whether you're into yoga, HIIT, or stretching, 
          </div>
        </div>
      </div>

       {/* Accordion Item 4 */}
       <div className="border-b border-1 border-slate-200">
        <button onClick={() => toggleAccordion(4)} className="w-full flex justify-between items-center py-5 text-[#fff]">
          <span className='text-[16px] font-[600]'>When is Going to be Available </span>
          <span className="text-slate-800 transition-transform duration-300">
            {openIndex === 4 ? (
              <Image src={Minus}  alt='' className='h-[5px] w-[21px]'/>
            ) : (
              <Image src={Plus}  alt='' className='h-[21px] w-[21px]'/>
            )}
          </span>
        </button>
        <div
          className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${
            openIndex === 4 ? 'max-h-screen' : ''
          }`}
        >
          <div className="pb-5 text-[11px] font-[300] text-sm text-[#FFFFFF] bg-[#B0750F80] rounded-[10px] p-2 mb-2">
          Inspired by the word HALE, meaning healthy and robust, Haleo is designed with one goal in mind: to help you achieve a balanced, vibrant lifestyle through consistent exercise and mindful living. Whether you're into yoga, HIIT, or stretching, 
          </div>
        </div>
      </div>

      {/* Accordion Item 5 */}
      <div className="border-b border-1 border-slate-200">
        <button onClick={() => toggleAccordion(5)} className="w-full flex justify-between items-center py-5 text-[#fff]">
          <span className='text-[16px] font-[600]'>What Services Does Haleo Offer</span>
          <span className="text-slate-800 transition-transform duration-300">
            {openIndex === 5 ? (
              <Image src={Minus}  alt='' className='h-[5px] w-[21px]'/>
            ) : (
              <Image src={Plus}  alt='' className='h-[21px] w-[21px]'/>
            )}
          </span>
        </button>
        <div
          className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${
            openIndex === 5 ? 'max-h-screen' : ''
          }`}
        >
          <div className="pb-5 text-[11px] font-[300] text-sm text-[#FFFFFF] bg-[#B0750F80] rounded-[10px] p-2 mb-2">
          Inspired by the word HALE, meaning healthy and robust, Haleo is designed with one goal in mind: to help you achieve a balanced, vibrant lifestyle through consistent exercise and mindful living. Whether you're into yoga, HIIT, or stretching, 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
