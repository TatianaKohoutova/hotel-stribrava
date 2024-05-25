export const RoomDetail = ({ name, description, price, image }) => {
  return (
    <section className="light">
      <div className="container">
        <h2>
          {name
            ? `Pokoj ${name}, ${price}`
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
          <form>
            <div className="form-fields">
              <label htmlFor="field1" className="field-label">
                Od:
              </label>
              <input id="field1" className="field-input" type="text" />

              <label htmlFor="field2" className="field-label">
                Do:
              </label>
              <input id="field2" className="field-input" type="text" />

              <label htmlFor="select" className="field-label">
                Počet osob:
              </label>
              <select id="select" className="field-input">
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>

              <label htmlFor="select" className="field-label">
                Stravování:
              </label>
              <select id="select" className="field-input">
                <option>Žádné</option>
                <option>Snídaně</option>
                <option>Polopenze</option>
                <option>Plná penze</option>
              </select>

              <label htmlFor="check1" className="field-label">
                Domácí mazlíček:
              </label>
              <input id="check1" className="field-input" type="checkbox" />

              <label htmlFor="check2" className="field-label">
                Přistýlka pro dítě:
              </label>
              <input id="check2" className="field-input" type="checkbox" />

              <label htmlFor="check1" className="field-label">
                Bezbariérový přístup:
              </label>
              <input id="check3" className="field-input" type="checkbox" />

              <label htmlFor="field1" className="field-label">
                E-mail:
              </label>
              <input id="field1" className="field-input" type="text" />

              <label htmlFor="field1" className="field-label">
                Telefon:
              </label>
              <input id="field1" className="field-input" type="text" />
            </div>
            <strong>Celková cena za pobyt:</strong>
            <button className="wide">Odeslat poptávku</button>
          </form>
        </div>
      </div>
    </section>
  );
};
