import React from "react";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../Images/girl.jpg";
import { Container } from "@mui/material";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../Images/Background.jpg";
import logo from "../Images/jivanamrit.png";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import owner from "../Images/owner.jpg";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ButtonBase from "./ButtonBase";
import Mapcomp from "./Mapcomp";

const Homepage = () => {
  const theme = useTheme();

  const data = [
    "https://www.bestherbs.in/wp-content/uploads/2020/01/Ayurveda-business-opportunity-in-India.jpg",
'https://w.forfun.com/fetch/56/561709675be5fecdb0492b77a4f184c7.jpeg',
    "https://thumbs.dreamstime.com/b/healing-herbs-wooden-table-herbal-medicine-24030906.jpg",
    'https://w0.peakpx.com/wallpaper/938/111/HD-wallpaper-green-blue-shades-leaves-water-drops-black-background-dark-blue.jpg',

    "https://images.pexels.com/photos/9575086/pexels-photo-9575086.jpeg?cs=srgb&dl=pexels-axmarkazi-babaiyan-9575086.jpg&fm=jpg",
    'https://img.freepik.com/premium-photo/green-tropical-leafy-plants-dark-purple-as-floral-background-generative-ai_191095-1834.jpg',

    "https://thumbs.dreamstime.com/b/natural-herbal-medicine-fresh-herbs-flowers-aromatherapy-essential-oil-mortar-pestle-scissors-hemp-paper-102329035.jpg",

    "https://st2.depositphotos.com/1005563/5207/i/950/depositphotos_52076229-stock-photo-dried-medical-herbs.jpg",

    "https://media.istockphoto.com/id/1019597966/photo/herbs.jpg?s=612x612&w=0&k=20&c=ZcsO72g511QJeVhnpoYlYENXcVBb5Yawavy_FMMhBJU=",

    // "https://st2.depositphotos.com/4760391/7188/i/950/depositphotos_71885923-stock-photo-chives-thyme-basil-rosemary-and.jpg",

    "https://media.istockphoto.com/id/504069254/photo/fresh-herbs-on-wooden-background.jpg?s=612x612&w=0&k=20&c=UmuG3l9qSQDu0cOjjVG-9lfTMEYoOYoILa7oYGGsRmc=",
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mainDivhome">
      <Carousel
        responsive={responsive}
        showDots={false}
        autoPlaySpeed={3000}
        autoPlay={true}
        swipeable={true}
        infinite={true}
        draggable={true}
        transitionDuration={2000}
      >
        {data.map((item) => {
          return (
            <div>
              {/* <h1>hii</h1> */}
              <div className="cardh">
                <img
                  className="imagecarh"
                  src={item}
                  width={"100%"}
                  height={"441px"}
                  alt="item"
                />
                <div className="overlayh">
                  <div className="jivanDivmain">
                    <h2 className="vertical-text" style={{ color: "white" }}>
                      JivanAmrit
                    </h2>
                  </div>

                  <div className="texth">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus, doloremque nulla commodi minima ipsam
                    perspiciatis quidem? Mollitia voluptatem velit ullam dolorum
                    obcaecati laborum veniam corporis sapiente repudiandae.
                    Magnam, quam neque.
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>

      <div>
        {" "}
        <h1
          style={{
            color: "rgb(77, 60, 60)",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          ~Jivan Amrit~
        </h1>
      </div>

      <Box className="ownerdiv">
        <Box
          className="ownerdiv1"
          style={{  textAlign: "center" }}
        >
          <h3>Jivan Amrit</h3>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo
            voluptatem at ipsum tempore ea eaque beatae aut alias, voluptatibus
            similique nulla eos doloribus, sequi repellendus sed rerum. Odio,
            tenetur quo sit earum esse sequi labore nobis, facere mollitia
            inventore totam velit ex debitis exercitationem! Consectetur
            temporibus ex rerum ab!
          </p>{" "}
        </Box>
        <Box className="ownerdiv2">
          <img src={owner} width="100%" alt="" />
        </Box>
      </Box>



      <div>
        {" "}
        <h1
          style={{
            color: "rgb(77, 60, 60)",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          ~Ayurvedic Quotes~
        </h1>
      </div>

      <div className="cardhomepage">


        <div className="boxhome">
         <div> <img
            src="https://images.pexels.com/photos/9575086/pexels-photo-9575086.jpeg?cs=srgb&dl=pexels-axmarkazi-babaiyan-9575086.jpg&fm=jpg"
            width={"100%"}
            alt=""
          />  <Typography className="boxhometypo">
            “The Ayurvedic route to great health involves two simple steps: 1.
            Doing less; 2. Being more.”
          </Typography>
          </div>
        
        </div>



        <div className="boxhome">
        <div>   <img
            src="https://st2.depositphotos.com/1005563/5207/i/950/depositphotos_52076229-stock-photo-dried-medical-herbs.jpg"
            width={"100%"}
            alt=""
          /><Typography className="boxhometypo">
            “Ayurveda will be known as the most supremely evolved system of
            perfect health - from both points of view. prevention and cure.”
          </Typography></div>

          
        </div>
        


        <div className="boxhome">
         <div> <img
            src="https://media.istockphoto.com/id/1019597966/photo/herbs.jpg?s=612x612&w=0&k=20&c=ZcsO72g511QJeVhnpoYlYENXcVBb5Yawavy_FMMhBJU="
            width={"100%"}
            alt=""
          /> <Typography className="boxhometypo">
            “Ayurveda teaches us to cherish our innate-nature - "to love and
            honor who we are", not as what people think or tell us, “who we
            should be.”
          </Typography></div>

         
        </div>
        <div className="boxhome">
         <div> <img
            src="https://st2.depositphotos.com/4760391/7188/i/950/depositphotos_71885923-stock-photo-chives-thyme-basil-rosemary-and.jpg"
            width={"100%"}
            alt=""
          />
            <Typography className="boxhometypo">
            “The great thing about Ayurveda is that its treatments always yield
            side benefits, not side effects.”
          </Typography>
          </div>

        
        </div>
      </div>

      <div className="textmain">
        <h1>What is Ayurveda?</h1>
        <div>
          <h3>
            Ayurveda is a 5,000-year-old lifestyle science that promotes
            proactive and preemptive approaches to personal health and wellness.
            In Sanskrit the word āyuh means “life” and veda means “knowledge or
            science”.
          </h3>
        </div>
        <div>
          <p>
            Originating in the Indus Valley, what is now modern-day India,
            Ayurveda is a science of self-healing and encompasses diet and
            nutrition, lifestyle, meditation, postures, breathing exercises, and
            medical herbs along with cleansing and rejuvenation programs for
            healing body, mind, and spirit.
          </p>
          <p>
            Ayurveda is truly a holistic approach to wellness, and as a
            lifestyle medicine, it works! There’s a reason it has survived for
            5,000 across generations, and the Ayurvedic Institute is a part of
            this generation’s movement to translate this ancient science into
            today’s living and pass on this knowledge to future generations.
          </p>
        </div>
      </div>

      <div className="buttonimg">
        <ButtonBase url={`https://t4.ftcdn.net/jpg/03/20/60/27/360_F_320602708_4pxpvPoUr8YshKwM9O1a5UH2NZ6WNUJH.jpg`} title={"Ayurveda"} />
      </div>

      {/* <Container style={{display:"flex"}} className='cardDiv'>
    <Container className='imgdiv'> <img className='imgcard' src={img1} alt='img1'/>
  </Container>
    <Container className='desDiv'> <h2>You ask or search about Ayurveda and you will find that Ayurveda is made up of two words-

Ayu and Veda and these are told as Ayu= Life and Veda = the knowledge.

So meaning of Ayurveda comes to be Knowledge of the Life!</h2></Container>
   </Container> */}

      <div className="spiceDiv">
        <h1 style={{ margin: "20px 0px 30px 30px", }}>
          Power of Ayurvedic Herbs and Spices :-
        </h1>
      </div>

      <div className="CircleDiv">
        <Container className="contcir">
          <Card className="home3card" style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/id/1298434383/photo/jars-of-spices.jpg?b=1&s=170667a&w=0&k=20&c=AiH7m0His_y1-yQIrncAGoPLdOOq5hqJxkZpYMbKs20="
              width={"100%"}
            />
            <Card.Body>
              <Card.Title className="spice">Ayurvedic Spices</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="" className="spiceb">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Container>

        <Container className="contcir">
          <Card className="home3card" style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src="https://thumbs.dreamstime.com/b/ayurveda-16037170.jpg"
              width={"100%"}
            />
            <Card.Body>
              <Card.Title className="flower">Ayurvedic Flowers</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="flowerb" variant="">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Container>

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
     
     <div>
      <Mapcomp/>
     </div>
      
    </div>
  );
};

export default Homepage;
