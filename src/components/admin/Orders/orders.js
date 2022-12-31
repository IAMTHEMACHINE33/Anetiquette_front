import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";
import './orders.css'

const OrderManage = () => {
  // const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] =useState([]);
  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
      width: "4rem" 
    },
    {
      name: "Name",
      selector: (row) => row.title,
      sortable: true,
      width: "20rem" 
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
      width: "10rem" 
    },
    {
      name: "Description",
      selector: (row) => row.description,
      width: "50rem" 
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
      width: "10rem" 
    },
    {
      name: "Image",
      selector: (row) => row.image,
      width: "34rem" 
    },

    {
      name: "Edit",
      cell: (row) => (
        <button
          className="btn btn-success btn-sm rounded-0"
          onClick={() => alert(row.id)}
        >
          <i class="fa fa-edit"></i>
        </button>
      ),
    },
    {
      name: "Delete",
      cell: (row) => (
        <button
          className="btn btn-danger btn-sm rounded-0"
          onClick={() => alert(row.id)}
        >
          <i class="fa fa-trash"></i>
        </button>
      ),
    },
  ];
  useEffect(() => {
    getProducts();
  }, []);
  // useEffect(()=>{
  //   const result = users.filter(user=>{
  //     return user.firstName.toLowerCase().match(search.toLowerCase());
  //   });
  //   setFilteredUsers(result);
  // },[search]);
  return (
    <div className="rat">
      <Sidebar />
        <input 
        type="search" 
        placeholder="Search Here" 
        className="w-20 form-control"
        // value={search}
        // onChange={(e)=>setSearch(e.target.value)}
          />
      <DataTable
        title="List of Orders"
        columns={columns}
        data={filteredProducts}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="500px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        
        actions={
        <button className="btn btn-sm btn-info">Export</button>}

      />
    </div>
  );
};

export default OrderManage;