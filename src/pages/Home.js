import React from 'react'

const Home = (props) => {
  return (
        <div className=' bg-slate-900 items-center flex'>
          <div className='w-full self-center px-4 pt-32'>
          <h1 className='text-white px-20 text-4xl font-semibold justify-center flex font-retroGaming text-center'>Start Your Very Own Server!</h1>
          <p className='text-white flex text-center justify-center pt-8 text-xl font-extralight'>Our Minecraft Hosting plans begin at $2.50,
             and have the option of easily and automatically upgrading <br/>at any point,
             only charging you the difference between the upgraded package cost and <br/> your remaining days on your current plan</p>
             <div className='justify-center flex p-14'>
              <button className='p-5 bg-slate-800 rounded-md font-retroGaming text-white border text-center'>Compare Our Plan</button>
             </div>
          </div>
        </div>    
  )
}

export default Home