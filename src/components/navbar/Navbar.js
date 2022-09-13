import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine} from "react-icons/ri";
import './navbar.css';
import Button from "../button/Button";

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar-top__container sticky">
            <div className="navbar-content__container">
                <div className="navbar-logo__container">
                    <h2 className="navbar-logo">MULTI APP</h2>
                </div>
                <div className="navbar-links__container">
                    <p><a href="#part 1">PART 1</a></p>
                    <p><a href="#part 2">PART 2</a></p>
                    <p><a href="#part 3">PART 3</a></p>
                    <p><a href="#part 4">PART 4</a></p>
                    <p><a href="#part 5">PART 5</a></p>
                </div>
            </div>
            <div className="navbar-home__container">
                <Button
                    type="button"
                    buttonStyle="btn--navbar"
                    buttonSize="btn--large">HOME
                </Button>
            </div>
            <div className="navbar-menu-top__container">
                {toggleMenu
                    ? <RiCloseLine color="#12b0d3" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#12b0d3" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="navbar-menu__container scale-up-center">
                        <div className="navbar-menu-links__container">
                            <p><a href="#part 1">PART 1</a></p>
                            <p><a href="#part 2">PART 2</a></p>
                            <p><a href="#part 3">PART 3</a></p>
                            <p><a href="#part 4">PART 4</a></p>
                            <p><a href="#part 5">PART 5</a></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
