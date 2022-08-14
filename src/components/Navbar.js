import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav bg-slate-800 text-white flex justify-between items-center p-4 shadow-xl'>
        <Link to="/" className='text-2xl font-medium font-retroGaming'>Serveroel</Link>
        <ul className='p-0 m-0 flex text-xl items-stretch'>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/pricing">Pricing</CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path:resolvedPath.pathname, end:true})
    return(
        <li className={isActive ? "bg-slate-600 px-5 mx-3 rounded-md" : "px-5 mx-3 hover:bg-slate-700 rounded-md"}>
            <Link to={to} {...props} className='flex items-center p-1 font-minecraft' >
                {children}
            </Link>
        </li>
    )
}

export default Navbar