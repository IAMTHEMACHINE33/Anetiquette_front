import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../cart/cart.css";

import NavigateBlack from "../common/navblack";
import Footer from "../common/Footer";

const Cart = () => {
  return (
    <>
      <NavigateBlack />
      <div class="cart-container-fluid py-5 ">
        <div class="container d-flex justify-content-center">
          <div class="row ">
            <div class="card py-3 col-md-11 p-2">
              <h3 id="cart" class="mt-0">
                Cart items
              </h3>
              <hr class="my-2"></hr>
              <div class="row">
                <div id="ml" class="col-md-3 mb-2">
                  <img
                    src="https://bridportantiques.co.uk/wp-content/uploads/2021/08/Slide2.jpg"
                    class="w-100"
                    alt="picture"
                  ></img>
                </div>
                <div class="col-md-6 mb-2">
                  <p>
                    <strong>Name</strong>
                  </p>
                  <p>
                    This is product name where name and description are given
                  </p>
                  <p>Category: </p>
                  <button
                    type="button"
                    class="btn btn-primary btn-sm me-1 mb-2"
                    data-mdb-toggle="tooltip"
                    title="Remove item"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm mb-2"
                    data-mdb-toggle="tooltip"
                    title="Move to the wish list"
                  >
                    <i class="fas fa-heart"></i>
                  </button>
                </div>
                <div id="mll" class="col-md-2 mb-2">
                  <p>
                    <strong>Price</strong>
                  </p>
                  <p>Rs.18</p>
                </div>
              </div>
              <hr class="my-2"></hr>
              <div class="row">
                <div id="ml" class="col-md-3 mb-2">
                  <img
                    src="https://bridportantiques.co.uk/wp-content/uploads/2021/08/Slide2.jpg"
                    class="w-100"
                    alt="picture"
                  ></img>
                </div>
                <div class="col-md-6 mb-2">
                  <p>
                    <strong>Name</strong>
                  </p>
                  <p>
                    This is product name where name and description are given
                  </p>
                  <p>Category: </p>
                  <button
                    type="button"
                    class="btn btn-primary btn-sm me-1 mb-2"
                    data-mdb-toggle="tooltip"
                    title="Remove item"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm mb-2"
                    data-mdb-toggle="tooltip"
                    title="Move to the wish list"
                  >
                    <i class="fas fa-heart"></i>
                  </button>
                </div>
                <div id="mll" class="col-md-2 mb-2  ">
                  <p>
                    <strong>Price</strong>
                  </p>
                  <p>Rs.18</p>
                </div>
              </div>
            </div>
            <div class="card py-3 col-md-11 mt-3">
              <div class="card-body">
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p class="mb-0">12.10.2020 - 14.10.2020</p>
              </div>
            </div>
            <div class="card py-3 col-md-11 mt-3">
              <div class="card-body">
                <p>
                  <strong>We accept</strong>
                </p>
                <img
                  class="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa"
                />
                <img
                  class="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express"
                />
                <img
                  class="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard"
                />
                <img
                  class="me-2"
                  width="50px"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal acceptance mark"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-header py-3">
                <h5 id="cart" class="mb-0">
                  Summary
                </h5>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>Rs.53.98</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p class="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>Rs.53.98</strong>
                    </span>
                  </li>
                </ul>

                <button type="button" class="btn btn-danger btn-lg btn-block">
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;