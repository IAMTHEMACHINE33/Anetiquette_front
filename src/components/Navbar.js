import React from 'react';
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand ml-3" href="{}">antiquette</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    
      </ul>
        <span class="navbar-nav ">
          <ul class='navbar-nav'>
        <li class="nav-item mx-2">
            <a class="nav-link active" aria-current="page" href="/dash">HOME</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="{}">CATEGORY</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="{}">ABOUT US</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="{}">HELP</a>
          </li>
          <li class="nav-item mx-2" >
            <a class="nav-link" href="{}">CONTACT</a>
          </li>
          <li class="nav-item mx-2" >
            <a class="nav-link" href="{}"></a>
          </li>
          
          
        </ul>
        
        
        
        </span>
        <span class='navbar-nav '>
          <ul class='navbar-nav '>
          <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    
  </form>
          <a class="nav-link" href="/">Cart</a>
          <a class="nav-link" href="/">Profile</a>
          </ul>
        
        </span>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;
