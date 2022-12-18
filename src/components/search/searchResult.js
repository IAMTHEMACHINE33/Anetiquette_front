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
import { element } from "prop-types";

const SearchResult = () => {
  const [details, setDetails] = useState([]);
  const [category, setCategory] = useState([]);

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
        console.log(result.data.data);
        setDetails(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  
    // ============================================================ Filter ============================================================ */
  
                                                            // category use effect

  // const filter_category= (col) =>{
  //   const result = category.filter((curDate)=>{
  //     return curDate.category === catItem;
  //   });
  //   setDetails(result);
  // }
  useEffect(() => {
    axios
      .get("http://localhost:4000/category/show")
      .then((result) => {
        console.log(result.data.data);
        setCategory(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // function getFilteredCategory(){
  //   if (!category){
  //     return details;
  //   }
  //   return details.filter((option)=>option.category === category);
  // }

  // var filteredCategory = useMemo(getFilteredCategory, [category, details]);

  //   const show_category = () =>{
  //     return(
  //       <>
  //       {filteredCategory
  //         .map((option) => {
  //           return (
  //             <a href="/product" className="text-black">
  //               <Link to={"/product/" + option._id}>
  //                 <div className="card m-2">
  //                   <img
  //                     src={"http://localhost:4000/" + option.image}
  //                     className="card-img-top"
  //                     alt="hot-sale.jpg"
  //                   />
  //                   <div className="card-body">
  //                     <h6 className="card-title">{option.product_name}</h6>
  //                     <p className="card-text">${option.price}</p>
  //                   </div>
  //                 </div>
  //               </Link>
  //             </a>
  //           );
          
  //       })}
  //       </>
  //     )}
  // const showFilteredCategory = (col) =>{
  //   <>
  //     {filteredCategory.map((element,index)=>(
  //       <option {...element} key={index}/>
  //     ))}
  //   </>
  // }

  // function showFilteredCategory(){
  //   console.log("working")
  // }
  const filterCategory = (col) =>{
    const result = [...details].filter((curDate)=>{
      return curDate.category === col
    })
    setDetails(result);
    console.log(result);
  }


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

  const moneyHigh = (col) =>{
   
    
    if(moneyhigh === "high"){
      const price_sorted = [...details].sort((a,b)=>
        a[col]<b[col] ? 1 : -1
      );
      setDetails(price_sorted);
      
      
    }
  }

  const moneyLow = (col) =>{
    if(moneylow === "low"){
      const price_sorted = [...details].sort((a,b)=>
        a[col]>b[col] ? 1 : -1
      );
      setDetails(price_sorted);
      
      
    }
  }
  // const priceFilter = () => {
  //   let ordered = [...details].sort((a, b) => (a.price > b.price) ? 1 : -1);
  //   let lastElement = ordered.pop();
  //   return ordered.unshift(lastElement);
  //   // return details.sort((a,b)=> a.price > b.price ? 1:-1)
  // }
  
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
              onKeyPress={enterSearch}
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
            <div className="row">
              <div className="col-12">
                <div className="filter_main d-flex align-items-center justify-content-between my-3">
                  <div className="filter_left">
                    <div className="filter_category">
                      <DropdownButton
                        align="start"
                        title="Categories"
                        id="dropdown-menu-align-start"
                      >
                        <Dropdown.Item onClick={()=>setDetails([])}>All</Dropdown.Item>
                        {category.map((option) => {
                          return (
                            <>
                          
                          <Dropdown.Item 
                          // onClick={showFilteredCategory}
                          onClick={()=>filterCategory("638310d12f766a6b5a2202dd")}
                          >{option.name}</Dropdown.Item>
                          
                          </>
                          );
                          
                        })}
                        
                      </DropdownButton>
                    </div>
                  </div>
                  <div className="filter_right">
                    <div className="filter_sort">
                      <DropdownButton
                        align="end"
                        title="Sort By"
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Item onClick={() => sorting("product_name")}>
                          A-Z
                        </Dropdown.Item>
                        <Dropdown.Divider />

                        <Dropdown.Item onClick={()=> moneyHigh("price")}>Higher to Lower</Dropdown.Item>
                        <Dropdown.Item onClick={()=> moneyLow("price")}>Lower to Higher</Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                </div>
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
            {details
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
      <Footer />
    </>
  );
};

export default SearchResult;
