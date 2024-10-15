import "./contacts.css";

export const Contacts = () => {
  return (
    <div className="contacts">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img className="contactsCard" src="/contacts/card.png" alt="" />
      </div>
      <h1 className="description-title contacts-title">ОСТАВИТЬ ЗАЯВКУ</h1>
      <div className="contacts-content">
        {" "}
        <form className="contacts-form">
          <div className="input-container">
            <label className="form-item-name">Имя:</label>
            <input className="form-item-input" type="text" name="name" />
            <label className="form-item-name">Телефон:</label>
            <input
              className="form-item-input"
              type="number"
              name="phoneNumber"
            />
            <label className="form-item-name">
              Оставьте сообщение, и мы <br></br> свяжемся с Вами в ближайшее{" "}
              <br></br> время:
            </label>{" "}
            <input className="form-item-input" type="text" name="message" />
          </div>
          <button className="form-btn">ОТПРАВИТЬ</button>
        </form>
        <div className="contacts-info">
          <div className="text-container">
            <div className="contacts-text">
              {" "}
              <p className="text-item">
                Есть вопрос? <br></br> Вы можете связаться с нами:
              </p>
            </div>
            <div className="contacts-text">
              {" "}
              <p className="text-item">
                WhatsApp, Viber, Telegram
                <br></br>+3 467 486-37-88
              </p>
            </div>
            <div className="contacts-text">
              <p className="text-item">
                Avenida grandes playas 79, Corralejo la Oliva Fuerteventura,
                Spain. 35660
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
