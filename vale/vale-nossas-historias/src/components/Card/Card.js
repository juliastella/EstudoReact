/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Card.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ titulo, imagem }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={process.env.PUBLIC_URL + { imagem }}
        alt="Imagem do card"
      />
      <div className="card-body">
        <h5 className="card-title titulo">{titulo}</h5>
      </div>
    </div>
  );
};

export default Card;
