import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footerWrapper}>
        <div className={styles.contactBox}>
          <h3>📬 광고 및 후원 문의</h3>
          <p>Advertising and Sponsorship Contact</p>
          <a href="mailto:90mansik@gmail.com">90mansik@gmail.com</a>
        </div>
  
        <div className={styles.infoBox}>
          <p>© 2025 MBTI-PLATFORM SHOP</p>
          <p>호스팅 서비스: Cloudflare</p>
          <p className={styles.disclaimer}>
            Disclaimer: All content is provided for fun and entertainment purposes only.
          </p>
          <a className={styles.privacyLink} href="/privacy">개인정보 처리방침</a>
        </div>
      </footer>
    );
  };

export default Footer;