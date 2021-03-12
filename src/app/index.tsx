import React from 'react';
import Logo from '../assets/logo.png';

const App = (): React.ReactElement => {
  return (
    <div className="site-wrapper">
      <div className="site-wrapper__left-pad"></div>
      <div className="site-wrapper__content">
        <main>
          <header className="text-center">
            <img src={Logo} alt="Code Smithy Logo" />
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
      </div>
      <div className="site-wrapper__right-pad"></div>
    </div>
  );
};

export default App;
