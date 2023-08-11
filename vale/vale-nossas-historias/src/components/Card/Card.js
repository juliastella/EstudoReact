/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Card.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
  return (
    <div className="card">
      <img
        src={process.env.PUBLIC_URL + '/imagens/MineracaoPorElas.png'}
        className="card-img-top"
        alt="Imagem do card"
      />
      <div className="card-body">
        <h5 className="card-title titulo">Título do Card</h5>
      </div>
    </div>
  );
};

export default Card;
