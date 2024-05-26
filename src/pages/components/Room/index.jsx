import React, { useState, useEffect } from 'react';

export const Room = ({ name, price, img, description, onSelect }) => {
  return (
    <div
      className="card"
      onClick={() => {
        onSelect(name, description, price, img);
        // console.log(name);
      }}
    >
      <img className="card__image" src={`http://localhost:4000${img}`} />
      <div className="card__title">{name}</div>
      <div className="card__body">{`${price} kč na osobu`}</div>
    </div>
  );
};
