import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine} from "react-icons/ri";
import './navbar.css';
import Button from "../button/Button";

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar-top">
            <div className="navbar__links-top">
                <div className="navbar__logo-container">
                    <h2 className="navbar__logo">MULTI APP</h2>
                </div>
                <div className="navbar__links-container">
                    <p><a href="#part 1">PART 1</a></p>
                    <p><a href="#part 2">PART 2</a></p>
                    <p><a href="#part 3">PART 3</a></p>
                    <p><a href="#part 4">PART 4</a></p>
                    <p><a href="#part 5">PART 5</a></p>
                </div>
            </div>
            <div className="navbar__sign-container">
                <p>SIGN IN</p>
                <Button
                    type="button"
                    buttonStyle="btn--navbar"
                    buttonSize="btn--large">SIGN UP
                </Button>
            </div>
            <div className="navbar__menu-top">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="navbar__menu-container scale-up-center">
                        <div className="navbar__menu-container__links">
                            <p><a href="#part 1">PART 1</a></p>
                            <p><a href="#part 2">PART 2</a></p>
                            <p><a href="#part 3">PART 3</a></p>
                            <p><a href="#part 4">PART 4</a></p>
                            <p><a href="#part 5">PART 5</a></p>
                        </div>
                        <div className="navbar__menu-container__links__sign">
                            <p>Sign in</p>
                            <Button
                                type="button"
                                buttonStyle="btn--navbar"
                                buttonSize="btn--large">SIGN UP
                            </Button>                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
