import { Container } from '@mui/material'
import React from 'react'
import Drawer from './Drawer'
import logo from '../Images/jivanamrit.png'
import img from '../Images/bg2.jpg'



import { CardActionArea } from "@mui/material";
import './Aboutus.css'
import Button from 'react-bootstrap/esm/Button'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import owner from '../Images/owner.jpg'

import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardOverlay,
    MDBCardImage
  } from 'mdb-react-ui-kit';
import Topimage from './Topimage'
import Mapcomp from './Mapcomp'

const Aboutus = () => {
  const theme = useTheme();

  return (
    <div>


    <Topimage item={"https://i.fbcd.co/products/original/333674d9e36a34f9fce48213279cceb5b457bafe042e7943cee0fcefe0ab64a8.jpg"} heading={"About Us"}/>




    <Box className="ownerdivabt">

<Box className="ownerdiv1abt"  style={{color:"rgb(77, 60, 60)", textAlign:"center"}}><h3>Jivan Amrit</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo voluptatem at ipsum tempore ea eaque beatae aut alias, voluptatibus similique nulla eos doloribus, sequi repellendus sed rerum. Odio, tenetur quo sit earum esse sequi labore nobis, facere mollitia inventore totam velit ex debitis exercitationem! Consectetur temporibus ex rerum ab!</p> </Box>
<Box className="ownerdiv2abt"><img src={owner} width ="100%" alt="" /></Box>
</Box>


   






    <div style={{color:"rgb(77, 60, 60)", textAlign:"center",marginBottom:"40px"}}>
      <h1>Powerful Ayurvedic Practices</h1>
    </div>



     <Container className="aboutContainer" style={{ display: "flex" }}>
        <Container className="cardmedia">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://img.freepik.com/premium-photo/man-sits-lotus-pose-person-practices-yoga-meditation-radiating-energy-generative-ai_788189-3992.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Meditation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Meditation can include anything from breath awareness to
                  moving meditation or yoga. Choose the ones that resonate with
                  you and stick with them. The more you practice, the easier it
                  will become.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>

        <Container className="cardmedia">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://t3.ftcdn.net/jpg/02/44/98/64/360_F_244986473_ZA74HdZIJ7DKdzMFI8gfj4rki77RjXN9.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pranayama
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Deep diaphragmatic breathing clears the lungs of carbon
                  dioxide, and increases oxygen intake, providing you body with
                  more vital energy. Deep belly breathing also massages your
                  internal organs and promotes digestion by stimulating
                  metabolism and encouraging peristalsis.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>

        <Container className="cardmedia">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://media.istockphoto.com/id/491242324/photo/no-such-thing-as-too-much-pampering.jpg?b=1&s=170667a&w=0&k=20&c=mkAwNTjcwEcVCUz9uxki68C2IXthC-2mEeGPCOJeHCY="
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Massage
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Numerous studies have shown the amazing health benefits of
                  massage, including lowered blood pressure, increased muscle
                  tone, stress reduction, and increased lymphatic flow (thereby
                  reducing edema). The National Institute of Health did a study
                  in 2009 concluding that abdominal massage successfully reduced
                  constipation and increased bowel movements.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Container>

     
     



      <Box className="ownerdivabt">

<Box className="ownerdiv2abt">

<iframe width="660" height="350" src="https://www.youtube.com/embed/S_L6Ato1ndk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


  </Box>
<Box className="ownerdiv1abt"  style={{color:"rgb(77, 60, 60)", textAlign:"center"}}><h3>Jivan Amrit</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo voluptatem at ipsum tempore ea eaque beatae aut alias, voluptatibus similique nulla eos doloribus, sequi repellendus sed rerum. Odio, tenetur quo sit earum esse sequi labore nobis, facere mollitia inventore totam velit ex debitis exercitationem! Consectetur temporibus ex rerum ab!</p> 
 <Button variant='danger'>See More Videos</Button>
</Box>

</Box>






<div><Mapcomp/></div>

    </div>
  )
}

export default Aboutus
