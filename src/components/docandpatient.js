import { Link } from "react-router-dom";
import doc from "../assests/doc.png";
import pat from "../assests/patient.png";
import "../style/login.css";
const Docandpatient = ({docpage,patpage}) => {
  return (
    <div className="click_cont">
      <Link to={docpage} className="click">
        <img className="log_pic" src={doc} alt="doc pic"></img>
        <h2 className="log_title">Doctor</h2>
      </Link>

      <Link className="click" to={patpage}>
        <img className="log_pic" src={pat} alt="patpic"></img>
        <h2 className="log_title">Patient</h2>
      </Link>
    </div>
  );
};

export default Docandpatient;
