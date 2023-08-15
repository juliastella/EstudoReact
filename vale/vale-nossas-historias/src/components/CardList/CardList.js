import React from 'react';
import Card from './CardList';
import data from './../../data.json';

const CardList = ({ card }) => {
  return (
    <div className="card-list">
      {data.items.map((item, index) => (
        <Card
          key={index}
          title={'item.title'}
          imagemJson={
            'item.contentFields[1].contentFieldValue.image.contentUrl'
          }
        />
      ))}
    </div>
  );
};

export default CardList;
