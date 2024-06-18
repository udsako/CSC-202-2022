import React from 'react';
import { Link } from 'react-router-dom';

const HomePg = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Zee's Dentals Ltd.</h1>
      <p>Manage your patients' clinical records with ease.</p>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Dental Check-ups</li>
          <li>Teeth Whitening</li>
          <li>Fillings and Restorations</li>
          <li>Root Canal Treatment</li>
          <li>Extractions</li>
        </ul>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
        Patients want a highly trained dental expert, that goes without saying. But they also want someone they trust and feel at ease with, who can provide them with a comfortable dental experience
        Zee's dental care does a great job at making sure that what they are selling to patients are benefits rather than simply features of their clinic. They also address several patient concerns in their copy, including price and convenience.
        </p>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>
          Phone: 125-496-8670<br />
          Email: info@zeedental.com<br />
          Address: 123 Main Street, City, State, ZIP
        </p>
      </section>
      <div>
  <Link to="/patient-record" className="link">
    Get Started
  </Link>
</div>
    </div>
  );
  };

export default HomePg;