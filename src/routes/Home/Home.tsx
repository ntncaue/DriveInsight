import React from 'react';
import styles from '../../style/Home.module.css'
import aboutImage from '../../../public/about.png';
import diagnosis from '../../../public/diagnosis.png';
import budget from '../../../public/budget.png';
import maintenance from '../../../public/maintenance.png';
import scheduling from '../../../public/scheduling.png';


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

      {/* Seção Sobre Nós */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h2 className={styles.aboutTitle}>SOBRE NÓS</h2>
          <div className={styles.aboutBody}>
            <div className={styles.aboutText}>
              <p>
                A DriveInsight foi criada com o objetivo de modernizar o diagnóstico automotivo, utilizando tecnologia avançada para oferecer uma experiência rápida e precisa. Nosso foco está em simplificar o processo de identificação de problemas em veículos, proporcionando soluções inteligentes que ajudam motoristas e oficinas a economizar tempo e recursos.
              </p>
              <p>
                Nossa plataforma analisa dados e sintomas relatados pelos usuários, identificando padrões e sugerindo ações corretivas baseadas em um histórico robusto de manutenções. Com isso, garantimos diagnósticos mais confiáveis e eficientes para diversas marcas e modelos.
              </p>
              <p>
                Somos uma equipe apaixonada por inovação e engenharia automotiva, dedicada a transformar a maneira como diagnósticos são feitos. Acreditamos que, com o uso de IA e aprendizado de máquina, é possível criar um sistema que melhore significativamente a experiência de reparo e manutenção, oferecendo conveniência e confiança para nossos usuários.
              </p>
            </div>
            <div className={styles.aboutImage}>
              <img src={aboutImage} alt="Quem Somos" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção Serviços */}
      <section className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>SERVIÇOS</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <img src={diagnosis} alt="Diagnóstico Automotivo Online" />
            <h3>Diagnóstico Automotivo Online</h3>
            <button className={styles.serviceButton}>Ver Mais</button>
          </div>
          <div className={styles.serviceCard}>
            <img src={budget} alt="Orçamento Automatizado" />
            <h3>Orçamento Automatizado</h3>
            <button className={styles.serviceButton}>Ver Mais</button>
          </div>
          <div className={styles.serviceCard}>
            <img src={maintenance} alt="Manutenção Preventiva" />
            <h3>Manutenção Preventiva</h3>
            <button className={styles.serviceButton}>Ver Mais</button>
          </div>
          <div className={styles.serviceCard}>
            <img src={scheduling} alt="Agendamento de Serviços" />
            <h3>Agendamento de Serviços</h3>
            <button className={styles.serviceButton}>Ver Mais</button>
          </div>
        </div>
      </section>

    </main>



    
 
  );
}
export default Home;