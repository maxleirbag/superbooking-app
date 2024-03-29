import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import HotelCreation from "./pages/hotelCreation/HotelCreation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels/" element={<List />} />
        <Route path="/hotels/hotel/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotels/create" element={<HotelCreation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
