import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../style/Error.module.css'; 

const Error: React.FC = () => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>404</h1>
      <h2 className={styles.errorSubtitle}>Página não encontrada</h2>
      <p className={styles.errorMessage}>Desculpe, a página que você está procurando não existe.</p>
      <Link to="/" className={styles.errorLink}>Voltar para Home</Link>
    </div>
  );
};

export default Error; 
