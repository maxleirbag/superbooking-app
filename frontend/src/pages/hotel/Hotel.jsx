import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight, faCircleChevronLeft, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import './hotel.css';
import Mail from "../../components/mail/Mail";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const Hotel = () => {

	const [slideNumber, setSlideNumber] = useState(0);
	const [openPresentation, setOpenPresentation] = useState(false);

	const selectedHeaderType = 'list';
	// temporary photos, until API
	const photos = [
		{
			url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
		},
		{
			url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
		},
		{
			url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
		},
		{
			url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
		},
		{
			url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
		},
		{
			url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
		},
	];

	const handleOpenPresentation = (index) => {
		setOpenPresentation(!openPresentation);
		setSlideNumber(index);
	}

	const handleSlideArrow = (direction) => {
		if (direction.toUpperCase() == 'L' && slideNumber > 0) setSlideNumber(slideNumber - 1)
		else if (direction.toUpperCase() == 'R' && slideNumber < photos.length - 1) setSlideNumber(slideNumber + 1)
	}

	return (
		<div>
			<Navbar />
			<Header headerType={selectedHeaderType} />
			<div className="hotelContainer">
				{openPresentation &&
					<div className="slider">
						<div className="slideWrapper">
							<FontAwesomeIcon icon={faCircleChevronLeft} className='arrows'
								onClick={() => handleSlideArrow('L')}
							/>
							<img src={photos[slideNumber].url} alt="Zoomed hotel photo" className="sliderImage" />
							<FontAwesomeIcon icon={faCircleArrowRight} className='arrows'
								onClick={() => handleSlideArrow('R')}
							/>
							<FontAwesomeIcon icon={faCircleXmark} className='exitPresentation'
								onClick={() => setOpenPresentation(false)} />
						</div>
					</div>}
				<div className="hotelWrapper">
					<button className="bookNow">Book Reservation</button>
					<h1 className="hotelTitle">Grand Hotel</h1>
					<div className="hotelAddress">
						<FontAwesomeIcon icon={faLocationDot} />
						<span> Elton St. 367 New York</span>
					</div>
					<span className="hotelDistance">Excellent location - 500m from center</span>
					<span className="hotelPriceHighlight">Book a stay at this property and get a free airport taxi</span>
				</div>
				<div className="hotelImages">
					{true && photos.map((image, index) =>
						<div key={image.url} className="hotelImageWrapper">
							<img
								className="hotelImage"
								src={image.url}
								alt="Hotel photo"
								onClick={() => handleOpenPresentation(index)} />
						</div>
					)}
				</div>
				<div className="hotelDetails">
					<div className="hotelDetailsTexts">
						<h1 className="hotelTitle">In the center of the galaxy</h1>
						<p className="hotelDescription">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis, est id blandit malesuada, nunc augue finibus arcu, a sodales nibh nisl eget arcu. Duis varius varius magna sed cursus. Pellentesque ut leo tortor. Proin vitae magna tortor. Praesent eu ultricies nulla. Morbi facilisis justo et eleifend ultricies. Morbi ac urna felis. Aliquam neque sem, dictum sed pellentesque non, ullamcorper sit amet nibh.
						</p>
					</div>
					<div className="hotelDetailsPrice">
						detalhes
						<h1>Ideal for couples</h1>
						<span>
							Located at the center of the galaxy, this room scored the highest in the city
						</span>
						<h2><b>$678</b> (7 nights)</h2>
						<button>Book Reservation</button>
					</div>
				</div>
				<Mail />
				<Footer />
			</div>
		</div>)
}

export default Hotel;