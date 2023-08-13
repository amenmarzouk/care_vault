import Header from "../../components/header";

import "../../style/signup.css";

import "../../style/signlogincont.css";
import Docandpatient from '../../components/docandpatient';
const SignUp = () => {
    return (
        <div className="signup">
                   <Header/>
<h2 className="ptitle"> Sign Up</h2>
<div className="click_cont">
<Docandpatient  docpage="/docsignup"  patpage="/patientsignup"/>







</div>
        </div>
    );
}

export default SignUp;
