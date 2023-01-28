import useFetch from '../../hooks/useFetch';
import './propertyList.css';

const PropertyList = () => {

  const { data, loading, error } = useFetch('http://localhost:8800/hotels/countByCategory?categories=apartment,hotel')

  const categories = data;

  return (
    <>
      <div className="pList">
        {categories.map((ct, idx) => {
          return (
            ct?.photo && !loading &&
            <div className="pListItem" key={`${ct?.category}${idx}`}>
              <img src={ct?.photo}
                alt={ct.category} className="pListImg" />
              <div className="pListTitles">
                <h2>{ct?.category}</h2>
                <h3>{ct?.count || 0} properties</h3>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default PropertyList;