import React from "react";
import "./feature.css";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Feature = () => {
  return (
    <>
      <div className="container feature_container text-center">
        <div class="header">Featured items</div>

        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 2, 750: 3, 900: 4}}
            >
                <Masonry>
                    
                
          <div class="card">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
              class="card-img-top"
              alt="Hollywood Sign on The Hill"
            />
            <div class="card-body">
              <h5 class="card-title">XYZ</h5>
              <p class="card-text">$1000</p>
            </div>
          </div>

          <div class="card">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
              class="card-img-top"
              alt="Palm Springs Road"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>

          <div class="card">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
              class="card-img-top dashimg"
              alt="Los Angeles Skyscrapers"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>

          <div class="card">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
              class="card-img-top"
              alt="Skyscrapers"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
            
          </div>
          </Masonry>
            </ResponsiveMasonry>
        </div>
    
    </>
  );
};

export default Feature;
