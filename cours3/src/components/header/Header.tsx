import LoginButton from '../loginButton/loginButton';
import LogoutButton from '../loginButton/logoutButton';
import UserInformation from '../userInformation/userInformation';

import '../../App.scss'
const Header = () => {
    return (
        <>
            <header className="navbar navbar-light fixed-top">
                <div className="navbar-container">
                    <div className="navbar-mobile-menu">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Ouvrir le menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="navbar-item">
                            <LoginButton></LoginButton>
                            <LogoutButton></LogoutButton>
                        </div>
                        <div className="navbar-item">
                            <UserInformation></UserInformation>
                        </div>
                    </div>
                </div>
                
            </header>
        </>
    );
  };
  
  export default Header;