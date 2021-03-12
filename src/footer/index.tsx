import React from 'react';

const Footer = (): React.FC => {
  return (
    <footer className="footer">
      <div className="footer__box">
        <ul className="infolist">
          <li className="infolist__item">
            <strong>Code Smithy Ltd</strong>
          </li>
          <li className="infolist__item">
            Registered in England &amp; Wales 12066691
          </li>
          <li className="infolist__item">
            <address>
              <i className="fas fa-warehouse fa-fw"></i>
              <a href="https://goo.gl/maps/tAZHfVruZZSgPTKC8">
                86-90 Paul Street, London, EC2A 4NE
              </a>
            </address>
          </li>
          <li className="infolist__item">
            <i className="fas fa-phone fa-fw" />
            <a href="tel:02039209019‬">020 3920 9019‬</a>
          </li>
          <li className="infolist__item">
            <i className="fas fa-mobile fa-fw" />
            <a href="tel:07505494975">07505 494975</a>
          </li>
          <li className="infolist__item">
            <i className="fas fa-envelope fa-fw" />
            <a href="mailto:hello@thecodesmithy.co.uk">
              hello@thecodesmithy.co.uk
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__box">
        <ul className="infolist w-100">
          <li className="infolist__item text-right w-100">
            <i className="fab fa-linkedin fa-fw"></i>
            <a href="https://www.linkedin.com/company/19269440/admin/">
              Follow us on LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
