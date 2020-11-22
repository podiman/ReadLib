import React from 'react';
import twitter from '../../icons/socialMedia/twitter.svg';
import facebook from '../../icons/socialMedia/facebook.svg';
import instagram from '../../icons/socialMedia/instagram.svg';
import './styles.scss';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            {/* <TextField text="About" /> */}
            <div className="aboutus">
                <h1>About</h1>
            </div>
            <div className="contactus">
                <h1>Connect</h1>
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
            </div>
        </div>
    );
}

export default Footer;