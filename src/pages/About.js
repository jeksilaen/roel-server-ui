import React from 'react'
import background from "../img/mc.gif";

const About = () => (
  <div className=' overflow-hidden'>
    <div class="w-screen h-screen bg-slate-700 bg-blend-multiply opacity-80" style={{ backgroundImage : `url(${background})` }}>\
          <h1 className='font-retroGaming text-center text-white text-3xl pt-32 pb-10'>UwuRoelTech</h1>
          <div className='flex justify-center'>
            <div className=' text-white text-center font-extralight lg:w-3/6 md:w-4/6 sm:w-5/6 w-5/6'>
                <p>Esse enim nisi sunt culpa velit ad amet labore pariatur tempor ullamco aliquip anim Lorem.
                  Officia culpa sint irure fugiat id adipisicing adipisicing veniam id dolor cupidatat esse et.
                  Exercitation voluptate excepteur cillum deserunt ut nisi adipisicing. Sunt officia ullamco aliqua aliqua amet laboris voluptate Lorem.</p>
            </div>
          </div>
         
    </div>  
     
    </div>

)

export default About