function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="col-md-3 location">
            <h4>location</h4>
            <p>#04 Dist.City,State,PK</p>
            <h4>hours</h4>
            <p>Weekdays 7 a.m.-7 p.m.</p>
            <p>Weekends 8 a.m.-7 p.m.</p>
            <p>Call for Holidays Hours.</p>
          </div>
          <div className="col-md-3 customer">
            <h4>customer service</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod.{" "}
            </p>
            <h4>phone</h4>
            <h6>1(234)567-8910</h6>
            <h4>contact us</h4>
            <h6>contact us page.</h6>
          </div>
          <div className="col-md-3 social">
            <h4>get social</h4>
            <div className="face-b">
              <img src="images/foot.png" title="name" />
              <a href="#">
                <i className="fb"> </i>
              </a>
            </div>
            <div className="twet">
              <img src="images/foot.png" title="name" />
              <a href="#">
                <i className="twt"> </i>
              </a>
            </div>
          </div>

          <div className="clearfix"> </div>
        </div>
        <div className="footer-bottom">
          <p>
            Template by{" "}
            <a href="http://w3layouts.com" target="_blank">
              {" "}
              w3layouts
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
