import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-page">
            <h1>About Us</h1>

            <div className="about-content">
                <div className="info-section">
                    <p>Welcome to [Your Brand Name]. We are a leading company in [Your Industry] with a passion for excellence and innovation.</p>

                </div>

                <div className="team-section">
                    <div className="management">
                        <h2>Management</h2>
                        <p>CEO</p>
                        <p>Fire2430</p>
                        <p>CFO</p>
                        <p>John Smith</p>

                    </div>

                    <div className="team-members">
                        <h2>Team Members</h2>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
