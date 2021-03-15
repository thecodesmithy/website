import React from 'react';
import './style.scss';

const Footer = (): React.FC => {
  return (
    <footer className="footer row">
      <div className="col-4">
        <h5>Contact Us...</h5>
        <div>
          <strong>Code Smithy Ltd</strong>
        </div>
        <address>86-90 Paul Street, London, EC2A 4NE</address>
        <div>Registered in England &amp; Wales 12066691</div>
        <br />
        <div>
          <i className="fas fa-phone fa-fw" /> 020 3920 9019‬
        </div>
        <div>
          <i className="fas fa-mobile fa-fw" /> 07505 494975
        </div>
        <div>
          <i className="fas fa-envelope fa-fw" /> hello@thecodesmithy.co.uk
        </div>
      </div>
      <div className="offset-4 col-4">
        <h5>Find us on socials...</h5>
        <div className="row">
          <div className="col-2">
            <a href="https://www.linkedin.com/company/19269440/admin/">
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
          </div>
          <div className="col-2">
            <a href="https://www.linkedin.com/company/19269440/admin/">
              <i className="fab fa-facebook fa-3x"></i>
            </a>
          </div>
          <div className="col-2">
            <a href="https://www.linkedin.com/company/19269440/admin/">
              <i className="fab fa-twitter fa-3x"></i>
            </a>
          </div>
          <div className="col-2">
            <a href="https://www.linkedin.com/company/19269440/admin/">
              <i className="fab fa-instagram fa-3x"></i>
            </a>
          </div>
          <div className="col-2">
            <a href="https://www.linkedin.com/company/19269440/admin/">
              <i className="fab fa-discord fa-3x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
