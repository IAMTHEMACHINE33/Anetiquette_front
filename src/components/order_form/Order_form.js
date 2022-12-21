import React from "react";
import "./Order_form.css";
import NavigateBlack from "../common/navblack";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../common/Footer";

const OrderForm = () => {
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
                <span class="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul class="list-group mb-3">
                <li
                  id="list"
                  class="list-group-item d-flex justify-content-between lh-condensed"
                >
                  <div>
                    <h6 class="my-0">Product name</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">Rs.12</span>
                </li>
                <li
                  id="list"
                  class="list-group-item d-flex justify-content-between lh-condensed"
                >
                  <div>
                    <h6 class="my-0">Second product</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">Rs.8</span>
                </li>
                <li
                  id="list"
                  class="list-group-item d-flex justify-content-between lh-condensed"
                >
                  <div>
                    <h6 class="my-0">Third item</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">Rs.5</span>
                </li>

                <li
                  id="list"
                  class="list-group-item d-flex justify-content-between"
                >
                  <span>Total (Rupee)</span>
                  <strong>Rs.20</strong>
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
                  />
                </div>

                
                <hr class="mb-4" />

                <h4 class="mb-4">Payment</h4>

                
                
                <div class="col">
                  <div class="col-md-1 mb-2 khalti-container">
                   {/* for khalti */}
                  <a href="https://web.khalti.com/#/" >
                  <img src="https://seeklogo.com/images/K/khalti-logo-F0B049E67E-seeklogo.com.png" className="khalti" alt="khalti"/>
                  </a>

                  </div>
                  <div class="col-md-1 mb-2 Cash-container">
                    {/* for cash */}
                  <a href="https://www.youtube.com/results?search_query=dream+on" >
                    <img src="https://icons.veryicon.com/png/o/business/business-style-icon/wallet-62.png" className="Cash" alt="khalti"/>
                  </a>
                  </div>
                </div>
                <hr class="mb-4" />
                
                <button
                  class="btn btn-danger btn-md btn-block mb-3"
                  type="button"
                >
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default OrderForm;
