import React from 'react'
import Accordion from '../Accordion/page'

function Questions() {
  return (
    <section className='w-full flex flex-col items-center justify-center mt-40' id='faq'>
                <div className='w-full md:w-[80%] lg:w-[50%] flex flex-col md:flex-row md:justify-between justify-center items-center' >
                    <div className='w-full flex flex-col justify-between items-center'>
                        <h1 className='text-[60px]'>Common <br /> Questions</h1>
                        <p>Frequently Asked Questions</p>
                    </div>
                    <div className='w-[80%]'>
                        <Accordion />
                    </div>
                </div>
            </section>
  )
}

export default Questions