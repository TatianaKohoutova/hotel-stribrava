export const RoomDetail = () => {
  return (
    <section className="light">
      <div className="container">
        <h2>Jmeno pokoje</h2>
        <div className="columns-2">
          <div className="column">
            <img src="img/image1.svg" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              accusantium, dolor quisquam doloremque quod nobis temporibus
              ducimus sapiente consectetur distinctio assumenda, nisi suscipit
              saepe. Vero.
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
