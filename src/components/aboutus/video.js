import React from "react";
import "./videostyle.css";
import bgVideo from "./beachVid.mp4";
import TestBar from "./testbar";
import AboutFooter from "./Afooter";
import Card from "./card/card";
import Typical from "react-typical";
import { MDBCardText } from "mdb-react-ui-kit";

const Video = () => {
  return (
    <>
      <TestBar />
      <div className="hero">
        <video autoPlay loop muted id="video">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="content">
          <h1>About Us</h1>
          <p>Team DuckDuckGoose</p>

          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100009880032344"
              target="_blank"
              className="btn"
            >
              Contact Us
            </a>
            <a
              href="https://github.com/IAMTHEMACHINE33/Anetiquette_front"
              target="_blank"
              className="btn btn-light"
            >
              GitHub Repo
            </a>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <div
        className="subtopic"
        style={{
          backgroundColor: "#8a8169",
          opacity: 0.9,
        }}
      >
        <p
          className="lead fw-normal mb-1"
          style={{
            "text-align": "center",
            "font-size": "30px",
            fontFamily: "Garamond",
          }}
        >
          {" "}
          <hr /> <hr />
          What is Antiquete?
          <hr />
          <div className="p-4">
            <MDBCardText
              className="font-italic mb-1"
              style={{
                "font-family": "Bookman Old Style",
                "font-size": "17px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              ornare lectus sit amet est. Duis at consectetur lorem donec massa
              sapien faucibus et molestie. Placerat in egestas erat imperdiet.
              Consectetur lorem donec massa sapien faucibus et molestie ac. Mi
              quis hendrerit dolor magna eget est. Sollicitudin tempor id eu
              nisl nunc mi ipsum. Dictum non consectetur a erat nam at lectus
              urna duis. Facilisis mauris sit amet massa. Aliquam sem et tortor
              consequat id porta nibh venenatis. Facilisis magna etiam tempor
              orcieu lobortis elementum nibh. Magna fermentum iaculis eu non
              diam phasellus vestibulum lorem sed. Quam nulla porttitor massa id
              neque aliquam vestibulum.
              <br />
              <br />
              Pulvinar proin gravida hendrerit lectus. Sagittis aliquam
              malesuada bibendum arcu vitae elementum curabitur vitae nunc.
              Augue neque gravida in fermentum et sollicitudin ac orci. Sagittis
              orci a scelerisque purus semper. Facilisis leo vel fringilla est
              ullamcorper eget. Viverra accumsan in nisl nisi scelerisque eu
              ultrices vitae auctor. Arcu cursus euismod quis viverra. Massa id
              neque aliquam vestibulum morbi blandit cursus risus at. Morbi non
              arcu risus quis varius. Tristique risus nec feugiat in. In metus
              vulputate eu scelerisque felis. Amet venenatis urna cursus eget
              nunc scelerisque. Habitant morbi tristique senectus et netus et
              malesuada. Mauris pharetra et ultrices neque ornare aenean
              euismod. Feugiat in ante metus dictum at. Sed blandit libero
              volutpat sed cras. Venenatis cras sed felis eget velit aliquet
              sagittis. Quis auctor elit sed vulputate mi sit amet mauris.
              Tincidunt lobortis feugiat vivamus at augue eget arcu dictum.
              Lectus arcu bibendum at varius vel pharetra vel. Aenean vel elit
              scelerisque mauris. Tellus molestie nunc non blandit massa enim
              nec dui nunc. Odio pellentesque diam volutpat commodo sed egestas
              egestas. Volutpat est velit egestas dui id.
            </MDBCardText>
            <hr />
          </div>
        </p>
      </div>
      <br />
      <br />
      <br />
      <Card />
      <AboutFooter />
    </>
  );
};

export default Video;
