import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        {props.text}
      </li>
    </>
  );
}

export default CardItem;
