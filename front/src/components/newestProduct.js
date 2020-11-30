function NewestProduct() {
  return (
    <div className="col-md-4 top-grid">
      <div className="top-grid-head">
        <h3>NEWEST CAKE</h3>
      </div>
      <div className="top-grid-info">
        <img src="images/img1.jpg" className="img-responsive" title="name" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        <span>$60</span>
        <div className="clearfix"> </div>
        <a className="btn" href="products.html">
          Buy Now
        </a>
      </div>
    </div>
  );
}
export default NewestProduct;
