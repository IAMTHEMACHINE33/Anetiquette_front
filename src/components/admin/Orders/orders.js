import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";
import './orders.css'

const OrderManage = () => {
  // const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] =useState([]);
  const config={
    headers:{
      Authorization:"Bearer "+localStorage.getItem("admin_token")
    }
  }
  const deleteOrder = (oid)=>{
    const data ={
      remove_order:oid
    }
    console.log(data)
    axios.put("http://localhost:4000/api/v1/orders/delete",data,config)
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
      const response = await axios.get("http://localhost:4000/api/v1/orders",config);
      console.log(response.data.data)
      setProducts(response.data.data);
      setFilteredProducts(response.data.data);
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
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      width: "20rem" 
    },
    {
      name: "Price",
      selector: (row) => row.total,
      sortable: true,
      width: "10rem" 
    },
    {
      name: "Address",
      selector: (row) => row.address,
      width: "50rem" 
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
      width: "10rem" 
    },
    {
      name: "Payment",
      selector: (row) => row.payment,
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
          onClick={() => deleteOrder(row._id)}
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