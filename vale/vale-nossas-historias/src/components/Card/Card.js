/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Card.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ title, imagemJson }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={ imagemJson }
        alt="Imagem do card"
      />
      <div className="card-body">
        <h5 className="card-title titulo">{title}</h5>
      </div>
    </div>
  );
};

export default Card;
