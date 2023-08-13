
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About_us";
import Helpd from "./pages/Help_desk";
import Login from "./pages/login_pages/login";
import SignUp from "./pages/signup_pages/sign_up";
import DocLogin from "./pages/login_pages/Doc_login";
import PatientLogin from "./pages/login_pages/patient_login";
import GuestLogin from "./pages/login_pages/guest_login";
import DocSignup from "./pages/signup_pages/doc_signup";
import PatientSignup from "./pages/signup_pages/patient_signup";
import Error from "./error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/helpdesk" element={<Helpd />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/doclogin" element={<DocLogin/>} />
          <Route path="/patientlogin" element={<PatientLogin/>} />
          <Route path="/guestlogin" element={<GuestLogin/>} />
          <Route path="/patientsignup" element={<PatientSignup/>} />
          <Route path="/docsignup" element={<DocSignup/>} />
          <Route path="*" element={<Error/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
