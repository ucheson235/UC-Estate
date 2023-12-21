import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Offer from './pages/Offer';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';



function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/profile" element={<Profile />}/>
        <Route  path="/Sign-Up" element={<SignUp />}/>
        <Route  path="/Offer" element={<Offer />}/>
        <Route  path="/Login" element={<Login />}/>
        <Route  path="/Forgot-Password" element={<ForgotPassword/>}/>

      </Routes>
      
    </Router>
      
    </div>
  );
}

export default App;
