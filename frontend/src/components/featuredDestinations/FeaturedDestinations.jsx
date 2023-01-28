import useFetch from "../../hooks/useFetch";
import "./featuredDestinations.css";

const FeaturedDestinations = () => {

  const { data, loading, error } = useFetch('http://localhost:8800/hotels?featured=true')

  const featuredCities = data;

  return (
    <>
      <div className="featuredDestinations">
        {!loading && featuredCities.map((d, idx) => {
          if (d.photos.length && idx <= 3) return (
            <div className="featuredDestinationsItem" key={`${d?._id}${idx}`}>
              <img src={d?.photos[0]} alt={d?.city} className='featuredDestinationsImg' />
              <div className="featuredDestinationsTitles">
                <h2>{d.city}</h2>
                <h3>Booked {Math.ceil(Math.random() * 1000)} times recently</h3>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default FeaturedDestinations;