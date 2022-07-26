import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Blogs from './Components/Blogs'
import AddBlog from './Components/AddBlog'
import EditBlog from './Components/EditBlog'

function App() {
  return (
    <div>
       <Navbar/>

<Routes>
     <Route exact path="/" element={<Blogs/>}/>
     <Route  path="/addBlog" element={<AddBlog/>}/>
     <Route  path="/editBlog/:id" element={<EditBlog/>}/>

</Routes>
    </div>
  );
}

export default App;
