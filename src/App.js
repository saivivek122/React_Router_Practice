import { ToastContainer } from 'react-toastify';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from "./Components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <ToastContainer />
      {/* <Users/> */}

    {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/users/:id' element={<SingleUserPage/>}/>
    </Routes> */}
    </div>
  );
}

export default App;
