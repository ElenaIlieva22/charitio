import React from 'react';
import { FiDollarSign } from 'react-icons/fi';
import './MainSectionHome.css'; 

const MainSectionHome = () => {
  return (
    <div>
    
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-grid">
      
            <div className="left-content">
              <p className="help-text">Help The Poor Children</p>
              <h1 className="hero-title">
                Your Mercy Can Change Someone's Life
              </h1>
              <p className="hero-description">
                We help local nonprofits access the funding, tools, training, and support they need to become more.
              </p>
              <button className="hero-button">
                Get Started
              </button>
            </div>

            <div className="right-content">
              <div className="image-grid">
                <div className="image-wrapper">
                  <div className="image-container">
                    <img
                      src="src/img/kid1.png"
                      alt="Child with backpack"
                    />
                  </div>
                  <div className="supporters">
                    <div className="supporter-grid">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <img
                          key={i}
                          src={`https://i.pravatar.cc/100?img=${i}`}
                          alt={`Supporter ${i}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="second-image">
                  <div className="image-container">
                    <img
                      src="src/img/kid2.png"
                      alt="Child studying"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-container">
        <div className="stats-card">
          <div className="stats-content">
            <div className="icon-wrapper">
              <FiDollarSign className="stats-icon" />
            </div>
            <div className="stats-text">
              <h3>252+</h3>
              <p>Total Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MainSectionHome;
