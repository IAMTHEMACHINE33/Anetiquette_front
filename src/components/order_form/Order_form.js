import React, { useEffect, useState } from "react";
import "./Order_form.css";
import NavigateBlack from "../common/navblack";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../common/Footer";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const OrderForm = () => {

  const [details, setDetails] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("");
  const [totals, setTotals] = useState("");
  const [cart, setCart] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  }

  const orderProduct = () => {
    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      address: address,
      phone: phone,
      payment: payment,
      total: total,
      cart: cart,
    }
    axios.post("http://localhost:4000/order/add", data, config)
      .then((response) => {
        console.log(response);
        toast.success("Order complete");
      })
      .catch((e) => {
        toast.error("Failed to checkout");
        console.log(e)
      })
  }

  useEffect(() => {
    axios.get("http://localhost:4000/cart/show", config)
      .then((response) => {
        setCart(response.data.data._id)
        setDetails(response.data.data.products)
        setPayment("COD")
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  var total = 0;
  var per = 0;

  return (
    <>
      <NavigateBlack />
      <div className="maincontainer">
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"></div>
        <div class="container">
          <div class="py-5 text-center">
            <h2 class="mt-5">Checkout form</h2>
          </div>
          <div class="row">
            <div class="col-md-4 order-md-2">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted text-white">Your cart</span>
                <span class="badge badge-secondary badge-pill">{details.length}</span>
              </h4>
              <ul class="list-group mb-3">
                {details.map((option) => {
                  per = (option.added_product.price) * 0.13
                  total = total + (option.added_product.price) + per;
                  per = 0;
                  return (
                    <li
                      id="list"
                      class="list-group-item d-flex justify-content-between lh-condensed"
                    >
                      <div>
                        <h6 class="my-0">{option.added_product.product_name}</h6>
                        <small class="text-muted">{option.added_product.description}</small>
                      </div>
                      <span class="text-muted">Rs.{option.added_product.price}</span>
                    </li>
                  );
                })}
                <li
                  id="list"
                  class="list-group-item d-flex justify-content-between"
                >
                  <span>Total (Rupee)</span>
                  <strong>Rs.{total}</strong>
                </li>
              </ul>
            </div>
            <div id="maincard" class=" card col-md-7 order-md-1 border-light">
              <h4 class="mb-3 mt-2">Billing address</h4>
              <form class="validation" novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder="Mik"
                      required
                      onChange={(e) => { setFirstname(e.target.value) }}
                    />
                    <div class="invalid-feedback">
                      Your firstname is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder="smith"
                      required
                      onChange={(e) => { setLastname(e.target.value) }}
                    />
                    <div class="invalid-feedback">
                      Your lastname is required.
                    </div>
                  </div>
                </div>


                <div class="mb-3">
                  <label for="email">
                    Email <span class="text-muted"></span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="you@example.com"
                    onChange={(e) => { setEmail(e.target.value) }}
                  />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="mb-3">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                    onChange={(e) => { setAddress(e.target.value) }}
                  />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div class="mb-5">
                  <label for="phoneno">
                    Phone no. <span class="text-muted"></span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="phoneno"
                    placeholder="+9779835......"
                    onChange={(e) => { setPhone(e.target.value) }}
                  />
                </div>


                <hr class="mb-4" />

                <h4 class="mb-4">Payment</h4>



                <div class="col">
                  <div class="form-check mb-4">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <img src="https://seeklogo.com/images/K/khalti-logo-F0B049E67E-seeklogo.com.png" className="khalti" alt="khalti" width={"100px"}></img>
                  </div>
                  <div class="form-check mb-4">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <img src="https://static.vecteezy.com/system/resources/previews/002/952/794/original/cash-on-delivery-steacker-free-vector.jpg" width={"80px"}></img>
                  </div>
                </div>
                <hr class="mb-4" />

                <button
                  class="btn btn-danger btn-md btn-block mb-3"
                  type="button"
                  onClick={orderProduct}
                >
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </div>
        <Toaster />
        <Footer />
      </div>
    </>
  );
};

export default OrderForm;



                // <div class="col-md-1 mb-2 khalti-container">
                //   <a href="https://web.khalti.com/#/" >
                //   <img src="https://seeklogo.com/images/K/khalti-logo-F0B049E67E-seeklogo.com.png" className="khalti" alt="khalti"/>
                //   </a>

                //   </div>
                //   <div class="col-md-1 mb-2 Cash-container">
                //   <a href="https://www.youtube.com/results?search_query=dream+on" >
                //     <img src="https://icons.veryicon.com/png/o/business/business-style-icon/wallet-62.png" className="Cash"/>
                //   </a>
                //   </div>