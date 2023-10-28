import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { LiaShoppingBagSolid } from 'react-icons/lia';
import {AiOutlineSearch} from 'react-icons/ai';
import { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';

const Navbar = () => {
  const {user,logout} = useContext(AuthContext)
  const handlelogout = ()=>{
    logout()
    .then(()=>{})
    .catch(error => console.log(error))

  }
    const link = <>
    <li className='mr-3'><NavLink to='/'>Home</NavLink></li>
    <li className='mr-3'><NavLink to='/about'>About</NavLink></li>
    <li className='mr-3'><NavLink to='/services'>Services</NavLink></li>
    <li className='mr-3'><NavLink to='/blog'>Blog</NavLink></li>
    {
      user?.email ? <>
      <li><button onClick={handlelogout}>Logout</button></li>
      <li><NavLink to='/orders'>All orders</NavLink></li>

      </>
    :
    <li className='mr-3'><NavLink to='/login'>Login</NavLink></li>
    }
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {link}
            </ul>
          </div>  
          <aside>
           <Link to= '/'> <img className='mb-0 w-24'  src={logo} alt="" /></Link><br></br>
            <p className='-mt-5'>Car Doctor</p>
            </aside>    
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {link}
          </ul>
        </div>
        <div className="navbar-end">
        <div className='flex'>
        <LiaShoppingBagSolid className='mr-4'></LiaShoppingBagSolid>
        <AiOutlineSearch className='mr-4'></AiOutlineSearch>
        </div>
         <a className='border border-red-600 p-2 text-red-600 font-semibold rounded-md hover:bg-orange-500 hover:text-white'>Appointment</ a>
        </div>
      </div>
    );
};

export default Navbar;