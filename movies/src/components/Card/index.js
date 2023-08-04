/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Card.module.css';

function Card() {
  return (
    <section className={styles.card}>
      <ul>
        <li>
          <a href="#">
            <img
              src="/imagens/Vale80anos.png"
              alt="Funcionario tabalhando com plantas"
            />
            <h2>Vale 80 anos</h2>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Card;
