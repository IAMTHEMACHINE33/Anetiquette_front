import React, { useEffect, useState } from "react";
import "./searchResult.css";
import NavigateBlack from "../common/navblack";
import Footer from "../common/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";
import { Link } from "react-router-dom";



const SearchResult = () => {
  const [details, setDetails] = useState([]);
  const [search, setSearch] = useState("");
  


  function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    
    // Displaying the value
    document.getElementById("myOutput").innerHTML = inputVal;
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
      .post("http://localhost:4000/product/search", data)
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
  var settings = {
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
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
        },
      },
    ],
  };
  return (
    <>
      <NavigateBlack />
      <div className="container-fluid p-5 mt-3">
        <div className="container mt-5 p-3 ">
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control rounded"
              placeholder="dummy data"
              aria-label="Search"
              id="myInput"
              aria-describedby="search-addon"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              className="input-group-text border-0"
              id="search-addon"
              onClick={getInputValue}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        
       
      
        <h4 className="mt-2 mb-3 p-2">
          Search results for " <span id="myOutput"></span> "
        </h4>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry>
            {details.filter((option)=>{
              return search.toLowerCase() ===''
               ? option 
               : option.product_name.toLowerCase().includes(search)
            }).map((option) => {
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
                        <h5 className="card-title">{option.product_name}</h5>
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
