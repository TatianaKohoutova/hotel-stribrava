import React, { useState, useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const AdminPage = () => {
  const [reservations, setReservations] = useState([]);
  const [confirmed, setConfirmed] = useState('');

  useEffect(() => {
    // Volání API pro načtení dat
    const fetchReservations = async () => {
      const response = await fetch(
        'http://localhost:4001/api/reservations?filter=new:eq:true',
      );
      const data = await response.json();
      setReservations(data.data);
    };

    fetchReservations();
  }, []);

  const handleConfirm = async (e) => {
    e.preventDefault();

    const id = e.target.value;
    console.log(id);
    await fetch(`http://localhost:4001/api/reservations/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          op: 'replace',
          path: '/confirmed',
          value: true,
        },
      ]),
    });

    setConfirmed('reservation-accepted');
    window.location.reload();
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    const id = e.target.value;
    console.log(id);

    const isConfirmed = window.confirm(
      'Jste si jisti, že chcete vymazat rezervaci?',
    );
    if (isConfirmed) {
      // const response =
      await fetch(`http://localhost:4001/api/reservations/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            op: 'replace',
            path: '/new',
            value: false,
          },
        ]),
      });
      await fetch(`http://localhost:4001/api/reservations/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            op: 'replace',
            path: '/rejected',
            value: true,
          },
        ]),
      });
      // console.log('Updated poptavkau');
      window.location.reload();
    }
  };

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
      <div className={`reserv-page`}>
        <h1>Detaily rezervací:</h1>
        {reservations.map((reservation, index) => (
          <div
            key={index}
            className={`reservation ${confirmed} ${
              reservation.confirmed ? 'reservation-accepted' : ''
            }`}
          >
            <h2>Rezervace {index + 1}</h2>
            <p>Pokoj: {reservation.name}</p>
            <p>E-mail: {reservation.detail.email}</p>
            <p>Kontakt: {reservation.detail.mobile}</p>
            <p>Počet osob: {reservation.detail.peopleNumber}</p>
            <p>Strava: {reservation.detail.meals}</p>
            <p>Datum příjezdu: {reservation.arrivalDate}</p>
            <p>Datum odjezdu: {reservation.departurelDate}</p>
            <p>Speciální požadavky:</p>
            <ul>
              <li>Zvířata: {reservation.detail.pets ? 'Ano' : 'Ne'}</li>
              <li>
                Dětská postýlky: {reservation.detail.babyBed ? 'Ano' : 'Ne'}
              </li>
              <li>
                Bezbariérový přístup:{' '}
                {reservation.detail.wheelchair ? 'Ano' : 'Ne'}
              </li>
            </ul>
            <button
              className={`reserv-btn`}
              value={reservation.id}
              onClick={handleConfirm}
            >
              Prijmout rezervaci
            </button>
            <button
              className="reserv-btn"
              value={reservation.id}
              onClick={handleCancel}
            >
              Zamitnout rezervaci
            </button>
            <button
              className="reserv-btn"
              value={reservation.id}
              onClick={handleCancel}
            >
              Ukoncit rezervaci
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
