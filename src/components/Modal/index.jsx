import React, { useEffect, useState } from "react";

// Styles
import "./Modal.css";

const Modal = ({ winner, reset }) => {
  const [url, setUrl] = useState();

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=BmOcUSu9iMY4U6v36d96xkfKI2oMR6J6&tag=success"
    )
      .then((data) => {
        data.json().then((res) => setUrl(res.data.image_url));
      })
      .then((error) => console.log(error));
  }, []);

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__gif">
          <img src={url} alt="success" />
        </div>
        <div className="modal__info">
          <p>The winner is:</p>
          <p>{winner}</p>
          <button type="button" onClick={reset}>
            Play again
          </button>
        </div>
      </div>
    </div>
  );
};

export { Modal };
