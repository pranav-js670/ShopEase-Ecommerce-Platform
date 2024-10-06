import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-light">
                  About
                </a>
              </li>
              <li>
                <a href="/careers" className="text-light">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="text-light">
                  Blog
                </a>
              </li>
              <li>
                <a href="/policy" className="text-light">
                  Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a
                href="https://facebook.com"
                className="text-light me-3"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-light me-3"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-light"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 text-md-end">
            <h5 className="mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="mailto:support@pranavecommerce.com"
                  className="text-light"
                >
                  Email: support@pranavecommerce.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-light">
                  Phone: +123-456-7890
                </a>
              </li>
              <li>Bangalore, India</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-3" />
        <div className="text-center">
          <p className="mb-0 small">
            &copy; {new Date().getFullYear()} Pranav J S | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
