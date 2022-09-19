import './list.css';
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination)
    const [stayOptions, setStayOptions] = useState(location.state.stayOptions)
    const [date, setDate] = useState(location.state.date)

    const selectedHeaderType = 'list';

    return (
        <div>
            <Navbar />
            <Header headerType={selectedHeaderType} />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        Search
                        <h1 className="listTitle"></h1>
                    </div>
                    <div className="listResult">Result</div>
                </div>
            </div>
        </div>
    )
}

export default List;