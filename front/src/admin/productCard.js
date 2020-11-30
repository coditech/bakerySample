import React from "react";

export default function ProductCard() {
  return (
    <li style={{ width: "40%", margin: "20px" }}>
      <div class="biseller-column">
        <img src="images/11.jpg" alt="" class="veiw-img" />

        <div class="biseller-name">
          <h4>Delicious</h4>
          <p>$ 170.99</p>
        </div>
        <span>|Description</span>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Nam liber tempor cum soluta nobis eleifend option
        </p>
        <div
          className="btn_form"
          style={{ display: "inline-block", marginRight: "10px" }}
        >
          <a href="#">Edit ✎</a>
        </div>
        <div className="btn_form" style={{ display: "inline-block" }}>
          <a href="#">Delete ✖</a>
        </div>
      </div>
    </li>
  );
}
