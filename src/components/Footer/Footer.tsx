import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styles from '../../style/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <p>&copy; 2024 DriveInsight. Todos os direitos reservados.</p>
          <p>Email: <a href="mailto:contato@driveinsight.com">contato@driveinsight.com</a> | Ligue já: <a href="tel:+5511912345678">(11) 91234-5678</a></p>
        </div>
        <div className={styles.socials}>
          <a href="https://www.facebook.com/" target="_blank"><FaFacebookF /></a>
          <a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a>
          <a href="https://www.linkedin.com/" target="_blank"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;