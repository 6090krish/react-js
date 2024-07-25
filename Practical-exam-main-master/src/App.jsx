import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './AuthComponent/Auth';
import Sidebar from './react-bootrapCom/Sidebar';
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import Navbar from './component/Navbar';
// import RoomList from './component/RoomList';
// import RoomDetail from './component/RoomDetail';
// import ReservationForm from './component/ReservationForm';
// import ReservationList from './component/ReservationList';
// import Input from './assets/Reduxcompont/Input';
// import Display from './assets/Reduxcompont/Display';


function App() {

  return (
    <>
     {/* q-2 */}
         {/* <div className="Main-Cont">
        <div className='Full'>
          <div className="Navbar">
             <Navbar />          </div>
          <Routes>
            <Route path='/' element={<RoomList />} />
            <Route path='/Roomdetail' element={<RoomDetail />} />
            <Route path='/Reservationform' element={<ReservationForm />} />
            <Route path='/Reservationlist' element={<ReservationList />} />
          </Routes>
        </div>
      </div> */}


      {/* q-3 */}
     {/* <Input/> */}
     {/* <Display/> */}
  

      {/* q-4 */}
      {/* postMam */}
      {/* http://localhost:5000/Student */}

      {/* q-10 */}
      {/* <Auth/> */}

      {/* q-12 */}
      <Sidebar/>


    </>


  )
}

export default App