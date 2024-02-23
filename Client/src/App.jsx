import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Home/home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/Booking' ></Route>
            <Route path='/doc' ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
