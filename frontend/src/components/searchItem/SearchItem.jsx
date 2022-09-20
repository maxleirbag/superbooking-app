import './searchItem.css';

const SearchItem = () => {

	return (
		<div className="searchItem">
			<img
				src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
				alt="Hotel image"
				className='searchItemImage' />
			<div className="searchItemDescription">
				<h1 className="searchItemTitle">Castle apartments</h1>
				<span className="searchItemDistance">6km from center</span>
				<span className="searchItemTaxiOption">Free bike ride</span>
				<span className="searchItemSubtitle">View from the mountains</span>
				<span className="searchItemFeatures">Entire apartment, 1 bathroom, 70m², 1 king size bed</span>
				<span className="searchItemCancelOption">Free cancellation</span>
				<span className="searchItemCancelOptionSubtitle">You can cancel free of charge</span>
			</div>
			<div className="searchItemDetails">
				<div className="searchItemRating">
					<span>Excellent</span>
					<button>9.0</button>
				</div>
				<div className="searchItemDetailsBody">
					<span className="searchItemPrice">$145</span>
					<span className="searchItemTaxes">Taxes and fees included</span>
					<button className="searchItemAvailability">See availability</button>
				</div>


			</div>
		</div>
	)
}

export default SearchItem;