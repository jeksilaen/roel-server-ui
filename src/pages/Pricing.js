import React from 'react'

const Pricing = () => {
  return (
    <div>
      <div className="flex flex-col h-[85vh] items-center px-16 py-16 space-y-16 space-x-8 md:flex-row bg-slate-900">

        {/* Heading */}
        <div className="flex flex-col w-1/3 space-y-5 pr-6 text-center md:text-left">
          <h1 className='text-white text-5xl font-semibold font-retroGaming'>Let's Start Now!</h1>
          <p className='text-white text-xl font-extralight'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint explicabo aspernatur recusandae exercitationem nobis, fugit, deleniti doloribus suscipit soluta architecto optio dicta voluptatum, sunt voluptas vel. Asperiores voluptates voluptatem enim!"</p>
        </div>

        {/* Cards */}
        <div className="flex flex-col w-2/3 h-full space-x-5 md:flex-row md:items-end">
          {/* Card 1 */}
          <div className="flex flex-col py-5 drop-shadow-md bg-slate-500 text-white h-[87%] w-1/3 rounded-xl justify-between">
            {/* Content */}
            <div className='space-y-4 text-center'>
              <p>Basic</p>
              <h2 className='text-5xl font-bold'>$2.00</h2>
              <hr className='w-[80%] mx-auto border-2 bg-white' />
              <ul className='list-disc w-[70%] mx-auto text-left space-y-3 font-semibold'>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
            
            {/* CTA */}
            <button className='bg-white font-bold text-slate-500 w-[60%] mx-auto h-[40px] rounded-xl hover:bg-slate-600 hover:text-white'>Get Started</button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col py-5 drop-shadow-md bg-slate-800 text-white h-full w-1/3 rounded-xl justify-between">
            {/* Content */}
            <div className='space-y-4 text-center'>
              <p>Ultimate</p>
              <h2 className='text-5xl font-bold'>$5.00</h2>
              <hr className='w-[80%] mx-auto border-2 bg-white' />
              <ul className='list-disc w-[70%] mx-auto text-left space-y-3 font-semibold'>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
            
            {/* CTA */}
            <button className='bg-white font-bold text-slate-800 w-[60%] mx-auto h-[40px] rounded-xl hover:bg-slate-600 hover:text-white'>Get Started</button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col py-5 drop-shadow-md bg-slate-800 text-white h-[87%] w-1/3 rounded-xl justify-between">
            {/* Content */}
            <div className='space-y-4 text-center'>
              <p>Premium</p>
              <h2 className='text-5xl font-bold'>$2.00</h2>
              <hr className='w-[80%] mx-auto border-2 bg-white' />
              <ul className='list-disc w-[70%] mx-auto text-left space-y-3 font-semibold'>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
            
            {/* CTA */}
            <button className='bg-white font-bold text-slate-800 w-[60%] mx-auto h-[40px] rounded-xl hover:bg-slate-600 hover:text-white'>Get Started</button>
          </div>
        </div>

      </div>

      <hr className="w-[88%] mx-auto my-0" />

      <div className="flex flex-col-reverse justify-between bg-slate-900 md:flex-row mx-0 items-center h-[10vh] px-[4rem] text-white pb-1">
        {/* Logo */}
        <div className="flex justify-around space-x-3 items-center">
          <h4 className='text-3xl font-semibold'>ROEL</h4>
          <div className='text-[13px] flex flex-col font-extralight space-y-[-7px]'>
            <p>Serveroel</p>
            <p>uwutechroell inc</p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex justify-around items-center w-[25%] font-semibold">
          <p className='text-6lg text-bold hover:cursor-pointer hover:text-slate-300'>Youtube</p>
          <p className='text-6lg text-bold hover:cursor-pointer hover:text-slate-300'>Instagram</p>
          <p className='text-6lg text-bold hover:cursor-pointer hover:text-slate-300'>LinkedIn</p>
        </div>
      </div>

    </div>
  )
}

export default Pricing