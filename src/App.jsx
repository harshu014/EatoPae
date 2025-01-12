import React from 'react';
import './App.css';
import { FaArrowRight } from "react-icons/fa";
import Footer from './components/Footer';
import Contact from './components/Contact';
import Marquee from 'react-fast-marquee';
import Accordian from './components/Accordian_contact';

const App = () => {
  return (
    <>
      <div className='FA'>
        {/* <nav>
          <div className='container'>

            <img src='logo-eatopae@2x.png' id='logo' />
            <div className='container'>
              <h1>For Customers</h1>
              <h1 id='H'>For Merchants</h1>
              <button>Contact Us</button>
            </div>
          </div>
        </nav> */}

        <div className='IO'>
          <h2>Reimagining dining with<br />
            <span>Intelligent Ordering</span></h2>
        </div>

        <div id='Str'>
          <h3>Streamline operations for merchants, delight customers with <br /> seamless dining experiences, and revolutionize how <br /> restaurants work—one table at a time.</h3>
        </div>

        <div id='GSN'>
          <h4>GET STARTED TODAY</h4>
          <FaArrowRight id='Ar'/>

        </div>
      </div>

      <div id='BUILD'> <p id='BD'>BUILD FOR EVERY TYPE OF FOOD BUSINESSES </p></div>
      
      <div className='icon_container'>
     
        
        <div className='box'>
        {/* <Marquee>
        <div>
          <img src='carbon_cafe.png' className='icon' />
          <h2 className='icon-text'>Cafe</h2>
        </div>

        <div>
          <img src='ice-cream.png' className='icon-t' />
          <h2 className='icon-text'>Icecream Parlour</h2>
        </div>

        <div>

          <img src='dish.png' className='icon' />
          <h2 className='icon-text'>Fine Dine</h2>
        </div>

        <div>
          <img src='pizza.png' className='icon' />
          <h2 className='icon-text'>Pizzeria</h2>
        </div>

        <div>
          <img src='drink.png' className='icon-t' />
          <h2 className='icon-text'>Bar & Brewery</h2>
        </div>


        <div>
          <img src='Bread.png' className='icon' />
          <h2 className='icon-text'>Bakery</h2>
         
        </div>
        </Marquee> */}

        
        </div>
      </div>

      {/* 50-50 % dividing screen */}
      <div className='flex-box'>
        <div>
          <p id='p1'>What do we offer for <br /> the<span> customer panel</span>?</p>
          <p id='p2'>A sleek, user-friendly device placed at every <br /> table, designed to enhance the dining <br /> experience. Diners can browse menus, <br /> customize orders, and place them directly <br /> without waiting for staff.</p>
          <div className='explore'><img src='rightarrow.png' className='Arrow'/></div>
        </div>
        <div className='flex-1'>
          <img src='new1.png'/>

        </div>
      </div>

      <div className='flex-box'>
        <div>
          {/* <p id='p1'>What do we offer for <br/> the<span> customer panel</span>?</p>
          <p id='p2'>A sleek, user-friendly device placed at every <br/> table, designed to enhance the dining <br/> experience. Diners can browse menus, <br/> customize orders, and place them directly <br/> without waiting for staff.</p>
         */}
          <img src='new2.png' id='G2' />
        </div>
        <div className='flex-1'>
          <p id='p1'>What do we offer for <br />   the<span>  admin panel</span>?</p>
          <p id='p2'>A Powerful and intuitive tool designed to <br/> streamline restaurant operations. It <br/>  enables staff to manage orders from every <br/>  table in real-time, track delivery orders <br/> from third party platforms and <br/>  
          monitor payment easily.</p>

          <div className='explore'><img src='leftarrow.png' className='Arrow'/></div>
        </div>
      </div>




      {/* <div>
      <img src='Frame183.png'/>
    </div> */}
      <div className='back-frame'>
       
        
        <h5 id='Int'>Integrated with your favorite Food Ordering Application <br/>
       <span>Analyze and optimize your restaurant’s performance with dedicated insights for <br /> dine-in and food delivery platforms.</span></h5>
        <div className='container'>
          <img src='zomato.png' className='delivery-icons' />

          <img src='swiggy.png' className='delivery-icons' />
          <img src='Eat.png' className='delivery-icons' />
        </div>
        </div>
     
      <div id='testimonials'>“
       <div>  <p id='test'>TESTIMONIALS</p> </div>
        <p id='client' style={{marginTop:"50px"}}>What Our Client Says</p>
       <div>
        <Marquee pauseOnHover speed={100} style={{marginTop:"50px"}}>
          <img src='review1.png' className='rev-img'/>
          <img src='review2.png' className='rev-img'/>
          <img src='review3.png' className='rev-img'/>
        </Marquee>
       </div>
      </div>

      <Contact/>
     
      <Footer />
    </>
  )
}

export default App;