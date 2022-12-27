import "../product/top5.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Top5() {
  const {pid}=useParams();
  const [details,setDetails]=useState([]);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  useEffect(()=>{
    axios.get("http://localhost:4000/product/single/" + pid, config)
    .then((response)=>{
      setDetails(response.data.data.bid_info)
      console.log(response.data.data.bid_info[0].bid_by.name)
    })
    .catch((e)=>{
      console.log(e)
    })
  },[])
  return (
    <>
      <Table border hover size="sm">
        <thead>
          <tr className="text-center">
            <th>Rank</th>
            <th className="text-start">
              <span style={{ marginLeft: "70px" }}>Bidders Name</span>
            </th>
            <th>Bid</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {details.reverse().slice(0,5).map((option,index)=>{

            return(
              <tr className="align-middle">
            <td style={{ fontWeight: "bold" }}>{index+1}</td>
            <td className="text-start">
              <span>
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    marginRight: "20px",
                  }}
                  src="https://indianmemetemplates.com/wp-content/uploads/Doge-with-a-gun.jpg"
                ></img>
              </span>
              {option.bid_by.name}
            </td>

            <td style={{ color: "green", fontWeight: "500" }}>${option.bid_price}</td>
          </tr>
            );
          })}
          
          
          
        </tbody>
      </Table>
    </>
  );
}

export default Top5;
