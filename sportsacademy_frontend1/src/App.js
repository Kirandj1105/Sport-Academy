import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigationbar } from './component/Navigationbar';
import { Footer } from './component/Footer';
import { Home } from './component/Home';
import { About } from './component/About';
import { AddEvent } from './component/AddEvent';
import ShowEvent from './component/ShowEvent';
import ShowEventAdmin from './component/ShowEventAdmin';
import EditEvent from './component/EditEvent';
import { Registration } from './component/Registration';
import Admin from './component/Admin';
import Login from './component/Login';
import AdminLogin from './component/AdminLogin';
import ContactUs from './component/ContactUs';
import { LogoNavbar } from './component/LogoNavbar';
import { Facilities } from './component/Facilities';
import { AllNews } from './component/AllNews';
import { TopHeadlines } from './component/TopHeadlines';
import { Coaching } from './component/Coaching';
import { Coaching1 } from './component/Coaching1';
import { Coaching2 } from './component/Coaching2';
import { Coaching3 } from './component/Coaching3';
import { Coaching4 } from './component/Coaching4';
import CoachLogin from './component/CoachLogin';
import CoachPage from './component/CoachPage';
import Details from './component/Details';
import { Weather } from './component/Weather';
import AddSport from './component/AddSport';
import EditSport from './component/EditSport';
import ShowSportAdmin from './component/ShowSportAdmin';
import ShowSport from './component/ShowSport';
import UserDetails from './component/UserDetails';
import CoachDetails from './component/CoachDetails';
import CoachEdit from './component/CoachEdit';
import EditUser from './component/EditUser';
import SelectedSports from './component/SelectedSport';
import DisplaySelectedSport from './component/DisplaySelectedSport';
import WorkInProgress from './component/WorkInProgress';
import Badminton from './Sports/Badminton'
import Cricket from './Sports/Cricket'
import Payment from './component/Payment'; 

function App() {

  const loggedInUser = localStorage.getItem('username');

  return (
    <BrowserRouter>
      <LogoNavbar>

      </LogoNavbar>
      <Navigationbar loggedInUser={loggedInUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/coaching1" element={<Coaching1 />} />
        <Route path="/coaching2" element={<Coaching2 />} />
        <Route path="/coaching3" element={<Coaching3 />} />
        <Route path="/coaching4" element={<Coaching4 />} />
        <Route path="/coachlogin" element={<CoachLogin />} />
        <Route path="/coachpage" element={<CoachPage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/all-news" element={<AllNews />} />
        <Route path="/topHeadlines" element={<TopHeadlines />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/about" element={<About />} />        
        <Route path='/registration' element={<Registration />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/showEvent" element={<ShowEvent />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/editevent/:eventId" element={<EditEvent />} />        
        <Route path="/showEventAdmin" element={<ShowEventAdmin />} />
        <Route path="/showSport" element={<ShowSport />} />
        <Route path="/addSport" element={<AddSport />} />
        <Route path="/editsport/:sportId" element={<EditSport />} />
        <Route path="/showSportAdmin" element={<ShowSportAdmin />} />        

        <Route path="/facilities" element={<Facilities />} />        
        <Route path="/login" element={<Login />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path='/userdetails' element={<UserDetails />} />
        <Route path='/coachdetails' element={<CoachDetails />} />
        <Route path='/coachedit/:coachId' element={<CoachEdit />} />
        <Route path="/edituser/:userId" element={<EditUser />} />

        <Route path="/selectedsport" element={<SelectedSports />} />
        {/* <Route path="/displayselectedsport" element={<DisplaySelectedSport />} /> */}

        <Route path="/" element={<ShowSport isAuthenticated={true} />} />
        <Route path="/displaySelectedSport" element={<DisplaySelectedSport selectedSports={[]} />} />

        <Route path="/workInProgress" element={<WorkInProgress />} />
      
        <Route path="/payment" element={<Payment />} />
        <Route path="/badminton" element={<Badminton />} />
        <Route path="/cricket" element={<Cricket />} />
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;