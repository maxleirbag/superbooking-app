import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
  faMonument,
} from "@fortawesome/free-solid-svg-icons";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const Header = ({ headerType }) => {
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const [destination, setDestination] = useState("");

  const [openStayOptions, setOpenStayOptions] = useState();
  const [stayOptions, setStayOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const [openDate, setOpenDate] = useState();
  const [date, setDate] = useState([
    {
      startDate: today,
      endDate: tomorrow,
      key: "selection",
    },
  ]);

  const handleChangeStayOption = (type, operation) => {
    setStayOptions((prev) => {
      return {
        ...prev,
        [type]: operation === "i" ? stayOptions[type] + 1 : stayOptions[type] - 1,
      };
    });
  };

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { city: destination, date, options: stayOptions } });
    navigate("/hotels", { state: { destination, date, stayOptions } });
  };
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className={headerType === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faHotel} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span> Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span> Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMonument} />
            <span> Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span> Aiport taxis</span>
          </div>
        </div>

        {headerType !== "list" && (
          <>
            <h1 className="headerTitle">You, the world, we make it happen!</h1>
            <p className="headerDesc">Get 12% off cashback by travelling logged in with Superbooking.com</p>
            <button className="headerBtn">Sign in / Register</button>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                  {`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}`}
                </span>
                {openDate && (
                  <DateRangePicker
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span onClick={() => setOpenStayOptions(!openStayOptions)} className="headerSearchText">
                  {`${stayOptions.adults} adults, ${stayOptions.children} children, ${stayOptions.rooms} rooms`}
                </span>
                {openStayOptions && (
                  <div className="stayOptions">
                    <div className="stayOptionsItem">
                      <span className="stayOptionText">Adults</span>
                      <div className="stayOptionCounter">
                        <button
                          className="stayOptionCounterButton"
                          onClick={() => handleChangeStayOption("adults", "d")}
                          disabled={stayOptions.adults < 2}
                        >
                          -
                        </button>
                        <span className="stayOptionCounterNumber">{stayOptions.adults}</span>
                        <button
                          className="stayOptionCounterButton"
                          onClick={() => handleChangeStayOption("adults", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="stayOptionsItem">
                      <span className="stayOptionText">Children</span>
                      <div className="stayOptionCounter">
                        <button
                          className="stayOptionCounterButton"
                          onClick={() => handleChangeStayOption("children", "d")}
                          disabled={stayOptions.children < 1}
                        >
                          -
                        </button>
                        <span className="stayOptionCounterNumber">{stayOptions.children}</span>
                        <button
                          className="stayOptionCounterButton"
                          onClick={() => handleChangeStayOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="stayOptionsItem">
                      <span className="stayOptionText">Rooms</span>
                      <div className="stayOptionCounter">
                        <button
                          className="stayOptionCounterButton"
                          onClick={() => handleChangeStayOption("rooms", "d")}
                          disabled={stayOptions.rooms < 2}
                        >
                          -
                        </button>
                        <span className="stayOptionCounterNumber">{stayOptions.rooms}</span>
                        <button
                          className="stayOptionCounterButton"
                          onClick={() => handleChangeStayOption("rooms", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
