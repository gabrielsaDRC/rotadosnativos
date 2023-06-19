import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <div className="footer-info">
            <div className="footer-social">
              <div>
                <a href="https://www.instagram.com/rotadosnativos/" target="_blank" rel="noopener noreferrer">
                  <span ><i className="fab fa-instagram"></i> @rotadosnativos</span>
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/profile.php?id=100063456757888" target="_blank" rel="noopener noreferrer">
                  <span ><i className="fab fa-facebook"></i> /rotadosnativos</span>
                </a>
              </div>
              <div>
                <a href="https://api.whatsapp.com/send?phone=41988780788" target="_blank" rel="noopener noreferrer">
                  <span ><i className="fa fa-phone"></i> (84) 98801-6205</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-logo">
          <img src="./images/logo-footer.png" alt="Footer" style={{ height: 'auto' }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;