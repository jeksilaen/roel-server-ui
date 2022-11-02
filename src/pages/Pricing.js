import React from 'react'

const Pricing = () => {
  return (
    <div className="bg-slate-700 h-screen">
      <div className="flex flex-col h-[85%] items-center px-16 py-16 space-y-16 space-x-8 md:flex-row">

        {/* Heading */}
        <div className="flex flex-col w-1/3 space-y-5 pr-6">
          <h1 className='text-white text-5xl font-semibold font-retroGaming'>Let's Start Now!</h1>
          <p className='text-white text-xl font-extralight'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint explicabo aspernatur recusandae exercitationem nobis, fugit, deleniti doloribus suscipit soluta architecto optio dicta voluptatum, sunt voluptas vel. Asperiores voluptates voluptatem enim!"</p>
        </div>

        {/* Cards */}
        <div className="flex flex-col w-2/3 h-full space-x-5 md:flex-row md:items-end">
          {/* Card 1 */}
          <div className="flex flex-col drop-shadow-md bg-white h-[87%] w-1/3 rounded-xl">

          </div>
          {/* Card 2 */}
          <div className="flex flex-col drop-shadow-md bg-white h-full w-1/3 rounded-xl">

          </div>
          {/* Card 3 */}
          <div className="flex flex-col drop-shadow-md bg-white h-[87%] w-1/3 rounded-xl">

          </div>
        </div>

      </div>

      <hr className="my-16" />

      <div className="flex flex-col-reverse md:flex-row">

      </div>
    </div>
  )
}

export default Pricing