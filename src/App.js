// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OffcanvasNavbar from './Components/navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import About from './Components/About';
import Gallery from './Components/Gallary';
import SpecialOffers from './Components/Offer';
import OnlineOrder from './Components/onlineorder';
import ReservationForm from './Components/ReservationForm';
import StartersPage from './Components/StartersPage';
import Maincoursepage from './Components/MaainCourse';
import DessertsPage from './Components/DessertsPage';
import BeveragesPage from './Components/BeveragesPage';
import LoginPage from './Components/Loginpage';
function App() {
  const myWidth = 200;

  return (

    <Router>
      <OffcanvasNavbar
        drawerWidth={myWidth}
      ></OffcanvasNavbar>
      <div className="p-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />}></Route>
          <Route path='/Gallery' element={<Gallery></Gallery>}></Route>
          <Route path='/SpecialOffers' element={<SpecialOffers />}></Route>
          <Route path="/online-order" element={<OnlineOrder />} />
          <Route path='/Reservation-Form' element={<ReservationForm></ReservationForm>}></Route>
          <Route path="/menu/starters" element={<StartersPage />} />
          <Route path='/menu/maincourse' element={<Maincoursepage />}></Route>
          <Route path='/menu/Dessert' element={<DessertsPage />}> </Route>
          <Route path='/menu/Beverages' element={<BeveragesPage />}></Route>
          <Route path='/LoginPage' element={<LoginPage></LoginPage>}></Route>
        </Routes>

      </div>
      <Footer></Footer>
    </Router>

  );
}

export default App;
