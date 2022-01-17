import React, { useState, useEffect } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
function Card() {
  return (
    <div>
      <div class="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Light card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
