import React, { useState, useEffect } from 'react';

export const RoomList = () => {
  return (
    <section class="dark">
      <div class="container">
        <h2>Heading</h2>
        <p>Quas odio quidem, enim nihil unde quia tem poribus vitae in ab.</p>
        <div class="cards-row">
          <div class="card">
            <img class="card__image" src="img/image1.svg" />
            <div class="card__title">Card 1</div>
            <div class="card__body">Sunt natus</div>
          </div>

          <div class="card">
            <img class="card__image" src="img/image1.svg" />
            <div class="card__title">Card 2</div>
            <div class="card__body">Laboriosam</div>
          </div>

          <div class="card">
            <img class="card__image" src="img/image1.svg" />
            <div class="card__title">Card 3</div>
            <div class="card__body">Eveniet officiis</div>
          </div>
        </div>
      </div>
    </section>
  );
};
