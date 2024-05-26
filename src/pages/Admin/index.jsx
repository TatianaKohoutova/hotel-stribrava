import React, { useState, useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const AdminPage = () => {
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    // Volání API pro načtení dat
    const fetchReservation = async () => {
      const response = await fetch('http://localhost:4001/api/reservations');
      const data = await response.json();
      setReservation(data.data);
    };

    fetchReservation();
  }, []);

  // Pokud data nejsou ještě načtena, zobrazí se načítání
  if (!reservation) {
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
        <h1>Detaily rezervace:</h1>
        <p>Pokoj: {reservation[0].name}</p>
        <p>E-mail: {reservation[0].detail.email}</p>
        <p>Kontakt: {reservation[0].detail.mobile}</p>
        <p>Počet osob: {reservation[0].detail.peopleNumber}</p>
        <p>Strava: {reservation[0].detail.meals}</p>
        <p>Datum příjezdu: {reservation[0].arrivalDate}</p>
        <p>Datum odjezdu: {reservation[0].departureDate}</p>
        <p>Speciální požadavky:</p>
        <ul>
          <li>Zvířata: {reservation[0].detail.pets ? 'Ano' : 'Ne'}</li>
          <li>
            Dětská postýlky: {reservation[0].detail.babyBed ? 'Ano' : 'Ne'}
          </li>
          <li>
            Bezbariérový přístup:{' '}
            {reservation[0].detail.wheelchair ? 'Ano' : 'Ne'}
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
