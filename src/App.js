import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Offer from './pages/Offer';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
    <Router>
      <Header />
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/profile" element={<Profile />}/>
        <Route  path="/Sign-Up" element={<SignUp />}/>
        <Route  path="/Offer" element={<Offer />}/>
        <Route  path="/Login" element={<Login />}/>
        <Route  path="/Forgot-Password" element={<ForgotPassword/>}/>

      </Routes>
      
    </Router>
          <ToastContainer 
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
         />
      
    </div>
  );
}

export default App;
