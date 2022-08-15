import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hospedagens/' element={<List />} />
        <Route path='/hospedagens/:id' element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
