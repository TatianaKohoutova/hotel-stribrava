import dayjs from 'dayjs';
import { useState } from 'react';

export const RoomDetail = ({ name, description, price, image }) => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTill, setDateTill] = useState('');
  const [peopleNumber, setPeopleNumber] = useState(1);
  const [meal, setMeal] = useState('Žádné');
  const [pet, setPet] = useState(false);
  const [baby, setBaby] = useState(false);
  const [wheelchair, setWheelchair] = useState(false);
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const date1 = dayjs(dateFrom);
  const date2 = dayjs(dateTill);
  const daysDifference = date2.diff(date1);
  const days = daysDifference / 1000 / 60 / 60 / 24;

  let finalprice = 0;

  const countFinalPrice = () => {
    let mealprice = 0;
    let babyprice = 0;
    let petprice = 0;

    if (meal === 'Snídaně') {
      mealprice = 100;
    }
    if (meal === 'Polopenze') {
      mealprice = 500;
    }
    if (meal === 'Plná penze') {
      mealprice = 1000;
    }

    if (pet) {
      petprice = (price / 4) * days;
    }
    if (baby) {
      babyprice = (price / 2) * days;
    }
    if (days) {
      finalprice =
        price * days * peopleNumber +
        mealprice * days * peopleNumber +
        babyprice +
        petprice;
    }
    console.log(finalprice);
  };
  countFinalPrice();

  // const changeDaysNumber = (days) => {
  //   setDaysNumber(days);
  // };

  const changeDateFrom = (e) => {
    setDateFrom(e.target.value);
    // changeDaysNumber(days);
    // countFinalPrice();
  };
  const changeDateTill = (e) => {
    setDateTill(e.target.value);
    // changeDaysNumber(days);
    // countFinalPrice();
  };

  const changePeopleNumber = (e) => {
    setPeopleNumber(e.target.value);
    // countFinalPrice();
  };
  const changeMeal = (e) => {
    setMeal(e.target.value);
    // countFinalPrice();
  };
  const changePet = (e) => {
    setPet(e.target.checked);
    // countFinalPrice();
  };
  const changeBaby = (e) => {
    setBaby(e.target.checked);
    // countFinalPrice();
  };
  const changeWheelchair = (e) => {
    setWheelchair(e.target.checked);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeMobile = (e) => {
    setMobile(e.target.value);
  };

  const submitData = (e) => {
    e.preventDefault();
    alert('dekujeme za odeslani rezervaci, brzy vas budeme kontaktovat');
    window.location.reload();
  };

  return (
    <section className="light">
      <div className="container">
        <h2>
          {name
            ? `Pokoj ${name}, ${price} kč na osobu`
            : 'Pokoj Úkryt, 450 kč na osobu za noc'}
        </h2>
        <div className="columns-2">
          <div className="column">
            {!image ? (
              <img src="http://localhost:4000/assets/img/pokoj01.jpg" />
            ) : (
              <img src={`http://localhost:4000${image}`} />
            )}

            <p>
              {' '}
              {description
                ? `${description}`
                : 'Strohý avšak pohodlný pokoj ideální pro hosty, kteří chtějí maximálně ušetřit a hledají cenově dostupné ubytování bez ztráty základního komfortu. Vhodné pro všechny, kdo chtějí v našem hotelu rychle přečkat nepřízeň počasí a vydat se rychle zase na cestu ať už pěší nebo po řece.'}
            </p>
          </div>
          <form onSubmit={submitData}>
            <div className="form-fields">
              <label htmlFor="field1" className="field-label">
                Od:
              </label>
              <input
                id="field1"
                className="field-input"
                type="date"
                onChange={changeDateFrom}
                // required
              />

              <label htmlFor="field2" className="field-label">
                Do:
              </label>
              <input
                id="field2"
                className="field-input"
                type="date"
                onChange={changeDateTill}
                // required
              />

              <label htmlFor="select" className="field-label">
                Počet osob:
              </label>
              <select
                id="select"
                className="field-input"
                onChange={changePeopleNumber}
                // required
              >
                {/* <option></option> */}
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>

              <label htmlFor="select" className="field-label">
                Stravování:
              </label>
              <select
                id="select"
                className="field-input"
                onChange={changeMeal}
                // required
              >
                <option>Žádné</option>
                <option>Snídaně</option>
                <option>Polopenze</option>
                <option>Plná penze</option>
              </select>

              <label htmlFor="check1" className="field-label">
                Domácí mazlíček:
              </label>
              <input
                id="check1"
                className="field-input"
                type="checkbox"
                onChange={changePet}
              />

              <label htmlFor="check2" className="field-label">
                Přistýlka pro dítě:
              </label>
              <input
                id="check2"
                className="field-input"
                type="checkbox"
                onChange={changeBaby}
              />

              <label htmlFor="check1" className="field-label">
                Bezbariérový přístup:
              </label>
              <input
                id="check3"
                className="field-input"
                type="checkbox"
                onChange={changeWheelchair}
              />

              <label htmlFor="field1" className="field-label">
                E-mail:
              </label>
              <input
                id="field1"
                className="field-input"
                type="email"
                onChange={changeEmail}
                // required
              />

              <label htmlFor="field1" className="field-label">
                Telefon:
              </label>
              <input
                id="field1"
                className="field-input"
                type="text"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                placeholder="+420 123 456 7890"
                onChange={changeMobile}
                // required
              />
            </div>
            <strong>Celková cena za pobyt: {finalprice} kč</strong>
            <button className="wide">Odeslat poptávku</button>
          </form>
        </div>
      </div>
    </section>
  );
};
