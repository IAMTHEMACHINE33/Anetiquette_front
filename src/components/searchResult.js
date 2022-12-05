import React, { useEffect, useState } from "react";

import NavigateBlack from "./common/navblack";
import Footer from "./common/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchResult = () => {
  const [details, setDetails] = useState([]);
  const [search, setSearch] = useState('');

  const config={
    headers:{
      Authorization:"Bearer "+localStorage.getItem("token")
    }
  }
  const searchRe = (e)=>{
    e.preventDefault();

    const data ={
      search:search
    }
    axios.post("http://localhost:4000/product/search",data)
    .then(response=>{
      setDetails(response.data.data)
      console.log(response.data.data)
    })
    .catch((e)=>{
      console.log(e);
    })
  }
  

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
  return (
    <>
      <NavigateBlack />
      <div className="container-fluid p-5 mt-3">
        <div className="container mt-5 p-3 ">
          <div class="input-group rounded">
            <input
              type="search"
              class="form-control rounded"
              placeholder="dummy data"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={(e)=>{setSearch(e.target.value)}}
            />
            <button class="input-group-text border-0" id="search-addon" onClick={searchRe}>
              <i class="fas fa-search"></i>
            </button>
          </div>
          <button onClick={searchRe}>asd</button>
        </div>
        <h4 className="mt-2 mb-3 p-2">
          Search results for " <span>dummy data</span> "
        </h4>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry>
            {details.map((option) => {
              return (
                <a href="/product" className="text-black">
                  <Link to={"/product/" + option._id}>
                    <div class="card m-2">
                      <img
                        src={"http://localhost:4000/" + option.image}
                        class="card-img-top"
                        alt="hot-sale.jpg"
                      />
                      <div class="card-body">
                        <h5 class="card-title">{option.product_name}</h5>
                        <p class="card-text">${option.price}</p>
                      </div>
                    </div>
                  </Link>
                </a>
              );
            })}

            {details.map((option) => {
              return (
                <a href="/product" className="text-black">
                  <div class="card m-2">
                    <img
                      src={"http://localhost:4000/" + option.image}
                      class="card-img-top"
                      alt="hot-sale.jpg"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{option.product_name}</h5>
                      <p class="card-text">${option.price}</p>
                    </div>
                  </div>
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
