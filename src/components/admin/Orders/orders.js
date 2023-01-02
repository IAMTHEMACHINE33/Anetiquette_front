import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";
import './orders.css'
import AlertStatusDropdown from "./dropdown";

const OrderManage = () => {
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] =useState([]);
  const getOrders = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      setOrders(response.data);
      setFilteredOrders(response.data);
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
      name: "Status",
      cell: () => {
        return <AlertStatusDropdown />;
      }
      
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
    getOrders();
  }, []);
  useEffect(()=>{
    const result = orders.filter(order=>{
      return order.title.toLowerCase().match(search.toLowerCase());
    });
    setFilteredOrders(result);
  },[search]);
  return (
    <div className="rat">
      <Sidebar />
        <input 
        type="search" 
        placeholder="Search Here" 
        className="w-25 form-control"
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
        
        // actions={
        // <button className="btn btn-sm btn-info">Export</button>}

      />
    </div>
  );
};

export default OrderManage;