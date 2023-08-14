import React from 'react';
import Card from './CardList';

const CardList = ({ card }) => {
  return (
    <div className="container">
      <div className="row">
        {card.map((card, index) => (
          <div className="col-md-4">
            <Card 
            titulo={'Oi'} 
            imagem={'/imagens/Vale80anosN.png'} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
