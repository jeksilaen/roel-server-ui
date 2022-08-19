import React from 'react'
import background from "../img/mc.gif";

const About = () => (
  <div className=' overflow-hidden'>
    {/* <div className='w-screen h-screen bg-[url("./img/mc.gif")]'>
        </div> */}
    <div class="w-screen h-screen bg-slate-600 bg-blend-multiply opacity-80" style={{ backgroundImage : `url(${background})` }}></div>
     
    </div>

)

export default About