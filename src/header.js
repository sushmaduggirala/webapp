import React from "react";
import { Link } from "react-router-dom";
import Home from './Home';
import Founder from './Founder';
import Packages from './Packages';
import Contact from './Contact';
import { AiFillCar} from "react-icons/ai";
class Header extends React.Component {
    render() {
        return (
            <header className="header head1" >
            <i class="fas fa-heart"></i>
            <div className="fornav"><AiFillCar/></div>
                <div className="fornav"><b>S.S. Travels</b></div>                
                <Link to="/Home.js"><div className="nav">Home</div></Link>
                <Link to="/Founder.js"><div className="nav">Founder</div></Link>
                <Link to="/Packages.js"><div className="nav">Packages</div></Link>
                <Link to="/Contact.js"><div className="nav">Contact Us</div></Link>
        
                </header>
            
        );
    }
}

export default Header;
