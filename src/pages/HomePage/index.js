import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import MarketingInfo from '../../components/MarketingInfo/MarketingInfo';
import './Homepage.css';

function HomePage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="home-page">
      <Helmet>
        <title>Your Website Name - Home</title>
      </Helmet>
      <section className="hero">
        <h1>Welcome to [Your Website Name]</h1>
        <p>Subtitle or brief description here.</p>
        <button onClick={() => setShowMore(!showMore)}>Learn More</button>
      </section>
      {showMore && (
        <div className="marketing-info fade-in">
          <MarketingInfo />
        </div>
      )}
    </div>
  );
}

export default HomePage;
