import React, { useEffect, useMemo, useState, Component } from "react";
import Item from "./catitem";
import axios from "axios";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Category from "../Group";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import NavigateBlack from "../common/navblack";
import Slider from "react-slick";
import "../search/testing.css";

export default function Final() {
  const [details, setDetails] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

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

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function getFilteredList() {
    if (!selectedCategory) {
      return details;
    }
    return details.filter((option) => option.category._id === selectedCategory);
  }

  

  var filteredList = useMemo(getFilteredList, [selectedCategory, details]);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <>
      <NavigateBlack />
      
      <div className="mt-5 p-2">
        <div className="mt-5 categorydiv">
          <Slider {...settings}>
          <div className="mt-3 p-3">
                  <button
                    className="categorybtn"
                    value=""
                    onClick={handleCategoryChange}
                  >
                    All
                  </button>
                </div>
            {category.map((option) => {
              return (
                <div className="mt-3 p-3">
                  <button
                    className="categorybtn"
                    value={option._id}
                    onClick={handleCategoryChange}
                  >
                    {option.name}
                  </button>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <div className="mt-3 p-2">
        <div className="container-fluid">
          <div className="row">
          <button>Hello</button>
            <div className="filter-container">
              <div>Filter by Category:</div>
              <div>
                <select
                  name="category-list"
                  id="category-list"
                  onChange={handleCategoryChange}
                >
                  <option value="">All</option>
                  {category.map((option) => {
                    return (
                      <>
                        <option value={option._id}>{option.name}</option>
                      </>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
          >
            <Masonry>
              {filteredList.map((option) => {
                return (
                  <a href="/product" className="text-black">
                    <Link to={"/product/" + option._id}>
                      <div className="card m-2">
                        <img
                          src={"http://localhost:4000/" + option.image}
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
      </div>
    </>
  );
}
