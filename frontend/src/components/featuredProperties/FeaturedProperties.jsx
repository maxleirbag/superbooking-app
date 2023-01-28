import useFetch from '../../hooks/useFetch';
import './featuredProperties.css';

const FeaturedProperties = () => {

  const { data, loading, error } = useFetch('http://localhost:8800/hotels')

  const review = (rating) => {
    if (rating >= 9.5) return 'Wonderful'
    else if (rating >= 9) return 'Incredible'
    else if (rating >= 8) return 'Exceptional'
    else if (rating >= 7) return 'Reasonable'
    else return 'Decent'
  }

  return (
    <>
      <div className="fp">
        {!loading && data &&
          data.map((hotel, idx) => {
            if (idx <= 4) return (
              <div className="fpItem" key={`${hotel.name}${idx}`}>
                <img className='fpImg' src={hotel.photos[0]} alt={hotel.category} />
                <span className='fpName'>{hotel.name}</span>
                <span className='fpCity'>{hotel.city}</span>
                <span className='fpPrice'>Starting from ${hotel.cheapestPrice}</span>
                <span className='fpRating'>
                  <button>{hotel.rating}</button>
                  <span>{review(hotel.rating)}</span>
                </span>
              </div>)
          })
        }
      </div>
    </>
  )
}

export default FeaturedProperties;