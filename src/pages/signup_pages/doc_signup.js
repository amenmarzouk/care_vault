import "../../style/doc_signup.css";
import Header from "../../components/header";
const DocSignup = () => {
  return (
    <div className="docsignup">
      <Header />
      <div id="left"></div>
      <div id="right"></div>
      <div className="theform">
        <h2>Doctor | Sign Up</h2>
        <form>
          <div className="theinput">
            <input type="text" required placeholder="Name"></input>

            <input type="text" required placeholder="Username"></input>
          </div>
          <div className="myinput">
            <input type="email" required placeholder="E-mail"></input>
          </div>
          <div className="myinput">
            <input type="text" required placeholder="Speciality"></input>
          </div>
          <div className="myinput">
          <input type="text" required placeholder="Work Adress"></input>
          </div>
          <div className="myinput">
            <input type="password" required placeholder="Password"></input>
          </div>
          <div>
            <label for="cars">Gender</label>
            <select id="cars" name="cars">
              <option value="Male">Male</option>
              <option value="Women">Women</option>
            </select>
          </div>

          <label>Birthday</label>
          <input type="date" required></input>
          <input type="submit" value="Sign up and generate keys"></input>
        </form>
      </div>
    </div>
  );
};

export default DocSignup;
