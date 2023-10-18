import React from 'react';
import './MarketingInfo.css';

const MarketingInfo = () => {
  return (
    <div className="marketing-info">
      <h3>Why Choose Us?</h3>
      <div className="features">
        <div className="feature">
          <h4>Fast Performance</h4>
          <p>We ensure quick load times and smooth user experiences.</p>
        </div>
        <div className="feature">
          <h4>High Security</h4>
          <p>Your data is safe with us, thanks to top-notch security measures.</p>
        </div>
        <div className="feature">
          <h4>24/7 Support</h4>
          <p>Our support team is available around the clock to assist you.</p>
        </div>
      </div>
      <p>For more details, <a href="/contact">contact us</a>.</p>
    </div>
  );
};

export default MarketingInfo;
