import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";
import './users.css'

const UsersManage = () => {
  // const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] =useState([]);
  const config = {
    headers:{
      Authorization:"Bearer "+localStorage.getItem("admin_token")
    }
  }
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/customers",config);
      setUsers(response.data.data);
      setFilteredUsers(response.data.data);
      console.log(response.data.data)
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: "Contact Number",
      selector: (row) => row.contactNumber,
      sortable: true,
    },
    {
      name: "dob",
      selector: (row) => row.dob,
      sortable: true,
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
    getUsers();
  }, []);
  // useEffect(()=>{
  //   const result = users.filter(user=>{
  //     return user.firstName.toLowerCase().match(search.toLowerCase());
  //   });
  //   setFilteredUsers(result);
  // },[search]);
  return (
    <div className="mat">
      <Sidebar />
        <input 
        type="search" 
        placeholder="Search Here" 
        className="w-25 form-control"
        // value={search}
        // onChange={(e)=>setSearch(e.target.value)}
          />
      <DataTable
        title="List of Users"
        columns={columns}
        data={filteredUsers}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        actions={
        <button className="btn btn-sm btn-info">Export</button>}

      />
    </div>
  );
};

export default UsersManage;
