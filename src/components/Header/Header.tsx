import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styles from '../../style/Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>DRIVEINSIGHT</h1>
        <nav>
          <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
            <li><Link to="/" className={styles.navLink}>Home</Link></li>
            <li><a href="#sobre-nos" className={styles.navLink}>Sobre Nós</a></li>
            <li><a href="#servicos" className={styles.navLink}>Serviços</a></li>
            <li><a href="#equipe" className={styles.navLink}>Equipe</a></li>
            <li><a href="#contato" className={styles.navLink}>Contato</a></li>
          </ul>
        </nav>
        <button className={styles.ctaButton}>Contato</button>

        {/* Ícone do menu hambúrguer */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;