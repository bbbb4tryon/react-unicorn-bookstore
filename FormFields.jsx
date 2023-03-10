import React, { useState } from "react";
import Navbar from "../Navbar";

function FormFields({ onFormDataChange }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    bookGenre: "",
    backOfBook: "",
    emotion: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    onFormDataChange(formData);
  }

  return (
    <form>
      <div className="columns">
        {/* Column 1 */}
        <fieldset className="column">
          <legend className="column-header">Which Genre?</legend>
          <div className="radio-button">
            <input
              type="radio"
              id="mystery"
              name="bookGenre"
              value="Murder mystery"
              checked={formData.bookGenre === "Murder mystery"}
              onChange={handleChange}
            />
            <label htmlFor="mystery">Mystery</label>
          </div>
          <div className="radio-button">
            <input
              type="radio"
              id="scifi"
              name="bookGenre"
              value="Sci-fi"
              checked={formData.bookGenre === "Sci-fi"}
              onChange={handleChange}
            />
            <label htmlFor="scifi">Sci-fi</label>
          </div>
          <div className="radio-button">
            <input
              type="radio"
              id="fantasy"
              name="bookGenre"
              value="Fantasy"
              checked={formData.bookGenre === "Fantasy"}
              onChange={handleChange}
            />
            <label htmlFor="fantasy">Fantasy</label>
          </div>
        </fieldset>

        {/* Column 2 */}
        <fieldset className="column">
          <legend className="column-header">Back of Book</legend>
          <div className="radio-button">
            <input
              type="radio"
              id="saga"
              name="backOfBook"
              value="Saga"
              checked={formData.backOfBook === "Saga"}
              onChange={handleChange}
            />
            <label htmlFor="saga">Saga</label>
          </div>
          <div className="radio-button">
            <input
              type="radio"
              id="historical-fiction"
              name="backOfBook"
              value="Historical Fiction"
              checked={formData.backOfBook === "Historical Fiction"}
              onChange={handleChange}
            />
            <label htmlFor="historical-fiction">Historical Fiction</label>
          </div>
        </fieldset>

        {/* Column 3 */}
        <fieldset className="column">
          <legend className="column-header">Emotion</legend>
          <div className="radio-button">
            <input
              type="radio"
              id="sad"
              name="emotion"
              value="Sad"
              checked={formData.emotion === "Sad"}
              onChange={handleChange}
            />
            <label htmlFor="sad">Sad</label>
          </div>
          <div className="radio-button">
            <input
              type="radio"
              id="inspired"
              name="emotion"
              value="Inspired"
              checked={formData.emotion === "Inspired"}
              onChange={handleChange}
            />
            <label htmlFor="inspired">Inspired</label>
          </div>
        </fieldset>
      </div>
    </form>
  );
}

export default FormFields;
