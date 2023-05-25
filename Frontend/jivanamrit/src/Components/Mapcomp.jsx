import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import "./Map.css";
import EmailIcon from "@mui/icons-material/Email";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
// import Container from 'react-bootstrap/Container';
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Mapcomp = () => {
  const style = {
    overflow: "hidden",
    width: "100%",
    paddingBottom: "50%",
    //    border:"2px solid red",
    position: "relative",
    height: "0px",
  };

  return (
    <>
      <div className="MapMainDiv">
        
        <div style={style}>
          <iframe
            className="iframe"
            style={{
              height: "400px",
              border: "0  px",
              loading: "lazy",
              left: "0px",
              //   position:"absolute",
              top: "0px",
              width: "100%",
            }}
            id="iframe"
            //   width="600"
            //   height="450"
            //   style="border: 0"
            //   loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCJ50P3i-sk5hbxpI4mwppCAkio4ATadi0
                    &q=ayodhya"
          ></iframe>
        </div>

        <div className="MapcontactDiv">
          <h2>Contact us</h2>
          {/* <HorizontalRuleIcon fontSize="large" sx={{ color: "green"}} /> */}
          <br></br>
          <LocationOnIcon fontSize="large" sx={{ color: "red" }} />{" "}
          <span>
            {" "}
            JivanAmrit Ayurveda Vaiydagaon Wazirganj Gonda Ayodhya Road UP
            (271124)
          </span>
          <br></br>
          {/* <br></br> */}
          <AddIcCallIcon fontSize="large" sx={{ color: "green" }} />
          <span>
            <a href="#">+918303576319 / +918543979584</a>
            <br></br>
            {/* <br></br> */}
            <EmailIcon fontSize="large" color="primary" /> &nbsp;&nbsp;
            <span> jivanamrit.com@gmail.com</span>
            <br></br>
            {/* <br></br> */}
            <h5 style={{ color: "green" }}>Follow us</h5>
            <a href="" target="_blank">
              <InstagramIcon fontSize="large" sx={{ color: "red" }} />
            </a>
            <a href="" target="_blank">
              <FacebookIcon fontSize="large" color="primary" />
            </a>
            <a href="" target="_blank">
              <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
            </a>
            <a href="" target="_blank">
              <LinkedInIcon fontSize="large" color="primary" />
            </a>
            <a href="" target="_blank">
              <TwitterIcon fontSize="large" color="primary" />
            </a>
          </span>
        </div>

       
      </div>
    

    </>
  );
};

export default Mapcomp;
