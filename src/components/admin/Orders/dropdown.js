import React from "react";

const AlertStatusDropdown = () => {
  return (
    <div style={{ display: "flex" }}>
      <select style={{ border: "none" }}>
        <option value="review">Review</option>
        <option value="cancelled">Cancelled</option>
        <option value="pending">Pending</option>
        <option value="shipping">Shipped</option>
        <option value="declined">Declined</option>
      </select>
    </div>
  );
};
export default AlertStatusDropdown;
