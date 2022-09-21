import './list.css';
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';
import Footer from '../../components/footer/Footer';

const List = () => {

	const location = useLocation();

	const [openDate, setOpenDate] = useState(false)
	const [destination, setDestination] = useState(location.state.destination)
	const [stayOptions, setStayOptions] = useState(location.state.stayOptions)
	const [date, setDate] = useState(location.state.date)


	const selectedHeaderType = 'list';
	const formatedDate = ` ${format(date[0].startDate, 'dd/MM/yyyy')} - ${format(date[0].endDate, 'dd/MM/yyyy')}`;

	return (
		<div>
			<Navbar />
			<Header headerType={selectedHeaderType} />
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch">
						<h1 className="listTitle">Search</h1>
						<div className="listItem">
							<label htmlFor="">Destination</label>
							<input placeholder={destination} type="text" />
						</div>
						<div className="listItem" onClick={() => setOpenDate(!openDate)}>
							<label htmlFor="">Check-in/out</label>
							<span>{formatedDate}</span>
							{openDate && <DateRange
								onChange={item => setDate([item.selection])}
								minDate={new Date()}
							/>}
						</div>
						<label className="listOptionsTitle">Pricing Options</label>
						<div className="listOptions">
							<div className="listOptionItem">
								<span className="listOptionText">Minimum (per night)</span>
								<input type="number" className="listOptionInput" min={1} />
							</div>
							<div className="listOptionItem">
								<span className="listOptionText">Maximum (per night)</span>
								<input type="number" className="listOptionInput" min={1} />
							</div>
						</div>
						<label className="listOptionsTitle">Stay Options</label>
						<div className="listOptions">
							<div className="listOptionItem">
								<span className="listOptionText">Adults</span>
								<input type="number" className="listOptionInput" placeholder={stayOptions.adults} />
							</div>
							<div className="listOptionItem">
								<span className="listOptionText">Children</span>
								<input type="number" className="listOptionInput" placeholder={stayOptions.children} />
							</div>
							<div className="listOptionItem">
								<span className="listOptionText">Rooms</span>
								<input type="number" className="listOptionInput" placeholder={stayOptions.rooms} />
							</div>

						</div>
						<button>Search</button>
					</div>
					<div className="listResult">
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
					</div>
				</div>
			</div>
			<div className='footerWrapper'><Footer /></div>
		</div>
	)
}

export default List;