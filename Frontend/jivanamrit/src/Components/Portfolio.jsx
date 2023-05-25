import React from "react";
import Mapcomp from "./Mapcomp";
import Topimage from "./Topimage";
import ButtonBase from "./ButtonBase";
import FlipImage from "./FlipImage";
import matra from "../Images/matrachrya.png";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <div>
        <Topimage
          item={
            "https://w0.peakpx.com/wallpaper/938/111/HD-wallpaper-green-blue-shades-leaves-water-drops-black-background-dark-blue.jpg"
          }
          heading={"Portfolio"}
        />
      </div>

      <div>
        <h2 style={{ textAlign: "center", color: "", margin: "30px" }}>
          Our Websites
        </h2>
      </div>
      <div className="flipparentdiv">
        <div>
          <div class="flip-boxport">
            <div class="flip-box-innerport">
              <div class="flip-box-frontport">
                <img src={matra} width={"100%"} height={"400px"} alt="" />
                <h2></h2>
              </div>
              <div class="flip-box-backport">
                <img
                  src="https://res.cloudinary.com/raj4485cloud/image/upload/v1684918347/t0qqdckvhoq0p94ir2tm.jpg"
                  width={"100%"}
                  alt=""
                />

                <h2></h2>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="flip-boxport">
            <div class="flip-box-innerport">
              <div class="flip-box-frontport">
                <img src={matra} width={"100%"} height={"400px"} alt="" />
                <h2></h2>
              </div>
              <div class="flip-box-backport">
                <img
                  src="https://res.cloudinary.com/raj4485cloud/image/upload/v1684918347/t0qqdckvhoq0p94ir2tm.jpg"
                  width={"100%"}
                  alt=""
                />

                <h2></h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  className="portfoliomid">
            <div width={"100%"}>
              <ButtonBase url={matra} title={"Matracharya"} />
            </div>

            <div width={"50%"}>
              <h5>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
                eveniet aspernatur alias possimus odio enim ipsa vitae est quisquam
                cum ducimus corrupti dolores voluptatum quasi quia voluptate eos
                esse officiis?
              </h5>
            </div>
      </div>



      <div className="portfoliomid">
            <div width={"100%"}>
              <ButtonBase url={matra} title={"Matracharya"} />
            </div>

            <div width={"50%"}>
              <h5>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
                eveniet aspernatur alias possimus odio enim ipsa vitae est quisquam
                cum ducimus corrupti dolores voluptatum quasi quia voluptate eos
                esse officiis?
              </h5>
            </div>
      </div>



      <div>
        <Mapcomp />
      </div>
    </div>
  );
};

export default Portfolio;