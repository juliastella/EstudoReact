import React from 'react';
import Card from '../Card/Card';
import data from './../../data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardList = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 card-list">
      {data.items.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          imagemJson={item.contentFields[1].contentFieldValue.image.contentUrl}
          item_title={item.title}
        />
      ))}
    </div>
  );
};

export default CardList;
