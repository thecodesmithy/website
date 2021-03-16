import React from 'react';
import Footer from '../footer';
import Logo from '../assets/logo.png';
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
      </div>
      <div className="site-wrapper__footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
