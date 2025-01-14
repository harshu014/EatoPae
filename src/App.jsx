import React from 'react';
import './App.css';
import { FaArrowRight } from "react-icons/fa";
import Footer from './components/Footer';
import Contact from './components/Contact';
import Marquee from 'react-fast-marquee';
import zomato from './assets/zomato.svg'
import swiggy from './assets/swiggy.svg'
import eatsure from './assets/eatsure.svg'
import pattern from './assets/pattern-cut.svg'



const App = () => {
  return (
    <>
      <div className='FA'>


        <div className='IO'>
          <h2>Reimagining dining with<br />
            <span>Intelligent Ordering</span></h2>
        </div>

        <div id='Str'>
          <h3>Streamline operations for merchants, delight customers with <br /> seamless dining experiences, and revolutionize how <br /> restaurants work—one table at a time.</h3>
        </div>

        <div id='GSN'>
          <h4>GET STARTED TODAY</h4>
          <FaArrowRight id='Ar' />

        </div>
      </div>

      <div id='BUILD'> <p id='BD'>BUILD FOR EVERY TYPE OF FOOD BUSINESSES </p></div>
      

      {/* <div className='icon_container'>


        <div className='box'>
          <Marquee>
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
          </Marquee>


        </div>
      </div> */}
  


      {/* 50-50 % dividing screen */}
      \<section className="customer_page">
        <div className="page-content-box">
          <div className="page-content">
            <p id='p1'>What do we offer for <br /> the<span> customer panel</span>?</p>
            <p id='p2'>A sleek, user-friendly device placed at every <br /> table, designed to enhance the dining <br /> experience. Diners can browse menus, <br /> customize orders, and place them directly <br /> without waiting for staff.</p>
            
              <center>
              <a className='Exp-button'>  Explore More &rarr; </a>
            </center>
          </div>
          <div className="content-img">
            <center>
              <img src='new1.png' alt="" />
            </center>
          </div>
        </div>
        <div className="page-content-box">
          <div className="content-img">
            <center>
              <img src='new2.png' alt="" />
            </center>
          </div>

          <div className="page-content">
            <p id='p1'>What do we offer for <br />   the<span>  admin panel</span>?</p>
            <p id='p2'>A Powerful and intuitive tool designed to <br /> streamline restaurant operations. It <br />  enables staff to manage orders from every <br />  table in real-time, track delivery orders <br /> from third party platforms and <br />
              monitor payment easily.</p>
           
              <center>
                
                <a className='Exp-button'> &larr; Explore More </a>
                </center></div>
          
        </div>
      </section>




      {/* <div>
      <img src='Frame183.png'/>
    </div> */}
      {/* <div className='back-frame'>


        <h5 id='Int'>Integrated with your favorite Food Ordering Application <br />
          <span>Analyze and optimize your restaurant’s performance with dedicated insights for <br /> dine-in and food delivery platforms.</span></h5>
        <div className='container'>
          <img src='zomato.png' className='delivery-icons' />

          <img src='swiggy.png' className='delivery-icons' />
          <img src='Eat.png' className='delivery-icons' />
        </div>
      </div> */}

<section className="foodsites">
        <img src={pattern} alt="" className="pattern-img"/> 
        <div className="foodsite-info">
         <p>Integrated with your favorite Food Ordering Applications</p>
         <center>
         <span>Analyze and optimize your restaurant’s performance with dedicated insights for dine-in and food delivery platforms.</span>
         </center>

         <div className="site-icons">
            <img src={zomato} alt="" />
            <img src={swiggy} alt="" />
            <img src={eatsure} alt="" />
         </div>
        </div>

    </section>

      <div id='testimonials'>“
        <div>  <p id='test'>TESTIMONIALS</p> </div>
        <p id='client' style={{ marginTop: "50px" }}>What Our Client Says</p>
        <div>
          <Marquee pauseOnHover speed={100} style={{ marginTop: "50px" }}>
            <img src='review1.png' className='rev-img' />
            <img src='review2.png' className='rev-img' />
            <img src='review3.png' className='rev-img' />
          </Marquee>
        </div>
      </div>

      <Contact />

      <Footer />

    </>
  )
}

export default App;
