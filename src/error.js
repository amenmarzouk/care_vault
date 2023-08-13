import  './style/error.css';
import logo2 from './assests/logo2.svg';
const Error = () => {
    return (
        <div className="error">
            <img src={logo2} alt='CareVault logo' className="cavlogo"></img>
            <h2 className='tit'>ERROR 404 ! Page Not Found</h2>
        </div>
    );
}

export default Error;
