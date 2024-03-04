import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Home/home'
import DocPage from './Components/Doc/DocPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/Booking' ></Route>
            <Route path='/doc' element={<DocPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
