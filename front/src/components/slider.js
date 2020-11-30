function Slider() {
  return (
    <div className="container">
      <div className="img-slider">
        {/* <script src="js/responsiveslides.min.js"></script>
			<script>
				// You can also use "$(window).load(function() {"
				$(function () {
					// Slideshow 4
					$("#slider4").responsiveSlides({
						auto: true,
						pager: true,
						nav: true,
						speed: 500,
						namespace: "callbacks",
						before: function () {
							$('.events').append("<li>before event fired.</li>");
						},
						after: function () {
							$('.events').append("<li>after event fired.</li>");
						}
					});

				});
			</script> */}
        <div id="top" className="callbacks_container">
          <ul className="rslides" id="slider4">
            <li>
              <img src="images/slide.jpg" className="img-responsive" alt="" />
              <div className="slider-caption">
                <div className="slider-caption-left text-center">
                  <h1>
                    ARE YOU LOOKING FOR SWEET, STYLISH AND DELECIOUS BIRTHDAY
                    CAKES?
                  </h1>
                  <p>
                    DON'T WORRY, WE CAN HELP YOU! CHECK OUR BEST CAKE SECTION.
                  </p>
                  <a className="buy-btn" href="/products.html">
                    Buy Now
                  </a>
                </div>
                <div className="slider-caption-right">
                  <a href="#">
                    <img
                      src="images/iteam.png"
                      className="img-responsive"
                      title="name"
                    />
                  </a>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="share-on">
                <div className="share-on-grid">
                  <div className="share-on-grid-left">
                    <h3>Share On</h3>
                  </div>
                  <div className="share-on-grid-right">
                    <a href="#">
                      <span className="facebook"> </span>
                    </a>
                    <a href="#">
                      <span className="twitter"> </span>
                    </a>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="clearfix"> </div>
              </div>
            </li>
            <li>
              <img src="images/slide.jpg" className="img-responsive" alt="" />
              <div className="slider-caption">
                <div className="slider-caption-left text-center">
                  <h1>I AM NOW THE SECOND SLIDE!</h1>
                  <p>DON'T WORRY, ITS WORKING.</p>
                </div>
                <div className="slider-caption-right">
                  <a href="#">
                    <img
                      src="images/iteam.png"
                      className="img-responsive"
                      title="name"
                    />
                  </a>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="share-on">
                <div className="share-on-grid">
                  <div className="share-on-grid-left">
                    <h3>Share On</h3>
                  </div>
                  <div className="share-on-grid-right">
                    <a href="#">
                      <span className="facebook"> </span>
                    </a>
                    <a href="#">
                      <span className="twitter"> </span>
                    </a>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="clearfix"> </div>
              </div>
            </li>
            <li>
              <img src="images/slide.jpg" className="img-responsive" alt="" />
              <div className="slider-caption">
                <div className="slider-caption-left text-center">
                  <h1>THIRD SLIDE!!</h1>
                  <p>STILL WORKING.</p>
                  <a className="buy-btn" href="#">
                    Buy Now
                  </a>
                </div>
                <div className="slider-caption-right">
                  <a href="#">
                    <img
                      src="images/iteam.png"
                      className="img-responsive"
                      title="name"
                    />
                  </a>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="share-on">
                <div className="share-on-grid">
                  <div className="share-on-grid-left">
                    <h3>Share On</h3>
                  </div>
                  <div className="share-on-grid-right">
                    <a href="#">
                      <span className="facebook"> </span>
                    </a>
                    <a href="#">
                      <span className="twitter"> </span>
                    </a>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="clearfix"> </div>
              </div>
            </li>
            <li>
              <img src="images/slide.jpg" className="img-responsive" alt="" />
              <div className="slider-caption">
                <div className="slider-caption-left text-center">
                  <h1>
                    ARE YOU LOOKING FOR SWEET, STYLISH AND DELECIOUS BIRTHDAY
                    CAKES?
                  </h1>
                  <p>
                    DON'T WORRY, WE CAN HELP YOU! CHECK OUR BEST CAKE SECTION.
                  </p>
                  <a className="buy-btn" href="#">
                    Buy Now
                  </a>
                </div>
                <div className="slider-caption-right">
                  <a href="#">
                    <img
                      src="images/iteam.png"
                      className="img-responsive"
                      title="name"
                    />
                  </a>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="share-on">
                <div className="share-on-grid">
                  <div className="share-on-grid-left">
                    <h3>Share On</h3>
                  </div>
                  <div className="share-on-grid-right">
                    <a href="#">
                      <span className="facebook"> </span>
                    </a>
                    <a href="#">
                      <span className="twitter"> </span>
                    </a>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="clearfix"> </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  );
}
export default Slider;
