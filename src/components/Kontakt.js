import React from "react";
import "./Kontakt.css";

const Kontakt = () => {
  return (
    <div className="container border">
      <h3>
        Nutzen Sie einfach das Formular und lassen Sie uns über alles reden.
      </h3>
      <div className="container">
        <h3>Gerne auch telefonisch unter der +4917634544090</h3>
        <form
          target="_blank"
          action="https://formsubmit.co/84eea5f9a05ad0a1d9f5cc68e34f08e8"
          method="POST"
        >
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Ihr Name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="E-Mail Addresse"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea
              placeholder="Ihre Nachricht an Dajana"
              className="form-control"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>
          <button type="submit" className="dbtn">
            Senden
          </button>
          <i>
            &nbsp;&nbsp;&nbsp;..bitte bestätigen Sie (nach "Senden"), dass Sie
            kein Roboter sind ;-)
          </i>
        </form>
      </div>
    </div>
  );
};

export default Kontakt;
