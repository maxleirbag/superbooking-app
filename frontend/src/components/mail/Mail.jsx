import './mail.css'

const Mail = () => {
	return (
		<div className='mail'>

			<h1 className="mailTitle">Save time and money!</h1>
			<span className="mailDesc">Sign up and receive the best offers to dreamlike destinations.</span>
			<div className="mailInputContainer">
				<input type="text" placeholder='Your main email' />
				<button>Subscribe</button>
			</div>
		</div>
	)
}

export default Mail;