import React from "react";
import Carousel from "../Carousel";
import Navigate from "../common/nav";
import Footer from "../common/Footer";
import Group from "../Group";
import Feature from "../Feature";

export const Home = () => {
  return (
    <>
      <div className="home_container">
        <Navigate />
        <Carousel />

        <Group />
        <Feature />
        <div className="container d-flex p-3 mt-5">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="container">
              <img
                className="about_home_img"
                src="https://media.istockphoto.com/id/1072095792/vector/people-at-auction-of-art-flat-poster.jpg?s=612x612&w=0&k=20&c=3yCurYK7LWujO34z8xoiKpuP1a5FrFOBOjBV6GiQPsI="
              ></img>
            </div>
            <div className="container about_text text-center p-3">
              <div>
                <h2>Why bid on this?</h2>

                <p className="my-4 p-2">
                  "It's sort of a trick question. Because when you say to a
                  salesman, 'Sell me this pen,' you might find some will say to
                  you, 'This is a great pen, this pen writes upside down. It
                  defies gravity, this pen is the cheapest pen on earth, this
                  pen will never run out.' They'll say all the reasons the pen
                  is good, they'll start telling you the features, and the
                  better ones will give you the benefits too. But that's not
                  what the real answer is....
                </p>
                <button className="readmore" href="/about"> READ MORE</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
