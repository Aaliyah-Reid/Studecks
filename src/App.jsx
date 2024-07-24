import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login.jsx'
import SignUp from './pages/auth/SignUp.jsx'
import './App.css'
import './index.css'
import { Profiler } from 'react';
import ProfileSetup from './pages/auth/ProfileSetup.jsx';

function App() {

  return (
    <>
     
     <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profilesetup" element={<ProfileSetup />} />

        </Routes>
     </Router>
    </>
  )
}

export default App
