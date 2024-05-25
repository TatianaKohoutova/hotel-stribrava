import '/global.css';

export const Footer = () => {
  return (
    <section className="dark">
      <div className="container columns-2">
        <div className="columns">
          <h2>Kontakt</h2>
          <p className="adress">
            Hotel Stříbarava
            <br />
            Ke Kamenné lávce 12
            <br />
            317 24 Libnice nad Stříbravou
          </p>
          <a href="mailto:recepce@hotelstribrava.cz">
            recepce@hotelstribrava.cz
          </a>
        </div>
        <img src="img/mapa.png" />
      </div>
    </section>
  );
};
