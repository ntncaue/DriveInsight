import React from 'react';
import styles from '../../style/Home.module.css'


const Home: React.FC = () => {
  return (
    <main className={styles.home}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h2>Diagnóstico, <br /> Rápido e  <br /> Preciso.</h2>
          <p>Consulte nossos serviços online de forma fácil e rápida.<br />
            Identifique problemas no seu veículo em poucos cliques e <br />
            mantenha tudo sob controle com eficiência.</p>
          <button className={styles.discoverButton}>Descubra</button>
        </div>
      </section>
    </main>

 
  );
}
export default Home;