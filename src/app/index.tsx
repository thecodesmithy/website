import * as React from 'react';
import * as Logo from 'assets/logo.png';

const App = (): React.ReactElement => {
  return (
    <div className="site-wrapper">
      <div className="site-wrapper__left-pad"></div>
      <div className="site-wrapper__content">
        <main>
          <header className="text-center">
            <img src={ Logo } alt="Code Smithy Logo" />
          </header>
          <hr className="w-100" />
          <div className="pad-left-1 pad-right-1">
            <p>
              This place is undergoing some major renovations right now, so if
              you want to get in touch with us, then do so with the information
              below.
            </p>
            <div className="spinning pad-top-3">
              <div className="fa-4x">
                <i className="fas fa-circle-notch fa-spin"></i>
              </div>
            </div>
          </div>
        </main>
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
                  <i className="fas fa-warehouse fa-fw"></i>{' '}
                  <a href="https://goo.gl/maps/tAZHfVruZZSgPTKC8">
                    86-90 Paul Street, London, EC2A 4NE
                  </a>
                </address>
              </li>
              <li className="infolist__item">
                <i className="fas fa-phone fa-fw" />{' '}
                <a href="tel:02039209019‬">020 3920 9019‬</a>
              </li>
              <li className="infolist__item">
                <i className="fas fa-mobile fa-fw" />{' '}
                <a href="tel:07505494975">07505 494975</a>
              </li>
              <li className="infolist__item">
                <i className="fas fa-envelope fa-fw" />{' '}
                <a href="mailto:hello@thecodesmithy.co.uk">
                  hello@thecodesmithy.co.uk
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__box">
            <ul className="infolist w-100">
              <li className="infolist__item text-right w-100">
                <i className="fab fa-linkedin fa-fw"></i>{' '}
                <a href="https://www.linkedin.com/company/19269440/admin/">
                  Follow us on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <div className="site-wrapper__right-pad"></div>
    </div>
  );
};

export default App;
