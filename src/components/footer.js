import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/footer.css';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60); // Update the year every minute

    return () => {
      clearInterval(interval);
    };
  }, []);

  const footerLinks = [
    { label: 'Terms and Conditions', to: '/terms' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Privacy and Policy', to: '/privacy' },
    { label: 'Home', to: '/homepage' },
  ];

  return (
    <footer>
      <div className='footer-content'>
        <p>&copy; {currentYear}</p>
        <div className='footer-links'>
          {footerLinks.map((link, index) => (
            <Link key={index} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className='social-media-icons'>
        <a href='https://www.instagram.com/your_instagram_username/' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href='https://www.facebook.com/your_facebook_page/' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <div className='contact-info'>
        <p>Email: contact@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </footer>
  );
};

export default Footer;
