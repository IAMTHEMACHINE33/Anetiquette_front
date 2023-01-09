import React, { useEffect, Component, useState } from "react";
import Slider from "react-slick";
import img1 from "../../photo/lens.jpg";
import img2 from "../../photo/neon.jpg";
import Footer from "../common/Footer";
import { redirect, useParams } from "react-router-dom";
import NavigateBlack from "../common/navblack";
import "./product.css";
import axios from "axios";
import toast, { saveSettings, Toaster } from "react-hot-toast";
import Leaderboard from "./Leaderboard";
import Top5 from "./top5";

const Product = () => {
  const { pid } = useParams();
  const [details, setDetails] = useState([]);
  const [type, setType] = useState();
  const [bid, setBid] = useState();
  const [highest, setHighest] = useState();
  const [hname, setHname] = useState();
  const [doto, setDoto] = useState([]);

  const [apnaTime, setApnaTime] = useState();

  // ============================================ Timer  =============================

  function DayCounter({ targetDate }) {
    const [days, setDays] = useState(null);
    const [hours, setHours] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [seconds, setSeconds] = useState(null);
    useEffect(() => {
      const intervalId = setInterval(() => {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);

        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
          window.location.replace("/");
          toast(
            "Time's up !",
            {
              icon: "🕑",
            },
            {
              duration: 20000,
            }
          );

          setTimeout(function () {
            window.location.href = "/";
          }, 3000);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
      <>
        <div className="row row-cols-4">
          <div className="col text-center">
            <h6>Days</h6>
            <h2>{days}</h2>
          </div>

          <div className="col text-center">
            <h6>Hrs</h6>
            <h2>{hours}</h2>
          </div>
          <div className="col text-center">
            <h6>Min</h6>
            <h2>{minutes}</h2>
          </div>
          <div className="col text-center">
            <h6>Sec</h6>
            <h2>{seconds}</h2>
          </div>
        </div>
      </>
    );
  }

  // const biggest = (e)=>{
  //   var m = 0;
  //   console.log(details.bid_info.length)
  //   for(let i = 0; i < details.bid_info.length; i++){
  //     if(m<details.bid_info[i].bid_price){
  //       m = details.bid_info[i].bid_price
  //       setHighest(m)
  //     }
  //   }
  //   console.log(m)
  // }

  // const [seconds, setSeconds] = useState(86400);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const purchasetoCart = (e) => {
    const add = {
      added_product: pid,
    };
    axios
      .post("http://localhost:4000/cart/add", add, config)
      .then((response) => {
        console.log(response);
        toast.success("Item added to cart");
        window.location.replace("/cart");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addToCart = (e) => {
    const add = {
      added_product: pid,
    };
    axios
      .post("http://localhost:4000/cart/add", add, config)
      .then((response) => {
        console.log(response);
        toast.success("Item added to cart");
        setTimeout(function () {
          window.location.href("www.google.com");
        }, 3000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const bidding = (e) => {
    const money = {
      bid_price: bid,
    };

    axios
      .post(
        "http://localhost:4000/product/single/" + pid + "/bid",
        money,
        config
      )
      .then((response) => {
        console.log(response);
        // toast.promise(
        //   saveSettings(settings),
        //    {
        //      loading: 'Bidding...',
        //      success: <p>Bid sucessfully!</p>,

        //    }
        //  );

        toast.success("Bid Successfully");
        setTimeout(function () {
          window.location.reload(1);
        }, 3000);
      })
      .catch((e) => {
        toast.error("Cannot bid (404)");
        console.log(e);
      });
  };

  const bought = (e) => {
    e.preventDefault();

    const data = {};

    axios
      .put(
        "http://localhost:4000/product/single/" + pid + "/bought",
        data,
        config
      )
      .then((response) => {
        console.log(response);
        toast.success("Purchased sucessfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/product/single/" + pid, config)
      .then((response) => {
        // console.log(response.data.data);
        setDetails(response.data.data);
        // console.log(response.data.data.type);
        setType(response.data.data.type);
        var t = response.data.data.last_time;
        console.log(t);
        setApnaTime(t);
        var m = 0;
        var n;
        // console.log(response.data.data.bid_info.length);
        for (let i = 0; i < response.data.data.bid_info.length; i++) {
          if (m < response.data.data.bid_info[i].bid_price) {
            m = response.data.data.bid_info[i].bid_price;
            n = response.data.data.bid_info[i].bid_by.name;
            setHighest(m);
            setHname(n);
          }
        }
        console.log(response.data.data.images[0].name);
        for (let o = 0; o < response.data.data.images.length; o++) {
          doto.push(
            "http://localhost:4000/" + response.data.data.images[o].name
          );
          // console.log(doto)
          // console.log("http://localhost:4000/" + response.data.data.images[o].name)
          // console.log("e")
        }
      });
  }, []);

  const settings = {
    customPaging: (i) => {
      return (
      
        <div>
          <img src={doto[i]} alt="product.jpg" className="productsmall" />
        </div>
      );
    },

    dots: true,
    dotsClass: "slick-dots smallimg",
    initialSlide: 1,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <NavigateBlack />

      <div className="container-fluid product_container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2  my-2 p-2">
          <div className="col container-fluid slider_container  p-2">
            <Slider {...settings}>
              {doto.map((item) => (
                <div>
                  <img
                    className="productmultimg"
                    src={item}
                    alt="product.jpg"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="col container desc_container">
            <h3 className="desc_head p-2">{details.product_name}</h3>
            <h4 className="desc_price p-2">${details.price}</h4>
            <br></br>

            <textarea
              readOnly
              className="container-fluid border-0"
              placeholder={details.description}
              style={{ cursor: "pointer" }}
            ></textarea>
          </div>
        </div>
      </div>

      {/* ==================================================== IF ELSE AUCTION/PURCHASE  ============================= */}
      <div className="container-fluid  my-1">
        {type == "Auction" ? (
          <>
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 ">
                <div className="col ">
                  <div className="row timemoney mt-3">
                    <div className="col time">
                      <h2>
                        <DayCounter targetDate={new Date(apnaTime)} />
                      </h2>
                    </div>

                    <p className="col money text-center ">
                      <h5>Starting Bid</h5>
                      <span>
                        <h4 className="desc_price">${details.price}</h4>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col bidder">
                  <p>Place your bid</p>

                  <form className="d-flex">
                    <input
                      type="text"
                      name="bidinput"
                      height="120px"
                      className="bidtxt"
                      placeholder="Enter bid amount"
                      onChange={(e) => {
                        setBid(e.target.value);
                      }}
                    ></input>

                    <span>
                      <button
                        type="button"
                        name="bidbutton"
                        className="bidbtn mx-3 p-2"
                        onClick={bidding}
                      >
                        <i className="fas fa-gavel"></i>
                        <span className="mx-2">Bid</span>
                      </button>
                    </span>
                  </form>
                </div>
              </div>
            </div>
            <hr className="mt-5" />
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2  my-2 p-3">
              <div className="col mt-1 p-3 ">
                <h3 className="text-center mb-5">Leaderboard</h3>
                <Leaderboard />
              </div>
              <div className="col ">
                <Top5 />
              </div>
            </div>
            <br></br>
          </>
        ) : (
          <>
            <div className="container">
              <div className=" d-flex justify-content-end">
                <button
                  type="button"
                  name="purchase"
                  class="btn btn-outline-success m-3"
                  onClick={purchasetoCart}
                >
                  Purchase
                </button>
                <button
                  type="button"
                  name="addtocart"
                  class="btn btn-outline-danger m-3"
                  onClick={addToCart}
                >
                  <span className="me-3">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Toaster />
      <Footer />
    </>
  );
};

export default Product;
