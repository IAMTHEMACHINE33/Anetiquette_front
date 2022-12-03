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
                  <label for="username">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">@</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      placeholder="Username"
                      required
                    />
                    <div class="invalid-feedback">
                      Your username is required.
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

                <div class="mb-3">
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

                <div class="row">
                  <div class="col-md-4 mb-3">
                    <label for="district">Country</label>
                    <select class="form-control" id="district" required>
                      <option value="">Choose</option>
                      <option value="country">Nepal</option>
                    </select>

                    <div class="invalid-feedback">State is required.</div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="district">State</label>
                    <select class="form-control" id="district" required>
                      <option value="">Choose</option>
                      <option value="kathmandu">Kathmandu</option>
                    </select>

                    <div class="invalid-feedback">State is required.</div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr class="mb-4" />

                <h4 class="mb-3">Payment</h4>

                <div class="d-block my-3">
                  <div class="custom-control custom-radio">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      class="custom-control-input"
                      checked
                      required
                    />
                    <label class="custom-control-label" for="credit">
                      Credit card
                    </label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      class="custom-control-input"
                      required
                    />
                    <label class="custom-control-label" for="debit">
                      Debit card
                    </label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      class="custom-control-input"
                      required
                    />
                    <label class="custom-control-label" for="paypal">
                      Paypal
                    </label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="cc-name">Name on card</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                    />
                    <small class="text-muted">
                      Full name as displayed on card
                    </small>
                    <div class="invalid-feedback">Name on card is required</div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="cc-number">Credit card number</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">Expiration</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Expiration date required</div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">CVV</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Security code required</div>
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
