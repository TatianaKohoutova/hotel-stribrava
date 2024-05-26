import React, { useState, useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const AdminPage = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Volání API pro načtení dat
    const fetchReservations = async () => {
      const response = await fetch('http://localhost:4001/api/reservations');
      const data = await response.json();
      setReservations(data.data);
    };

    fetchReservations();
  }, []);

  // Pokud data nejsou ještě načtena, zobrazí se načítání
  if (!reservations.length) {
    return (
      <>
        <Header />
        <div>Loading...</div>
        <Footer />
      </>
    );
  }

  // Zobrazení dat rezervace, pokud jsou načtena
  return (
    <>
      <Header />
      <div>
        <h1>Detaily rezervací:</h1>
        {reservations.map((reservation, index) => (
          <div key={index}>
            <h2>Rezervace {index + 1}</h2>
            <p>Pokoj: {reservation.name}</p>
            <p>E-mail: {reservation.detail.email}</p>
            <p>Kontakt: {reservation.detail.mobile}</p>
            <p>Počet osob: {reservation.detail.peopleNumber}</p>
            <p>Strava: {reservation.detail.meals}</p>
            <p>Datum příjezdu: {reservation.arrivalDate}</p>
            <p>Datum odjezdu: {reservation.departureDate}</p>
            <p>Speciální požadavky:</p>
            <ul>
              <li>Zvířata: {reservation.detail.pets ? 'Ano' : 'Ne'}</li>
              <li>Dětská postýlky: {reservation.detail.babyBed ? 'Ano' : 'Ne'}</li>
              <li>Bezbariérový přístup: {reservation.detail.wheelchair ? 'Ano' : 'Ne'}</li>
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
