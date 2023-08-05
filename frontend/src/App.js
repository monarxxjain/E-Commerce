import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AddUser from './components/addUser';
import { useState } from 'react';
import PrivateComponent from './components/PrivateComponent';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("user"));
  // const auth = localStorage.getItem("user");
  
  return (
    <BrowserRouter>
      <div className="App flex flex-col">
        <nav className="flex items-center px-3 justify-between bg-secondary py-2">
          <div className='flex items-center'>
            <h2><Link to="/" className="no-underline text-white">Navbar</Link></h2>

            <ul className="hidden md:flex items-center ms-3 gap-4 mb-0 text-xl text-white">
              <li className='hover:scale-105 hover:text-gray-500 active:scale-95 transition-all'><Link className='no-underline text-white ' to="/products">Products</Link></li>
              <li className='hover:scale-105 hover:text-gray-500 active:scale-95 transition-all'><Link className='no-underline text-white ' to="/add">Add</Link></li>
              <li className='hover:scale-105 hover:text-gray-500 active:scale-95 transition-all'><Link className='no-underline text-white ' to="/update">Update</Link></li>
            </ul>
          </div>
          {loggedIn ?

            <div className='text-xl hidden md:flex me-3 gap-4'>
              <button type='submit'><Link className='no-underline text-white' onClick={()=>{localStorage.removeItem("user"); setLoggedIn(false)}} to="/">Logout</Link></button>
              <div className='no-underline text-white cursor-pointer' to="/add">Profile</div>
            </div>
            
            :

            <div className='hidden md:flex gap-4 items-center '>
              <Link className='no-underline text-white hover:scale-105 hover:text-gray-500 active:scale-95 transition-all text-xl' to="/">Log In</Link>
              <div className='h-7 w-0.5 bg-gray-400 rounded-lg'></div>
              <Link to="/signup">

                <button className='text-white text-xl me-3 border p-1 px-3 active:scale-95 rounded-md hover:bg-black transition-all'>
                  Sign Up
                </button>
              </Link>
            </div>}


          <div className='md:hidden flex flex-col gap-1 border p-2 rounded-md hover:bg-gray-600 transition-all cursor-pointer hover:shadow-xl hover:-translate-y-[1px]'>
            <div className='w-7 h-0.5 bg-slate-300 rounded-md'></div>
            <div className='w-7 h-0.5 bg-slate-300 rounded-md'></div>
            <div className='w-7 h-0.5 bg-slate-300 rounded-md'></div>
          </div>

        </nav>

        <Routes>
            <Route path='/' element={<>Home Page</>} />
          <Route element={<PrivateComponent />}>
            <Route path='/products' element={<>All Products</>} />
            <Route path='/add' element={<>Add Products</>} />
            <Route path='/update' element={<>Update Products</>} />
          </Route>
          <Route path='/signup' element={<AddUser setLoggedIn={setLoggedIn} />} />
        </Routes>








        <footer className="text-center text-light text-lg-start bg-secondary ">

          <section className="pt-4">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Company name
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Angular</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">React</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Vue</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Laravel</a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Pricing</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Settings</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Orders</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Help</a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                  </p>
                  <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                  <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                </div>
              </div>
            </div>
          </section>


        </footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
