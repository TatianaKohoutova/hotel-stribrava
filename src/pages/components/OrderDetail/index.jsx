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
                Field 1:
              </label>
              <input id="field1" className="field-input" type="text" />

              <label htmlFor="field2" className="field-label">
                Field 2:
              </label>
              <input id="field2" className="field-input" type="text" />

              <label htmlFor="select" className="field-label">
                Select:
              </label>
              <select id="select" className="field-input">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>

              <label htmlFor="check1" className="field-label">
                Checkbox 1:
              </label>
              <input id="check1" className="field-input" type="checkbox" />
            </div>
            <button className="wide">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
