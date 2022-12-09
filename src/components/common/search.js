import React from "react";
import "../common/search.css";
import NavigateBlack from "./navblack";
import Typical from "react-typical";
import SearchResult from "../search/searchResult";

const Search = () => {

function enterInput(event){
  // Go chai mobile lai T_T
  if (event.key === "Enter" || event.key === "Go" ){
    window.location.replace("/searchres");
  }
}

    function clearInput(){
       var getValue = document.getElementById("name");
       if(getValue.value !=""){
        getValue.value = "";
       }
    }
  return (
    <>
    <NavigateBlack/>
    <div class="container-fluid search-bg">
    <div class="container">
        
        <div class="row height d-flex justify-content-center align-items-center">
          
          <div class="col-md-6">
            <h1 className="text-white mb-5">
            <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                    'Anetiquette',3000,
                    'Find everything here !!',3000,
                    'Explore',3000,
                    'Start typing abcedef....',3000,              
                    ]}
                    />
            </h1>
         
            <div class="form" id="Form">
             
              <i class="fa fa-search"></i>
              <input
                type="text"
                class="form-control form-input"
                placeholder="Search anything..."
                id="name"
                maxlength="100"
                onKeyPress={enterInput}
                />
              <button class="left-pan" onClick={clearInput}>
                <i class="fa fa-times"></i>
              </button>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Search;
