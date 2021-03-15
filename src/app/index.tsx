import React from 'react';
import Footer from '../footer';
import Logo from '../assets/logo.png';
import ANDLogo from '../assets/and-digital-logo.png';
import AOLogo from '../assets/ao-logo.png';
import CoveaLogo from '../assets/covea-logo.png';
import EELogo from '../assets/ee-logo.png';
import EvestorLogo from '../assets/evestor-logo.png';
import OdeonLogo from '../assets/odeon-logo.png';
import PSLLogo from '../assets/psl-logo.png';
import XFXLogo from '../assets/xfx-logo.png';
import './style.scss';

const App = (): React.ReactElement => {
  return (
    <div className="site-wrapper">
      <div className="site-wrapper__header">
        <header className="row">
          <div className="col-6 offset-3">
            <img src={Logo} alt="Code Smithy Logo" className="img-fluid" />
          </div>
        </header>
      </div>
      <hr />
      <div className="site-wrapper__body">
        <p>Hello World!</p>
        <p>
          We&apos;re a software development consultancy who believe that our
          work is a craft and should be treated with the careful consideration
          for quality, reliability, performance and aesthetics as any other
          craftsmanship trade.
        </p>
        <p>
          We&apos;re engineers first and foremost and we believe that our work
          is not just an investment of our skill &amp; experience, it&apos;s an
          investment of our time as well. Time that is precious and
          irreplaceable, which means we have spent a long, long time making sure
          that the time we spend building products is time well spent with
          nothing going to waste.
        </p>
        <h3>Some of the companies our people have worked with...</h3>
        <div className="row clients">
          <div className="col-2">
            <img src={ANDLogo} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={AOLogo} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={CoveaLogo} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={EELogo} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={EvestorLogo} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={OdeonLogo} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={PSLLogo} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={XFXLogo} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="site-wrapper__footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
