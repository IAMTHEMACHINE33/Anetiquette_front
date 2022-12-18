import React, { useEffect, useMemo, useState } from "react";
import Item from "./catitem";
import axios from "axios";

//Filter list by category in React JS
export default function Cat() {
  // Default Value
  var defaultSports = [
    { name: "Table Tennis", category: "Indoor" },
    { name: "Football", category: "Outdoor" },
    { name: "Swimming", category: "Aquatics" },
    { name: "Chess", category: "Indoor" },
    { name: "BaseBall", category: "Outdoor" },
  ];
  const [sportList, setSportList] = useState([]);
  const [details, setDetails] = useState([]);
  const [category, setCategory] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  // Add default value on page load
  useEffect(() => {
    setSportList(defaultSports);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/product/show")
      .then((result) => {

        for (let i = 0; i < details.length; i++) {

          // console.log("asdasdasdadadasdas");
          // console.log(details.length);
          // console.log(i);
          setDetails(result.data.data[i].category._id);
          console.log(result.data.data[i].category._id);



        }
         //setDetails(result.data.data);


        

        //  if (let i=0 ,i<=data.length ,i++){
        // console.log(result.data.data[i].category._id);
        //}
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:4000/category/show")
      .then((result) => {
        //console.log(result.data.data);
        console.log(result.data.data._id);
        // console.log(result.data.data._id);
        setCategory(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return sportList;
    }
    return sportList.filter((item) => item.category === selectedCategory);
  }

  // Function to get filtered list
  function getFilteredList2() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return details;
    }
    return details.filter((option) => option.category._id  === selectedCategory);
   
  } 

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);
  var filteredList2 = useMemo(getFilteredList2, [
    selectedCategory,
    details,
    
  ]);
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div>
      <div className="app">
        <div className="filter-container">
          <div>Filter by Category:</div>
          <div>
            <select
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
            >
              {category.map((option) => {
                return (
                  <>
                  console.log(option._id);
                    <option value={option._id}>{option.name}</option>
                  </>
                );
              })}
              <option value="">All</option>
              {/* <option value="peace">Peace</option>
              <option value="astro">astro</option>
              <option value="Aquatics">Aquatics</option> */}
            </select>
          </div>
        </div>
        <div className="sport-list">
          {filteredList2.map((element, index) => (
            <Item {...element} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
