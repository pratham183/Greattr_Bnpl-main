import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col-logo">
            <div>
              <img
                src="assets/img/greattrAndLogoWhite.png"
                className="foot-logo"
              />
              <h5 className="copyright">Greattr&#169;2022</h5>
            </div>
          </div>
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Terms And Conditions</a>
              </li>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
