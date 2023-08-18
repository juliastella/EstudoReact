/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, imagemJson, item_title }) => {
  return (
    <div className={`${styles.cardBuild} col-4 mb-5`}>
        <a className={`${styles.cardLink} mr-3`} href="#">
          <img className="card-img-top" src={imagemJson} alt={item_title} />
          <div className={`${styles.cardTitle} card-body`}>
            <h5 className="card-title mt-0">{title}</h5>
          </div>
        </a>
    </div>
  );
};

export default Card;
