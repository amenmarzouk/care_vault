import Header from "../components/header";
import "../style/aboutus.css";
import vault from "../assests/vault.svg";
import docpic from "../assests/docpic.svg";
const About = () => {
  return (
    <div className="aboutus">
      <Header />
      <h2 className="ta">
        All your Data in a <span className="tv">VAULT</span>
      </h2>
      <h3 className="tb">All your health records in one place</h3>
      <div className="thep">
        <p className="fp">
          Keep all your data secured in a Blockchain network to avoid
        </p>
        <p className="sp">loss and maintain privacy.</p>
      </div>
      <img className="vpic" src={vault} alt="vault"></img>

      <div className="thesp">
        <p className="fsp">
        Allow your doctor to view and update your medical records
        </p>
        <p className="ssp">for a more accurate diagnosis.</p>
      </div>
      <img className="dpic" src={docpic} alt="docpic"></img>
    </div>
  );
};

export default About;
