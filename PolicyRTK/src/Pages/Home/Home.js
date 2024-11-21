import React from 'react';
import '../Home/style.css';

// Import local images
import PrivacyPolicyImg from '../Home/Privacy-Policy.jpg';
import ReturnPolicyImg from '../Home/corp_culture_online_1.jpg';
import TermsOfServiceImg from '../Home/Health-Insurance.jpg';

const Home = () => {
  return (
    <div className='container mt-5'>
      <h1 className="text-center font-bold" style={{ fontSize: '2rem' }}>Welcome To Policy</h1>
      <div className="d-flex justify-content-center">
        <div className="card-deck">
          <div className="card">
            <img src={PrivacyPolicyImg} className="card-img-top" alt="Privacy Policy" />
            <div className="card-body">
              <h5 className="card-title">Privacy Policy</h5>
              <p className="card-text">Details about our privacy practices.</p>
              <p className="card-text"><small className="text-muted">Our Privacy Policy outlines how we collect, use, and protect your personal information. 
                We may collect information such as your name, email address, and browsing activity. 
                </small></p>
            </div>
          </div>
          <div className="card">
            <img src={ReturnPolicyImg} className="card-img-top" alt="Return Policy" />
            <div className="card-body">
              <h5 className="card-title">Education Policy</h5>
              <p className="card-text">Information of Education Policy.</p>
              <p className="card-text"><small className="text-muted">Our Education Policy aims to provide a comprehensive framework for delivering quality education and fostering a conducive learning environment. The policy covers various aspects including curriculum design, student assessment, teacher qualifications, and educational resources.</small></p>
            </div>
          </div>
          <div className="card">
            <img src={TermsOfServiceImg} className="card-img-top" alt="Terms of Service" />
            <div className="card-body">
              <h5 className="card-title">Insurance Policy</h5>
              <p className="card-text">Information of Insurance Policy.</p>
              <p className="card-text"><small className="text-muted">Our Insurance Policy provides comprehensive coverage for various risks and ensures financial protection against unexpected events. It outlines the terms and conditions for coverage, claims processes, and the types of insurance we offer.</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
