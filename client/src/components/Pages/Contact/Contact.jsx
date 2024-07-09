import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact-main-content">
      <div className="layout">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Thank you for your interest in ThirdEye. If you have any questions, concerns, or feedback, please don't hesitate to reach out to us.</p>
          
          <div className="contact-section">
            <h3>Customer Service</h3>
            <p>For assistance with orders, products, or general inquiries, our customer service team is available to help you.</p>
            <p>Email: <a href="mailto:cutomercarethirdeye041122@gmail.com">cutomercarethirdeye041122@gmail.com</a></p>
            <p>Phone: <a href="tel:+917982977125">7982977125</a></p>
            <p>Customer service hours: 10:00 AM to 5:00 PM</p>
          </div>
          
          <div className="contact-section">
            <h3>Corporate Headquarters</h3>
            <p>If you need to contact our corporate headquarters for business inquiries, partnerships, or media inquiries, please use the following contact information:</p>
            <p>Enloomed India Private Limited</p>
            <p>C-1622, Gaur Siddhartham</p>
            <p>Ghaziabad, Uttar Pradesh, 201009</p>
            <p>India</p>
            <p>Email: <a href="mailto:thirdeye041122@gmail.com">thirdeye041122@gmail.com</a></p>
            <p>Phone: <a href="tel:+917982977125">7982977125</a></p>
          </div>

          <div className="contact-section">
            <h3>Feedback Form</h3>
            <p>If you prefer, you can also use the form below to send us a message directly.</p>
            <p><a href="https://forms.gle/Ykp7n4fjECF2YFGh8" target="_blank" rel="noopener noreferrer">Feedback Form</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
