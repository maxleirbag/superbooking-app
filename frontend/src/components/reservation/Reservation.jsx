import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import "./reservation.css";

const Reservation = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`http://localhost:8800/hotels/rooms/${hotelId}`);
  const navigate = useNavigate();
  const { date } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const current = new Date(start.getTime());
    const dates = [];

    while (current <= end) {
      dates.push(new Date(current).getTime());
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };
  const allDates = getDatesInRange(date[0].startDate, date[0].endDate);

  const isAvailable = (roomNumber) => {
    console.log(roomNumber);
    const isReserved = roomNumber.unavailableDates.some((date) => allDates.includes(new Date(date).getTime()));
    return !isReserved;
  };

  const handleClick = async () => {
    try {
      const formatedDates = allDates.map((date) => {
        let correct = new Date(date).toISOString();
        return correct;
      });
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.patch(`http://localhost:8800/rooms/availability/${roomId}`, {
            dates: formatedDates,
          });
          return res.data;
        })
      );
      console.log(idsQuartos);
      setOpen(false);
      console.log(`Room was booked!!`);
      // navigate("/");
    } catch (error) {}
  };
  const handleSelect = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    setSelectedRooms(isChecked ? [...selectedRooms, value] : selectedRooms.filter((item) => item !== value));
  };

  return (
    <div className="reservation">
      <div className="rContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={() => setOpen(false)} />
        <span>Select your rooms:</span>
        {data &&
          data.map((item) => (
            <div className="room" key={item.title}>
              <div className="rItem">
                <div className="rInfo">
                  <div className="rTitle">{item?.title}</div>
                  <div className="rDesc">{item?.description}</div>
                  <div className="rMax">Max people: {item?.maxPeople}</div>
                </div>
                <div className="rPrice">{item?.price}</div>
              </div>
              <div className="rSelectRooms">
                {item.roomNumbers.length &&
                  item.roomNumbers.map((room) => (
                    <div className="room" key={room._id}>
                      <label>{room.number}</label>
                      <input type="checkbox" value={room._id} onChange={handleSelect} disabled={!isAvailable(room)} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reservation;
