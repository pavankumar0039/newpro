import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="follow-us-section pt-5 pb-5" id="followUsSection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            
            <h1  className="follow-us-section-heading">Follow Us</h1>
          </div>
          <div className="col-12">
            <div className="d-flex flex-row justify-content-center">
              <div className="follow-us-icon-container">
                <i className="fab fa-twitter icon"></i>
              </div>
              <div className="follow-us-icon-container">
                <i className="fab fa-instagram icon"></i>
              </div>
              <div className="follow-us-icon-container">
                <i className="fab fa-facebook icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-section pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <img alt=''
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-logo-light.png"
              className="food-munch-logo"
            />
            <h1 className="footer-section-mail-id">orderfood@foodmunch.com</h1>
            <p className="footer-section-address">
              123 Ayur Vigyan Nagar, New Delhi, India.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
