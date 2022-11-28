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

      <div className="maincontainer mt-5">
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"></div>
        <div class="container">
          <div class="py-5 text-center">
            <h2>Checkout form</h2>
          </div>

          <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span class="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Product name</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">Rs 12</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Second product</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">Rs 8</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Third item</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">Rs 5</span>
                </li>

                <li class="list-group-item d-flex justify-content-between">
                  <span>Total (Rupee)</span>
                  <strong>Rs 20</strong>
                </li>
              </ul>
            </div>
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">Billing address</h4>
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="username">Username</label>
                  <div className="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">@</span>
                    </div>
                    <input
                      type="text"
                      class="col"
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
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="you@example.com"
                    required
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
                    placeholder="Dillibazar"
                    required
                  />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div class="mb-3">
                  <label for="address2">
                    Address 2 <span class="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>

                <div class="row">
                  <div class="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select
                      className="custom-select d-block w-100"
                      id="country"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>Nepal</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select
                      class="custom-select d-block w-100"
                      id="state"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>Kathmandu</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
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
                <div class=" d-flex">
                  <input type="checkbox" class="mr-4" id="same-address" />
                  <label className="col" for="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>
                <br></br>
                <div className=" d-flex">
                  <input type="checkbox" class="mr-4" id="save-info" />
                  <label class="col" for="save-info">
                    Save this information for next time
                  </label>
                </div>

                <hr class="mb-4" />

                <h4 class="mb-3">Payment Option</h4>

                <div class="d-block my-3">
                  <div className="custom-radio">
                    <input
                      id="cash in hand"
                      name="paymentMethod"
                      type="radio"
                      class="col"
                      checked
                      required
                    />
                    <label class="label" for="credit">
                      Cash in hand
                    </label>
                  </div>
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
                  <div className="payment custom-radio">
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
                <div class="row gy-3">
                  <div class="col-md-5">
                    <label for="cc-name" class="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-name"
                      placeholder="Full name as displayed on card"
                      required=""
                    />

                    <div class="invalid-feedback">Name on card is required</div>
                  </div>
                  <div class="col-md-5">
                    <label for="cc-name" class="form-label">
                      Credit
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="cc-name"
                      placeholder="Credit card number"
                      required=""
                    />
                  </div>

                  <div class="col-md-3">
                    <label for="cc-expiration" class="form-label">
                      Expiration
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required=""
                    />
                    <div class="invalid-feedback">Expiration date required</div>
                  </div>

                  <div class="col-md-3">
                    <label for="cc-cvv" class="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required=""
                    />
                    <div class="invalid-feedback">Security code required</div>
                  </div>
                </div>
                <hr class="mb-4" />
                <button class="btn btn-primary btn-lg btn-block" type="button">
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OrderForm;
