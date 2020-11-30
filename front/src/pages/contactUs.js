function ContactUs() {
  return (
    <div className="content">
      <div className="container">
        <h2>Contact</h2>
        <div className="main-content">
          <div className="contact">
            <div className="contact_info">
              <h3>Find Us Here</h3>
              {/* 	<div className="map">
							<iframe width="100%" height="175" frameborder="0" scrolling="no" marginheight="0"
								marginwidth="0"
								src="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Lighthouse+Point,+FL,+United+States&amp;aq=4&amp;oq=light&amp;sll=26.275636,-80.087265&amp;sspn=0.04941,0.104628&amp;ie=UTF8&amp;hq=&amp;hnear=Lighthouse+Point,+Broward,+Florida,+United+States&amp;t=m&amp;z=14&amp;ll=26.275636,-80.087265&amp;output=embed"></iframe><br><small><a
									href="https://maps.google.co.in/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Lighthouse+Point,+FL,+United+States&amp;aq=4&amp;oq=light&amp;sll=26.275636,-80.087265&amp;sspn=0.04941,0.104628&amp;ie=UTF8&amp;hq=&amp;hnear=Lighthouse+Point,+Broward,+Florida,+United+States&amp;t=m&amp;z=14&amp;ll=26.275636,-80.087265"
									style={{color:"#666",textAlign:"left",fontSize:"12px"}}>View Larger Map</a></small>
						</div> */}
            </div>
            <div className="section group">
              <div className="col span_1_of_3">
                <div className="company_address">
                  <h3>Bakery Information :</h3>
                  <p>500 Lorem Ipsum Dolor Sit,</p>
                  <p>22-56-2-9 Sit Amet, Lorem,</p>
                  <p>USA</p>
                  <p>Phone:(00) 222 666 444</p>
                  <p>Fax: (000) 000 00 00 0</p>
                  <p>
                    Email: <span>info@mycompany.com</span>
                  </p>
                  <p>
                    Follow on: <span>Facebook</span>, <span>Twitter</span>
                  </p>
                </div>
              </div>
              <div className="col span_2_of_3">
                <div className="contact-form">
                  <h3>Contact Us</h3>
                  <form method="post" action="contact-post.html">
                    <div>
                      <span>
                        <label>NAME</label>
                      </span>
                      <span>
                        <input
                          name="userName"
                          type="text"
                          className="textbox"
                        />
                      </span>
                    </div>
                    <div>
                      <span>
                        <label>E-MAIL</label>
                      </span>
                      <span>
                        <input
                          name="userEmail"
                          type="text"
                          className="textbox"
                        />
                      </span>
                    </div>
                    <div>
                      <span>
                        <label>MOBILE</label>
                      </span>
                      <span>
                        <input
                          name="userPhone"
                          type="text"
                          className="textbox"
                        />
                      </span>
                    </div>
                    <div>
                      <span>
                        <label>SUBJECT</label>
                      </span>
                      <span>
                        <textarea name="userMsg"> </textarea>
                      </span>
                    </div>
                    <div>
                      <span>
                        <input type="submit" value="Submit" />
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="clear"> </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
