import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";
import './products.css'

const ProductManage = () => {
  // const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] =useState([]);
  const config={
    headers:{
      Authorization:"Bearer "+localStorage.getItem("admin_token")
    }
  }
  const deleteProduct = (pid)=>{
    const data ={
      remove_product:pid
    }
    console.log(data)
    axios.put("http://localhost:4000/api/v1/products/delete",data,config)
    .then((response)=>{
      console.log(response)
      setTimeout(function () {
        window.location.reload(1);
      }, 1000);
  
    })
    .catch((e)=>{
      console.log(e)
    })
  }
  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/products",config);
      setProducts(response.data.data);
      setFilteredProducts(response.data.data);
      console.log(response.data.data)
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
      selector: (row) => row.product_name,
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
      selector: (row) => row.category.name,
      sortable: true,
      width: "10rem" 
    },
    {
      name: "Image",
      selector: (row) => row.images[0].name,
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
          onClick={() => deleteProduct(row._id)}
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
        title="List of Products"
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

export default ProductManage;
