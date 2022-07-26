import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function AddBlog() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
     
    const navigate = useNavigate()
    
    const data = {
      title: title,
      description: description
    }

    function Submit(e){
      e.preventDefault();

      axios.post("https://3b58-51-83-174-207.eu.ngrok.io/api/blogs",data
      ).then(
        navigate("/")
      )
    }

  return (
    <div className=''>
        
        <div className= 'my-10 mx-6 flex justify-evenly'>
        <div  className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <form>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                        <input type="text"
                           value={title}
                           onChange={(e)=> setTitle(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />


                        <label  className="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                        
                      <textarea 
                      value= {description}
                      onChange={(e)=> setDescription(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required></textarea>
            <div className='flex justify-between mt-3'>
            <button type="submit" onClick={Submit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add a new blog</button>
            </div>
            </form>
      </div>
   </div>
        
    </div>
  )
}

export default AddBlog