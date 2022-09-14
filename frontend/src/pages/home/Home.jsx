import './home.css'
import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import FeaturedDestinations from '../../components/featuredDestinations/FeaturedDestinations';
import Mail from '../../components/mail/Mail';
import Footer from '../../components/footer/Footer';

const Home = () => {
	const selectedHeaderType = false;
	return (
		<div>
			<Navbar />
			<Header headerType={selectedHeaderType} />
			<div className="homeContainer">
				<h2 className='homeTitle'>Featured destinations</h2>
				<FeaturedDestinations />
				<h2 className="homeTitle">Browse by category</h2>
				<PropertyList />
				<h2 className="homeTitle">Most wanted places</h2>
				<FeaturedProperties/>
				<Mail/>
				<Footer/>
			</div>

		</div>
	)
}
export default Home;