function ProductDetail() {
  return (
    <div className="details">
      <div className="container">
        <div className="row single">
          <div className="col-md-9">
            <div className="single_left">
              <div className="grid images_3_of_2">
                <ul id="etalage" style={{ listStyleType: "none" }}>
                  <li>
                    <img
                      className="etalage_thumb_image"
                      src="images/m1.jpg"
                      className="img-responsive"
                    />
                    {/*   <img
                      className="etalage_source_image"
                      src="images/m1.jpg"
                      className="img-responsive"
                      title=""
                    /> */}
                  </li>
                </ul>
                <div className="clearfix"></div>
              </div>
              <div className="desc1 span_3_of_2">
                <h3>Special Cake -Chocolate Truffle</h3>
                <p>$ 170.99</p>

                <div className="btn_form">
                  <a href="contact.html">Place Order</a>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="single-bottom1">
              <h6>Description</h6>
              <p className="prod-desc">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. Nam liber
                tempor cum soluta nobis eleifend option
              </p>
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
