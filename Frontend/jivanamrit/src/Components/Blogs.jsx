import React from 'react'
import Topimage from './Topimage'
import Mapcomp from './Mapcomp'
import { Container } from "@mui/material";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import  './Blogs.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Blogs = () => {
  return (
    <div>
        <div>
            <Topimage item={'https://www.vectornator.io/blog/content/images/2022/03/610963083219da6a0a00ccb6_Cover-Dark-2.png'} heading={"Blogs"}/>
        </div>



      <div className='Maindivblog'> 
       
         <h4>Effective Ayurvedic Treatment for Psoriasis at Vaidya Health Care</h4>
           <hr></hr>
        <CalendarMonthIcon color="success"/> Date :09-Oct-2019

       <div className='subdivblog'>
        <div >
            <img src="https://images.everydayhealth.com/images/skin-beauty/psoriasis/psoriasis-and-scarring-how-to-stop-the-pattern-1440x810.jpg?sfvrsn=d28d4091_0" width={"100%"} alt="" />
        </div>
        <div className='contentdivblog'>
            
A Quick look into Psoriasis Psoriasis, an autoimmune disorder is characterized by the scaly, dry and red patches on the skin. It is considered to be a chronic skin condition. It is non-infectious in nature.   With treatment methodologies tested over the centuries, Ayurveda offers the most effective and dependable solution to the disease.   What Cause Psoriasis?Common factors causing psoriasis include:- Lifestyle variations Heredity Stress Side effect of certain medications Environmental factors Symptoms of Psoriasis Psoriasis is characterized by the following symptoms:- Reddish

        </div>
       </div>
      </div>



      <div className='Maindivblog'> 
       
         <h4>Effective Ayurvedic Treatment for Psoriasis at Vaidya Health Care</h4>
           <hr></hr>
        <CalendarMonthIcon color="success"/> Date :09-Oct-2019

       <div className='subdivblog'>
        <div >
            <img src="https://images.everydayhealth.com/images/skin-beauty/psoriasis/psoriasis-and-scarring-how-to-stop-the-pattern-1440x810.jpg?sfvrsn=d28d4091_0" width={"100%"} alt="" />
        </div>
        <div className='contentdivblog'>
            
A Quick look into Psoriasis Psoriasis, an autoimmune disorder is characterized by the scaly, dry and red patches on the skin. It is considered to be a chronic skin condition. It is non-infectious in nature.   With treatment methodologies tested over the centuries, Ayurveda offers the most effective and dependable solution to the disease.   What Cause Psoriasis?Common factors causing psoriasis include:- Lifestyle variations Heredity Stress Side effect of certain medications Environmental factors Symptoms of Psoriasis Psoriasis is characterized by the following symptoms:- Reddish

        </div>
       </div>
      </div>




      
      <div className='Maindivblog'> 
       
         <h4>Effective Ayurvedic Treatment for Psoriasis at Vaidya Health Care</h4>
           <hr></hr>
        <CalendarMonthIcon color="success"/> Date :09-Oct-2019

       <div className='subdivblog'>
        <div >
            <img src="https://images.everydayhealth.com/images/skin-beauty/psoriasis/psoriasis-and-scarring-how-to-stop-the-pattern-1440x810.jpg?sfvrsn=d28d4091_0" width={"100%"} alt="" />
        </div>
        <div className='contentdivblog'>
            
A Quick look into Psoriasis Psoriasis, an autoimmune disorder is characterized by the scaly, dry and red patches on the skin. It is considered to be a chronic skin condition. It is non-infectious in nature.   With treatment methodologies tested over the centuries, Ayurveda offers the most effective and dependable solution to the disease.   What Cause Psoriasis?Common factors causing psoriasis include:- Lifestyle variations Heredity Stress Side effect of certain medications Environmental factors Symptoms of Psoriasis Psoriasis is characterized by the following symptoms:- Reddish

        </div>
       </div>
      </div>



<div>
<Container className="contcir">
          <Card className="home3card" style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src="https://fortmirrorprod.s3-ap-south-1.amazonaws.com/626532/healhTipsFolder/23801545210578418.jpg"
              width={"100%"}
            />
            <Card.Body>
              <Card.Title className="herb">Ayurvedic Herbs</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="" className="herbb">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>

          
        </Container>
</div>

      <div><Mapcomp/></div>
    </div>
  )
}

export default Blogs

