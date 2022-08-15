import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel, faBed, faPlane, faCar, faTaxi } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faPlane} />
                        <span> Vôos</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span> Aluguel</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span> Atrações</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span> Táxi</span>
                    </div>
                </div>
                <h1 className="headertitle">Desconto para a vida toda!</h1>
                <p className='headerDesc'>Receba 12% de cashback ao viajar, com sua conta superbooking.com</p>
                <button className="headerBtn">Sign in / Register</button>
            </div>
        </div>
    )
}

export default Header;