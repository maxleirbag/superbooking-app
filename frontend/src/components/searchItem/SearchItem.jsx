import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  const review = (rating) => {
    if (rating >= 9.5) return "Wonderful";
    else if (rating >= 9) return "Incredible";
    else if (rating >= 8) return "Exceptional";
    else if (rating >= 7) return "Reasonable";
    else return "Decent";
  };

  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt={item.city} className="searchItemImage" />
      <div className="searchItemDescription">
        <h1 className="searchItemTitle">
          {item.title}, {item.name}
        </h1>
        <span className="searchItemDistance">
          {item.category} {item.distance} km from {item.city} center
        </span>
        <span className="searchItemTaxiOption">Free bike ride</span>
        <span className="searchItemSubtitle">{item.address}</span>
        <span className="searchItemFeatures">{item.description}</span>
        <span className="searchItemCancelOption">Free cancellation</span>
        <span className="searchItemCancelOptionSubtitle">You can cancel free of charge</span>
      </div>
      <div className="searchItemDetails">
        {item.rating && (
          <div className="searchItemRating">
            <span>{review(item.rating)}</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="searchItemDetailsBody">
          <span className="searchItemPrice">${item.cheapestPrice}</span>
          <span className="searchItemTaxes">Taxes and fees included</span>
          <Link to={`/hotels/hotel/${item._id}`}>
            <button className="searchItemAvailability">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
