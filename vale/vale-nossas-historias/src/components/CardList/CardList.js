import React from 'react';
import Card from '../Card/Card';

const CardList = ({ items }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 card-list">
      {items.map((item) => (
        <Card
          key={item.key}
          title={item.title}
          imagemJson={item.contentFields[1].contentFieldValue.image.contentUrl}
          item_title={item.title}
        />
      ))}
    </div>
  );
};

export default CardList;
