import React from 'react';
import Card from '../Card/Card';

const CardList = ({ items, imageBaseUrl }) => {
  return (
    <>
      {items.map((item) => (
        <Card 
          key={item.key}
          title={item.title}
          imagemJson={`${imageBaseUrl}${item.contentFields[1].contentFieldValue.image.contentUrl}`}
          item_title={item.title}
        />
      ))}
    </>
  );
};

export default CardList;
