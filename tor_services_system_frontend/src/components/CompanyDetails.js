import React from 'react';
import './CompanyDetails.css'; // Assuming you have a CSS file for styling

const CompanyDetailsComponent = () => {
  return (
    <div className="company-details">
      <h1>About ToR Services LTD</h1>
      
      <section className="mission">
        <h2>Mission</h2>
        <p>ToR Services LTD aims to revolutionize the real estate industry in Rwanda by providing a comprehensive platform that registers all residential and commercial properties. We strive to simplify the process for tenants to find housing, for property owners to list their assets, and for ensuring seamless tax compliance with the government.</p>
      </section>
      
      <section className="vision">
        <h2>Vision</h2>
        <p>To become the leading digital platform in Rwanda that connects tenants, landlords, and property managers, fostering a transparent and efficient real estate market that benefits all stakeholders.</p>
      </section>
      
      <section className="objectives">
        <h2>Objectives</h2>
        <ul>
          <li>Comprehensive Property Registration: Register all residential and commercial properties in Rwanda, creating a centralized database accessible to tenants, landlords, and property managers.</li>
          <li>Simplified Housing Search: Provide an easy-to-use platform where tenants can effortlessly find and rent properties that meet their needs.</li>
          <li>Facilitate Tax Compliance: Assist property owners in maintaining accurate records of their assets, ensuring they can easily comply with government tax regulations.</li>
          <li>Enhance Market Transparency: Promote transparency in the real estate market by providing reliable and up-to-date information on property listings and transactions.</li>
          <li>Support Property Managers: Offer tools and resources for property managers and commissionaires to efficiently manage and bring properties into the system, contributing to the overall growth and organization of the real estate sector.</li>
        </ul>
      </section>
    </div>
  );
};

export default CompanyDetailsComponent;
