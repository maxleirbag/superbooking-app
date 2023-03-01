import React, { useReducer, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Mail from "../../components/mail/Mail";
import "./hotelCreation.css";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      hotelName: "",
      accommodationCategories: [],
      city: "",
      address: "",
      distanceFromCenter: 0,
      hotelDescription: "",
      roomTitle: "",
      roomPrice: "",
      roomCapacity: "",
      roomDescription: "",
      roomNumber: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

function HotelCreation() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const categories = ["Hotel", "House"];
  // Fix categories selection
  // Enable image input

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
    console.log("submetido");
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <>
      <Header headerType="list" />
      <h1>Hotel Registration</h1>
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>: {value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset disabled={submitting}>
          <h3>Hotel</h3>
          <label>
            Name:
            <input type="text" value={formData.hotelName || ""} name="hotelName" onChange={handleChange} />
            {/* title */}
          </label>
          <br />
          <label>
            Accommodation categories:
            <select value={formData.accommodationCategories} onChange={handleChange} name="categories" multiple={true}>
              {/* <AccomodationSelection /> */}
              {categories.length &&
                categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
            </select>
            {/* category (String) ajustar API para lidar com array*/}
          </label>
          <br />
          <label>
            City:
            <input onChange={handleChange} value={formData.city || ""} type="text" name="city" />
          </label>
          <br />
          <label>
            Address:
            <input onChange={handleChange} value={formData.address || ""} type="text" name="address" />
          </label>
          <br />
          <label>
            Distance from center (km):
            <input
              onChange={handleChange}
              value={formData.distanceFromCenter || 0}
              type="number"
              name="distanceFromCenter"
            />
          </label>
          <br />
          <label>
            Hotel pictures:
            <input onChange={handleChange} value={formData.photos || []} type="file" name="photos" />
          </label>
          <br />
          <label>
            Description:
            <input
              onChange={handleChange}
              value={formData.hotelDescription || ""}
              type="text"
              name="hotelDescription"
            />
          </label>
          <p />
        </fieldset>
        <fieldset disabled={submitting}>
          {/* room */}
          <h3>Room</h3>
          <label>
            Title:
            <input onChange={handleChange} value={formData.roomTitle || ""} type="text" name="roomTitle" />
          </label>
          <br />
          <label>
            Price (R$):
            <input onChange={handleChange} value={formData.roomPrice || 0} type="number" name="roomPrice" />
          </label>
          <br />
          <label>
            Maximum capacity (people):
            <input
              onChange={handleChange}
              value={formData.roomCapacity || 0}
              type="number"
              min={1}
              name="roomCapacity"
            />
          </label>
          <br />
          <label>
            Description:
            <input onChange={handleChange} value={formData.roomDescription || ""} type="text" name="roomDescription" />
          </label>
          <br />
          <label>
            Room Number:
            <input onChange={handleChange} value={formData.roomNumber || ""} type="number" name="roomNumber" />
          </label>
        </fieldset>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
      <Mail />
      <Footer />
    </>
  );
}

export default HotelCreation;
