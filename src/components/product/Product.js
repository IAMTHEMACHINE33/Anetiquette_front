import React, { useEffect, Component, useState } from "react";
import Slider from "react-slick";
import img1 from "../../photo/lens.jpg";
import img2 from "../../photo/neon.jpg";
import Footer from "../common/Footer";
import { useParams } from "react-router-dom";
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

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const addToCart = (e) => {
    const add = {
      added_product: pid,
    };
    axios
      .post("http://localhost:4000/cart/add", add, config)
      .then((response) => {
        console.log(response);
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
        console.log(response.data.data);
        setDetails(response.data.data);
        console.log(response.data.data.type);
        setType(response.data.data.type);
        var m = 0;
        var n;
        console.log(response.data.data.bid_info.length);
        for (let i = 0; i < response.data.data.bid_info.length; i++) {
          if (m < response.data.data.bid_info[i].bid_price) {
            m = response.data.data.bid_info[i].bid_price;
            n = response.data.data.bid_info[i].bid_by.name;
            setHighest(m);
            setHname(n);
          }
        }
      });
  }, []);

  const data = [
    "https://i0.wp.com/rachelfroud.com/wp-content/uploads/2020/06/Flamingo-Print-Mockup.jpg?fit=2305%2C2000&ssl=1",
    "https://w0.peakpx.com/wallpaper/908/997/HD-wallpaper-one-piece-luffy-thumbnail.jpg",
    img2,
    img1,
    "https://cdn.vox-cdn.com/thumbor/8wbWvZmEgMB1Ukx_A51_nfl-uCU=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23929708/tekken_8.jpg",

    "https://c4.wallpaperflare.com/wallpaper/966/456/890/tekken-tag-tournament-2-jin-kazama-2560x1600-video-games-tekken-hd-art-wallpaper-preview.jpg",
    "https://i.pinimg.com/736x/56/13/e7/5613e70ac2f1b34ccfbe8145dd7ad43a--virtual-games-tekken-.jpg",
    "https://w0.peakpx.com/wallpaper/638/623/HD-wallpaper-akuma-capcom-street-fighter-videogames-thumbnail.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/621/399/620/chun-li-street-fighter-wallpaper-preview.jpg",
    "https://i.pinimg.com/564x/c7/67/c9/c767c9ece36943979490b1a0d0db1126--ryu-street-fighter-nerd-art.jpg",
    "https://i.pinimg.com/originals/f3/f6/e3/f3f6e357b08a50671dcee9adfbd7f04e.png",
    "https://upload.wikimedia.org/wikipedia/en/2/2d/SSU_Kirby_artwork.png",
  ];
  const settings = {
    customPaging: (i) => {
      return (
        <div>
          <img src={data[i]} alt="product.jpg" className="productsmall" />
        </div>
      );
    },

    autoplaySpeed: 2000,
    dots: true,
    dotsClass: "slick-dots smallimg",
    initialSlide: 1,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <NavigateBlack />

      <div className="container-fluid product_container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2  my-2 p-3">
          <div className="col container-fluid slider_container  p-2">
            <Slider {...settings}>
              {data.map((item) => (
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
              style={{cursor:"pointer"}}
            ></textarea>
          </div>
        </div>
      </div>

      {/* ==================================================== IF ELSE AUCTION/PURCHASE  ============================= */}
      <div className="container-fluid  my-4">
        {type == "Auction" ? (
          <>
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 ">
                <div className="col ">
                  <div className="row ">
                    <h1 className="col ">1:00:00</h1>
                    <p className="col">
                      Starting Bid{" "}
                      <span>
                        <h4 className="desc_price">${details.price}</h4>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col">
                  <p>Place your bid</p>

                  <form>
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
                        className="bidbtn mx-3"
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
            <hr className="mt-5"/>
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
                onClick={bought}
              >
                Purchase
              </button>
              <button
                type="button"
                name="addtocart"
                class="btn btn-outline-danger m-3"
                onClick={addToCart}
              >
                <span className="me-3"><i className="fas fa-shopping-cart"></i></span>
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
