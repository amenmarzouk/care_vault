import Header from "../components/header";
import "../style/helpdesk.css";
const Helpd = () => {
  return (
    <div className="helpdesk">
      <Header />
      <div className="form_cont">
        <h3 className="hpd_title">Help Desk</h3>
        <form className="hpdform">
          <table>
            <div>
              <label>Public Key</label>

              <input type="text"></input>
            </div>

            <div>
              <label>E-mail</label>

              <input type="email"></input>
            </div>

            <div>
              <label>Message</label>

              <textarea rows="9" cols="50"></textarea>
            </div>
            <input type="submit" ></input>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Helpd;
