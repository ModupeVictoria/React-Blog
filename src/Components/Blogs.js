import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

function Blogs() {

    const [blogs, setBlogs] = useState([])

    const loadUsers = ()=>{
      axios.get("https://3b58-51-83-174-207.eu.ngrok.io/api/blogs")
      .then((res) =>{
        setBlogs(res.data.data)
        //console.log(res.data.data)
      })
    }
    useEffect(() =>{
      loadUsers()
    },[])

    function Delete (id){
      axios.delete(`https://3b58-51-83-174-207.eu.ngrok.io/api/blogs/${id}`)
      .then(
        loadUsers()
        )
    }

  return (
    <div className=' '>
      
    <div className= 'my-10 mx-6 grid grid-cols-4 gap-4'>
      {blogs.map((blog, index) =>(

        <div key = {index} className=" p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{blog.description}</p>
            <div className='flex justify-between mt-3'>
                <Link to = {`/editBlog/${blog.id}`} className ='text-[#4903fc]'>Edit</Link>
                <button 
                onClick = {() => Delete(blog.id)}
                className ='text-white bg-[#ff0000] font-semibold w-[70px] ml-4 rounded'>Delete</button>
            </div>
      </div>
     ))}

      
   </div>
        
    </div>
  )
}

export default Blogs