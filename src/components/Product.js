import React, { useEffect, Component, useState } from "react";
import Slider from "react-slick";
import img1 from "../photo/lens.jpg";
import img2 from "../photo/neon.jpg";
import Footer from "./common/Footer";
import { useParams } from "react-router-dom";
import NavigateBlack from "./common/navblack";
import "./product.css";
import axios from "axios";
import toast, { saveSettings, Toaster } from "react-hot-toast";

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
            
            

            <textarea readOnly className="container-fluid border-0" placeholder={details.description}>
            
              
              
            </textarea>
          </div>
        </div>
      </div>
      <div className="container-fluid  mt-5">
        {type == "Auction" ? (
          <>
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col mt-3 ">
                <h1 className="text-center">Highest Bidder</h1>

                <div className="container d-flex highestbid text-center p-5 justify-content-center">
                  <div className="row   row-cols-2  row-cols-md-3 row-cols-lg-5 ">
                    <div className="col">
                      <img
                        className=""
                        style={{
                          width: "10rem",
                          height: "10rem",
                          objectFit: "cover",
                          borderRadius: "100px",
                        }}
                        src="data:image/jpeg;base64,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"
                      />
                      <div className="p-3 ">
                        <h3>{hname}</h3>
                        <h4 className="desc_price">${highest}</h4>
                      </div>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
              <div className="col  mt-3 ">
                <div className="row row-cols-2 text-start">
                  <h2>1:00:00</h2>
                  <p>
                    Starting Bid{" "}
                    <span>
                      <h4 className="desc_price">${details.price}</h4>
                    </span>
                  </p>
                </div>
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
            <br></br>
          </>
        ) : (
          <div className="row  row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
            {/* <div className="col"></div> */}
            <div className="col container-fluid d-flex justify-content-center">
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
                class="btn btn-outline-success m-3"
                onClick={addToCart}
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
      <Toaster />
      <Footer />
    </>
  );
};

export default Product;
