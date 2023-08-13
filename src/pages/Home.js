import Header from '../components/header';
import  '../style/home.css';
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
   <Header/>

   <h1 className="welcome">YOUR MEDICAL DATA IN A SAFE </h1>
  <h1 className="welcome">PLACE</h1> 
   <div className="home_but">
   <Link to="/login"><button className="in">Login</button></Link>
   <Link to="/signup"><button className="up">Sign Up</button></Link>

   


   </div>

    </div>
  );
};

export default Home;
