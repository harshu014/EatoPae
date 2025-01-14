import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <>
        <div className='container' style={{marginTop:"80px"}}>
            <div className='container-flex'>
                <div id='rafiki-box'><h5>We generally reply within 24 hours</h5></div>
                <img src='rafiki.png' id='rafiki-img' />
            </div>
            <div className='container-flex'>
                <form>
                    <h4 className='Headng'>Contact Us</h4>
                    <label className='lab'>Name</label> <br/>
                    <input placeholder='Full Name'></input> <br/><br/>

                    <label className='lab'>Email</label> <br/>
                    <input placeholder='your@gmail.com'></input> <br/><br/>

                    <label>Phone No.</label> <br/>
                    <input placeholder='+91 0000000000'></input> <br/><br/>

                    <label>Message :</label> <br/>
                    <textarea placeholder='Enter Your Message Here' rows={5} cols={45}></textarea>

                    <div className='sub'> <p id='Submt'>Submit</p>  </div>
                </form>
            </div>
        </div>

       
       </>
    )
}

export default Contact;
