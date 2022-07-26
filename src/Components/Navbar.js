import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=''>
        <div className='flex justify-between py-3 px-5 bg-[#4903fc]'>
            <Link to="/" className=' text-white text-2xl font-semibold'>Blogs</Link>
            <Link to="/addBlog" className='w-[100px] bg-white text-[#4903fc] font-semibold text-center pt-1 rounded-lg'>Add Blog</Link>
        </div>
    </div>
  )
}

export default Navbar