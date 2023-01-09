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
          <div
            className="dump p-4"
            style={{
              "font-family": "Bookman Old Style",
              "font-size": "17px",
            }}
          >
            {/* <MDBCardText
              className="font-italic mb-1"
              style={{
                "font-family": "Bookman Old Style",
                "font-size": "17px",
              }}
            > */}
            AntiQuette is an online platform that allows people
            to buy and sell antique and vintage items through an auction format.
            The website typically features a wide variety of antiques,
            including furniture, jewelry, art, collectibles, and other rare or
            unique items. To use the website, users must first
            create an account and provide basic personal information, such as
            their name and email address. They can then browse through the
            available items and place bids on items that they are interested in
            purchasing. Bids are typically placed in increments, with the
            current high bidder winning the auction if no one outbids them
            before the auction ends. Some antique bidding websites also offer a
            "buy it now" option, which allows users to purchase an item at a
            fixed price rather than participating in an auction. This can be a
            convenient option for users who don't want to wait for an auction to
            end or who are willing to pay a premium for an item that they really
            want. 
            <br />
            <br />
            AntiQuette often has strict rules in place to
            ensure that transactions are fair and that buyers receive the items
            that they purchase. For example, many websites have detailed
            descriptions and photographs of each item, as well as policies in
            place to protect against fraud or misrepresentation. In addition to
            providing a marketplace for antiques, AntiQuette
            also offer resources for collectors, such as articles, forums, and
            expert advice. These resources can be helpful for collectors who are
            looking to learn more about a particular type of antique or who want
            to connect with other collectors. Overall, antique bidding websites
            are a convenient and efficient way for people to buy and sell
            antique and vintage items. We offer a wide selection of items, as
            well as resources and support for collectors, making them a popular
            choice for people interested in antiques.
            {/* </MDBCardText> */}
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
