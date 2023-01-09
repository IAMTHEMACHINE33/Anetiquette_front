import React from "react";
import "../homepage/numbers.css";
export const Numbers = () => {
return(
<>
<section id="hero" class="hero">
    

    <div class="icon-boxes position-relative">
      <div class="container position-relative">
        <div class="row gy-4 ">

          <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-users"></i></div>
              <h4 class="title"><a href="" class="stretched-link">Trusted Users</a></h4>
            </div>
          </div>
        

          <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-check-double"></i></div>
              <h4 class="title"><a href="" class="stretched-link">Authentic items</a></h4>
            </div>
          </div>
          

          <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-people-carry"></i></div>
              <h4 class="title"><a href="" class="stretched-link">Cash on Delivery</a></h4>
            </div>
          </div>
          

          <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-gavel"></i></div>
              <h4 class="title"><a href="" class="stretched-link">Auction 24 x 7</a></h4>
            </div>
          </div>
         

        </div>
      </div>
    </div>

    
  </section>
</>
);
}