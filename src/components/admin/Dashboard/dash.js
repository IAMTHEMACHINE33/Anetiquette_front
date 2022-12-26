import React from "react";
// import Sidebar from "../Sidebar/sidebar";
import "../Dashboard/dash.css";
import { MDBIcon } from 'mdb-react-ui-kit';


const Dash_admin = () => {
  return (
    <>
      <div className="whole">
      <input type="checkbox" id="nav-toggle"/>
    <div className="sidebar">
      <div className="sidebar-brand">
        <h2>
          <span className="lab la-accusoft">
          </span>
          <MDBIcon fas icon="user-graduate" />
          <hr/>
          <span>
            AntiQuette </span> 
        </h2>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="" className="active">
              <MDBIcon fas icon="tachometer-alt" />
                <span>
                  Dashboard
                  
                </span>
              </a>
            </li>
            <li>
              <a href="/users">
              <MDBIcon fas icon="users" />
                <span>
                  Customers</span>
              </a>
            </li>
            <li>
              <a href="">
              <MDBIcon fas icon="warehouse" />
                <span>
                Products</span>
              </a>
            </li>
            <li>
              <a href="">
              <MDBIcon fas icon="truck" />
                <span>
                Orders</span>
              </a>
            </li>
            <li>
              <a href="">
              <MDBIcon fas icon="plus" />
             
                
                <span>
                Add Product</span>
              </a>
            </li>
            <li>
              <a href="/login">
              <MDBIcon fas icon="sign-out-alt" />
                <span>
               Log Out</span>
              </a>
            </li>
          </ul>
        </div>
    </div>
        <div className="main-content">
          <header>
            <h3>
              <label for="nav-toggle">
                <span className="las la-bars">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
</svg>
                </span>
              </label>
              Dashboard
            </h3>
            <div className="search-wrapper">
              <span className="bi bi-search">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
              </span>
              <input type="search" placeholder="Search here" />
            </div>
            <div className="user-wrapper">
              <img
                src="https://preview.redd.it/ogvjtjvtfve71.png?auto=webp&s=390df20aca50d638da9bfeeedf4a16efd6ab297e"
                width="30px"
                height="30px"
                alt=""
              />
              <div>
                <h4>Binesh Dangol</h4>
                <small>Super Admin</small>
              </div>
            </div>
          </header>
          <main>
            <div class="cards">
              <div class="card-single">
                <div>
                  <h1>10</h1>
                  <span>Customers</span>
                  
                </div>
                <div>             
                  <span class="las la-users"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-check" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
</svg></span>
                </div>
              </div>
              <div class="card-single">
                <div>
                  <h1>19</h1>
                  <span>Orders</span>
                </div>
                <div>
                  <span class="las la-users"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
</svg></span>
                </div>
              </div>
              <div class="card-single">
                <div>
                  <h1>100</h1>
                  <span>Products</span>
                </div>
                <div>
                  <span class="las la-users"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
</svg></span>
                </div>
              </div>
              <div class="card-single">
                <div>
                  <h1>100$</h1>
                  <span>Income</span>
                </div>
                <div>
                  <span class="las la-users"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
</svg></span>
                </div>
              </div>
            </div>
            <div className="recent-grid">
              <div className="projects">
                <div className="card">
                <div className="card-header">
                  <h3>Recent Products</h3>
                  <button>
                    See all
                    <i class="fas fa-chevron-circle-right"></i>
                    <span className="las la-arrow-right"></span>
                  </button>
                </div>
                <div className="card-body">
                <div className="table-responsive">
                <table width="100%">
                    <thead>
                      <tr>
                        <td>Product</td>
                        <td>Category</td>
                        <td>Status</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Antique1</td>
                        <td>Auction</td>
                        <td>
                          <span className="status purple"> </span>
                          Review
                        </td>
                      </tr>
                      <tr>
                        <td>Antique2</td>
                        <td>Direct Purchase</td>
                        <td>
                          <span className="status pink"> </span>
                          In Progress
                        </td>
                      </tr>
                      <tr>
                        <td>Antique3</td>
                        <td>Auction</td>
                        <td>
                          <span className="status orange"> </span>
                          Pending
                        </td>
                      </tr>
                      <tr>
                        <td>Antique4</td>
                        <td>Auction</td>
                        <td>
                          <span className="status purple"> </span>
                          Review
                        </td>
                      </tr>
                      <tr>
                        <td>Antique5</td>
                        <td>Direct Purchase</td>
                        <td>
                          <span className="status pink"> </span>
                          In Progress
                        </td>
                      </tr>
                      <tr>
                        <td>Antique6</td>
                        <td>Auction</td>
                        <td>
                          <span className="status orange"> </span>
                          Pending
                        </td>
                      </tr>
                      <tr>
                        <td>Antique7</td>
                        <td>Auction</td>
                        <td>
                          <span className="status purple"> </span>
                          Review
                        </td>
                      </tr>
                      <tr>
                        <td>Antique8</td>
                        <td>Direct Purchase</td>
                        <td>
                          <span className="status pink"> </span>
                          In Progress
                        </td>
                      </tr>
                      <tr>
                        <td>Antique9</td>
                        <td>Auction</td>
                        <td>
                          <span className="status orange"> </span>
                          Pending
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
                </div>
              </div>
              <div className="customers">
                <div className="card">
                  <div className="card-header">
                    <h3>New Users</h3>
                    <button>
                      See all
                      <i class="fas fa-chevron-circle-right"></i>
                      <span className="las la-arrow-right">
                        
                      </span>
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="customer"> 
                    <div className="info">
                    <img src="https://preview.redd.it/ogvjtjvtfve71.png?auto=webp&s=390df20aca50d638da9bfeeedf4a16efd6ab297e" width="40px" height="40px" alt=""/>
                    </div>
                    <h4>Ram Thapa</h4>
                    <small>Addresss</small>
                    </div>
                    <div className="contact">
                      <i class="fas fa-user-check"></i>
                      <i class="fas fa-comment"></i>
                      <i class="fas fa-phone"></i>
                    </div>
                    <div className="customer"> 
                    <div className="info">
                    <img src="https://preview.redd.it/ogvjtjvtfve71.png?auto=webp&s=390df20aca50d638da9bfeeedf4a16efd6ab297e" width="40px" height="40px" alt=""/>
                    </div>
                    <h4>Ram Thapa</h4>
                    <small>Addresss</small>
                    </div>
                    <div className="contact">
                      <i class="fas fa-user-check"></i>
                      <i class="fas fa-comment"></i>
                      <i class="fas fa-phone"></i>
                    </div>
                    <div className="customer"> 
                    <div className="info">
                    <img src="https://preview.redd.it/ogvjtjvtfve71.png?auto=webp&s=390df20aca50d638da9bfeeedf4a16efd6ab297e" width="40px" height="40px" alt=""/>
                    </div>
                    <h4>Ram Thapa</h4>
                    <small>Addresss</small>
                    </div>
                    <div className="contact">
                      <i class="fas fa-user-check"></i>
                      <i class="fas fa-comment"></i>
                      <i class="fas fa-phone"></i>
                    </div>
                    <div className="customer"> 
                    <div className="info">
                    <img src="https://preview.redd.it/ogvjtjvtfve71.png?auto=webp&s=390df20aca50d638da9bfeeedf4a16efd6ab297e" width="40px" height="40px" alt=""/>
                    </div>
                    <h4>Ram Thapa</h4>
                    <small>Addresss</small>
                    </div>
                    <div className="contact">
                      <i class="fas fa-user-check"></i>
                      <i class="fas fa-comment"></i>
                      <i class="fas fa-phone"></i>
                    </div>
                    <div className="customer"> 
                    <div className="info">
                    <img src="https://preview.redd.it/ogvjtjvtfve71.png?auto=webp&s=390df20aca50d638da9bfeeedf4a16efd6ab297e" width="40px" height="40px" alt=""/>
                    </div>
                    <h4>Ram Thapa</h4>
                    <small>Addresss</small>
                    </div>
                    <div className="contact">
                      <i class="fas fa-user-check"></i>
                      <i class="fas fa-comment"></i>
                      <i class="fas fa-phone"></i>
                    </div>
                    <div className="customer"> 
                    <div className="info">
                    <img src="https://preview.redd.it/ogvjtjvtfve71.png?auto=webp&s=390df20aca50d638da9bfeeedf4a16efd6ab297e" width="40px" height="40px" alt=""/>
                    </div>
                    <h4>Ram Thapa</h4>
                    <small>Addresss</small>
                    </div>
                    <div className="contact">
                      <i class="fas fa-user-check"></i>
                      <i class="fas fa-comment"></i>
                      <i class="fas fa-phone"></i>
                    </div>
                    <div className="customer"> 
                    <div className="info">
                    <img src="https://preview.redd.it/ogvjtjvtfve71.png?auto=webp&s=390df20aca50d638da9bfeeedf4a16efd6ab297e" width="40px" height="40px" alt=""/>
                    </div>
                    <h4>Ram Thapa</h4>
                    <small>Addresss</small>
                    </div>
                    <div className="contact">
                      <i class="fas fa-user-check"></i>
                      <i class="fas fa-comment"></i>
                      <i class="fas fa-phone"></i>
                    </div>
                    <div className="customer"> 
                    <div className="info">
                    <img src="https://preview.redd.it/ogvjtjvtfve71.png?auto=webp&s=390df20aca50d638da9bfeeedf4a16efd6ab297e" width="40px" height="40px" alt=""/>
                    </div>
                    <h4>Ram Thapa</h4>
                    <small>Addresss</small>
                    </div>
                    <div className="contact">
                      <i class="fas fa-user-check"></i>
                      <i class="fas fa-comment"></i>
                      <i class="fas fa-phone"></i>
                    </div>

                    </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dash_admin;
