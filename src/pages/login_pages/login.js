import Header from "../../components/header";
import "../../style/login.css";
import Docandpatient from '../../components/docandpatient';
import guest from "../../assests/guests.png";
import { Link } from "react-router-dom";
import "../../style/signlogincont.css";
const Login = () => {
  return (
    <div className="login">
      <Header />
<h1 className="ptitle">Login</h1>
      <div className="click_cont">
     <Docandpatient   docpage="/doclogin"     patpage="/patientlogin"/>  
<div className="guest_cont">
        <Link className="click" to="/guestlogin">
          <img className="log_pic" src={guest} alt="guest pic"></img>
          <h2 className="log_title">Guest</h2>
          
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
