import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";
import './orders.css'

const OrderManage = () => {
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] =useState([]);
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
  const getOrders= async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/orders",config);
      console.log(response.data.data)
      setOrders(response.data.data);
      setFilteredOrders(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      name: "Name",
      selector: (row) => row.firstname,
      sortable: true,
      width: "10rem" 
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
      width: "20rem" 
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
      width: "25rem" 
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
    getOrders();
  }, []);
  useEffect(()=>{
    const result = orders.filter(order=>{
      return order.email.toLowerCase().match(search.toLowerCase());
    });
    setFilteredOrders(result);
  },[search]);
  return (
    <div className="rat">
      <Sidebar />
        <input 
        type="search" 
        placeholder="Search Here" 
        className="w-20 form-control"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
          />
      <DataTable
        title="List of Orders"
        columns={columns}
        data={filteredOrders}
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