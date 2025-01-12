import React, { useState } from 'react';
import './Navbar.css';
import { Outlet,Link } from 'react-router-dom';


const Navbar = () => {
  //   const [isResponsive, setIsResponsive] = useState(false);

  // const toggleResponsive = () => {
  //   setIsResponsive(!isResponsive);
  // };
    return (
        <>
            <nav>
                <div className='container'>

                  <Link to='/'>  <img src='logo-eatopae@2x.png' id='logo' /> </Link>
                    <div className='container'>
                       <h1> <Link to='/Customer'>For Customers</Link></h1> 
                        <h1 id='H'>
                           
                            <Link to='/Merchant'>For Merchants</Link>
                            </h1>
                        <button>Contact Us</button>
                    </div>
                </div>
            </nav>
             {/* <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
      <Link to='/'>  <img src='logo-eatopae@2x.png' id='logo' /> </Link> */}
      {/* <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a> */}
      {/* <div className='container'>
                       <h1> <Link to='/Customer'>For Customers</Link></h1> 
                        <h1 id='H'>
                           
                            <Link to='/Merchant'>For Merchants</Link>
                            </h1>
                        <button>Contact Us</button>
                    </div>
      <a href="javascript:void(0);" className="icon" onClick={toggleResponsive}>
        <GiHamburgerMenu/>
      </a>
    </div> */}

            <Outlet />

            
        </>

    )
}

export default Navbar;