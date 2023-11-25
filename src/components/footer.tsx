
import React from 'react';
import { faFacebook, faInstagram,faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: 'skyblue', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: 'white' }}>This is the footer component.</p>
            <div style={{ marginTop: '2rem' }}>
                <a href="https://www.facebook.com/StarickServices/" target="_blank" style={{ marginRight: '1rem' }}><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://twitter.com/starickceo" target="_blank" style={{ marginRight: '1rem' }}><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.linkedin.com/company/starick/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <p style={{ color: 'white', fontSize: '0.875rem', marginTop: '2rem' }}>©  2023 Starick. All Rights Reserved. | Privacy & Disclaimer | Site by OM4</p>
        </footer>
    );
};

export default Footer;
