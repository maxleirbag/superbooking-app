import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const List = () => {

    // const selectedHeaderType = 'list';
    const selectedHeaderType = false;

    return (
        <div>
            <Navbar />
            <Header headerType={selectedHeaderType} />
        </div>
    )
}

export default List;