import "../group.css";
import Category from "../Category";
import React, { useState, useEffect, useRef } from "react";
import img1 from "../../photo/neon.jpg";
import img2 from "../../photo/redlips.jpg";
import Slider from "react-slick";
import img3 from "../../photo/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
import NavigateBlack from "../common/navblack";
import Footer from "../common/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useMemo } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import errorimg from "../../photo/errorduck.jpg";
import CatHead from "../categorize/cat_head";

const Categorize = () => {
  const [details, setDetails] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("asc");
  const [moneyhigh, setMoneyHigh] = useState("high");
  const [moneylow, setMoneyLow] = useState("low");

  //======================================================= Script to click btn before loading========================================================

  window.onload = function () {
    document.getElementById("first").click();
  };

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const searchRe = (e) => {
    e.preventDefault();

    const data = {
      search: search,
    };
    axios
      .post("http://localhost:4000/product/search", config, data)
      .then((response) => {
        setDetails(response.data.data);
        console.log(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/product/show")
      .then((result) => {
        setDetails(result.data.data);
        console.log(result.data.data);

        for (let i = 0; i < details.length; i++) {
          setDetails(result.data.data[i].category._id);
          console.log(result.data.data[i].category._id);
        }
        console.log("..................................");
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/category/show")
      .then((result) => {
        // setDetails(result.data.data);
        setCategory(result.data.data);
        console.log(result.data.data);
        for (let c = 0; c < category.length; c++) {
          setCategory(result.data.data[c]._id);
          console.log(result.data.data[c]._id);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  //======================================================= Category sorting========================================================
  const divRef = useRef();

  function handleCategoryChange(event) {
    console.log("clicking");
    window.scrollBy(0, 400);
    // const li = document.querySelector("li");
    // const value = li.dataset.value;
    //event.target.value = document.getElementById("category_value").getAttribute("data-value");
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  }

  function getFilteredList() {
    return details.filter((option) => option.category._id === selectedCategory);
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, details]);

  //=======================================================  sorting========================================================

  const sorting = (col) => {
    if (order === "asc") {
      const sorted = [...details].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setDetails(sorted);
      setOrder("desc");
    }
    if (order === "desc") {
      const sorted = [...details].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setDetails(sorted);
      setOrder("asc");
    }
  };

  const moneyHigh = (col) => {
    if (moneyhigh === "high") {
      const price_sorted = [...details].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      setDetails(price_sorted);
    }
  };

  const moneyLow = (col) => {
    if (moneylow === "low") {
      const price_sorted = [...details].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      setDetails(price_sorted);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  {
    /* ============================================================ Filter End ============================================================ */
  }

  return (
    <>
      <NavigateBlack />
      <button
        id="first"
        onClick={handleCategoryChange}
        value={category._id}
      ></button>

      <div className="container-fluid ">
        <CatHead />
        <div className="container-fluid p-5">
          <Slider {...settings}>
            {category.map((option) => {
              return (
                <>
                  <div className="card border-0  mb-3 p=5 categorycard d-flex justify-content-end  ">
                    <button
                      value={option._id}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "100%",
                        height: "100%",
                        border: "none",

                        background: "none",
                      }}
                      onClick={handleCategoryChange}
                    ></button>
                    <div
                      className="tryhard_category"
                      ref={divRef}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        marginTop: "3rem",
                      }}
                    >
                      <img
                        style={{
                          width: "5rem",
                          height: "5rem",
                          objectFit: "cover",
                          borderRadius: "50%",
                          display: "flex !important",
                          justifyContent: "center !important",
                        }}
                        className="card-img-top"
                        src={"http://localhost:4000/" + option.image}
                        alt="Card image cap"
                      />

                      <p className="text-center mt-4">{option.name}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
        {/* ============================================================ Filter ============================================================ */}
        <>
          <div className="container-fluid my-5">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 d-flex justify-content-evenly ">
              <div className="col serching_box">
                <div class="search-box">
                  <button class="btn-search">
                    <i class="fas fa-search"></i>
                  </button>
                  <input
                    type="text"
                    class="input-search"
                    placeholder="Type to Search..."
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" || e.key === "Go") {
                        searchRe();
                      }
                    }}
                  />
                </div>
              </div>
              <div className="col d-flex flex-row-reverse filter_sort mt-3">
                <DropdownButton
                  align="end"
                  title="Sort By"
                  id="dropdown-menu-align-end"
                >
                  <Dropdown.Item onClick={() => sorting("product_name")}>
                    Alphabetically
                  </Dropdown.Item>
                  <Dropdown.Divider />

                  <Dropdown.Item onClick={() => moneyHigh("price")}>
                    Price <i class="fas fa-chevron-up"></i>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => moneyLow("price")}>
                    Price <i class="fas fa-chevron-down"></i>
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </div>
        </>

        {/* ============================================================ Filter End ============================================================ */}

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry>
            {filteredList
              .filter((option) => {
                return search === ""
                  ? option
                  : option.product_name
                      .toLowerCase()
                      .includes(search.toLowerCase());
              })
              .map((option) => {
                return (
                  <a href="/product" className="text-black">
                    <Link to={"/product/" + option._id}>
                      <div className="card m-2">
                        <img
                          src={"http://localhost:4000/" + option.images[0].name}
                          className="card-img-top"
                          alt="hot-sale.jpg"
                        />
                        <div className="card-body">
                          <h6 className="card-title">{option.product_name}</h6>
                          <p className="card-text">${option.price}</p>
                        </div>
                      </div>
                    </Link>
                  </a>
                );
              })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <Footer />
    </>
  );
};

export default Categorize;
