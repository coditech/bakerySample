import React from "react";
function ProductCard(props) {
  return (
    <li style={{ width: "25%", margin: "20px" }}>
      <div class="biseller-column">
        <img src={props.product.image} alt="" class="veiw-img" />

        <div class="biseller-name">
          <h4>{props.product.name}</h4>
          <p>$ {props.product.price}</p>
        </div>
        <a href="singlepage.html">
          <button class="add2cart">
            <span>| Details</span>
          </button>
        </a>
      </div>
    </li>
  );
}
export default ProductCard;
