import React, { useEffect, useState } from "react";
import "./searchResult.css";
import NavigateBlack from "../common/navblack";
import Footer from "../common/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useMemo } from "react";
import errorimg from "../../photo/errorduck.jpg";

import styled from "styled-components";
import { toast } from "react-hot-toast";

const SearchResult = () => {
  const [details, setDetails] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("asc");
  const [moneyhigh, setMoneyHigh] = useState("high");
  const [moneylow, setMoneyLow] = useState("low");
  function getInputValue() {
    // Selecting the input element and get its value
    var inputVal = document.getElementById("myInput").value;

    // Displaying the value
    document.getElementById("myOutput").innerHTML = inputVal;
  }

  function enterSearch(e) {
    if (e.key === "Enter" || e.key === "Go") {
      searchRe();
      alert(getInputValue);
    }

    return false;
  }

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

  {
    /* ============================================================ Filter End ============================================================ */
  }

  return (
    <>
      <NavigateBlack />
      <div className="container-fluid p-5 mt-3">
        <div className="container-fluid mt-5 p-2 ">
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Enter to search..."
              aria-label="Search"
              id="myInput"
              aria-describedby="search-addon"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyPress={(e)=>{if (e.key === "Enter" || e.key === "Go") {
                getInputValue();
                searchRe();
                alert(getInputValue);
              } }}
            />
            <button
              className="input-group-text border-0"
              id="search-addon"
              onClick={() => {
                getInputValue();
                searchRe();
              }}
            >
              <i className="fas fa-search" id="search"></i>
            </button>
          </div>
        </div>
        {/* ============================================================ Filter ============================================================ */}
        <>
          <div className="container-fluid">
            <div className="row  row-col-sm-1  row-col-md-2 row-col-lg-2 my-3">
              <div className="col filter_sort">
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
              <div className="col filter_category">
                <button
                  className="categorybtn "
                  value=""
                  onClick={handleCategoryChange}
                >
                  All
                </button>

                {category.map((option) => {
                  return (
                    <button
                      className="categorybtn "
                      value={option._id}
                      onClick={handleCategoryChange}
                    >
                      {option.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </>

        {/* ============================================================ Filter End ============================================================ */}

        <h4 className="mt-2 mb-3 p-2">
          Search results for " <span id="myOutput"></span> "
        </h4>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry>
            {filteredList
              .filter((option) => {
                return search.toLowerCase() === ""
                  ? option
                  : option.product_name.toLowerCase().includes(search);
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
        
        {filteredList
          .filter((option) => {
            return search.toLowerCase() === ""
              ? option
              : option.product_name.toLowerCase().includes(search);
          })
          .map((option) => {
            {search !== option.product_name ? ( 
              
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
                >
                  <Masonry>
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
                  </Masonry>
                </ResponsiveMasonry>
              ):(
<>
                <hr></hr>
                <div className="container p-3 results">
                  <div className="row">
                    <div className="col d-flex justify-content-end">
                      <img className="quack" src={errorimg} />
                    </div>
                    <div className="col text-center d-flex align-items-center">
                      <h5>
                        <span className="font-weight-bold">Oops!</span> No
                        more results were found
                      </h5>
                    </div>
                  </div>
                </div>
                <hr></hr>
              </>
              )
              
            }
           
           
          })}
          

        <>
          {/* <hr></hr>
          <div className="container p-3 results">
            <div className="row">
              <div className="col d-flex justify-content-end">
                <img className="quack" src={errorimg} />
              </div>
              <div className="col text-center d-flex align-items-center">
                <h5>
                  <span className="font-weight-bold">Oops!</span> No more
                  results were found
                </h5>
              </div>
            </div>
          </div>
          <hr></hr> */}
        </>
      </div>
      <Footer />
    </>
  );
};

export default SearchResult;
