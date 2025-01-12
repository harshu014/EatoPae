// 
import  React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


export default function Accordian_contact() {
  return (
       <>
     <div className='container'>
     <div className='container-flex'>
      <h2>FAQ's</h2>
    <div>
      <Accordion style={{width:"600px", background:"none", color:"white"}}>
        <AccordionSummary style={{width:"300px", marginLeft:"-1000px", color:"white"}}
          expandIcon={<ArrowDownwardIcon style={{color:"white"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{width:"400px", color:"white", fontSize:"20px"}}>Where Is EatOPae Available</Typography>
        </AccordionSummary>
        <AccordionDetails style={{width:"300px", color:"white"}}>
          <Typography style={{color:"white", marginLeft:"70px", width:"400px"}}>
          we are currently operating in all over Uttar Pradesh and heavily in Kanpur, but are open to all over india 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{width:"600px", background:"none", color:"white"}}>
        <AccordionSummary style={{width:"300px", marginLeft:"-1000px", color:"white"}}
          expandIcon={<ArrowDownwardIcon style={{color:"white"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{width:"400px", color:"white", fontSize:"20px"}}>What is EatOPae  ?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{width:"300px", color:"white"}}>
          <Typography style={{color:"white", marginLeft:"70px", width:"400px"}}>
          we are currently operating in all over Uttar Pradesh and heavily in Kanpur, but are open to all over india 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{width:"600px", background:"none", color:"white"}}>
        <AccordionSummary style={{width:"300px", marginLeft:"-1000px", color:"white"}}
          expandIcon={<ArrowDownwardIcon style={{color:"white"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{width:"400px", color:"white", fontSize:"20px"}}>Where Is EatOPae Available</Typography>
        </AccordionSummary>
        <AccordionDetails style={{width:"300px", color:"white"}}>
          <Typography style={{color:"white", marginLeft:"70px", width:"400px"}}>
          we are currently operating in all over Uttar Pradesh and heavily in Kanpur, but are open to all over india 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{width:"600px", background:"none", color:"white"}}>
        <AccordionSummary style={{width:"300px", marginLeft:"-1000px", color:"white"}}
          expandIcon={<ArrowDownwardIcon style={{color:"white"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{width:"400px", color:"white", fontSize:"20px"}}>Where Is EatOPae Available</Typography>
        </AccordionSummary>
        <AccordionDetails style={{width:"300px", color:"white"}}>
          <Typography style={{color:"white", marginLeft:"70px", width:"400px"}}>
          we are currently operating in all over Uttar Pradesh and heavily in Kanpur, but are open to all over india 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{width:"600px", background:"none", color:"white"}}>
        <AccordionSummary style={{width:"300px", marginLeft:"-1000px", color:"white"}}
          expandIcon={<ArrowDownwardIcon style={{color:"white"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{width:"400px", color:"white", fontSize:"20px"}}>Where Is EatOPae Available</Typography>
        </AccordionSummary>
        <AccordionDetails style={{width:"300px", color:"white"}}>
          <Typography style={{color:"white", marginLeft:"70px", width:"400px"}}>
          we are currently operating in all over Uttar Pradesh and heavily in Kanpur, but are open to all over india 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{width:"600px", background:"none", color:"white"}}>
        <AccordionSummary style={{width:"300px", marginLeft:"-1000px", color:"white"}}
          expandIcon={<ArrowDownwardIcon style={{color:"white"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{width:"400px", color:"white", fontSize:"20px"}}>Where Is EatOPae Available</Typography>
        </AccordionSummary>
        <AccordionDetails style={{width:"300px", color:"white"}}>
          <Typography style={{color:"white", marginLeft:"70px", width:"400px"}}>
          we are currently operating in all over Uttar Pradesh and heavily in Kanpur, but are open to all over india 
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </div>
      </div>

      <div className='container-flex'>
                <form>
                    <h4 className='Headng'>Let Us Reach You</h4>
                    <label className='lab'>Name</label> <br/>
                    <input placeholder='Full Name'></input> <br/><br/>

                    <label className='lab'>Email</label> <br/>
                    <input placeholder='your@gmail.com'></input> <br/><br/>

                    <label>Phone No.</label> <br/>
                    <input placeholder='+91 0000000000'></input> <br/><br/>

                    <label className='lab'>Outlet</label> <br/>
                    <input></input> <br/><br/>

                    <div className='sub'> <p id='Submt'>Submit</p>  </div>
                </form>
            </div>
      </div>
     </> 
  );
}

// import React from 'react'

// const Accordian_contact = () => {
//   return (
//     <div>Accordian_contact</div>
//   )
// }

