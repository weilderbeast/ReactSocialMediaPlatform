import React from 'react';
import {ReactComponent as Home} from "../icons/home.svg";
import {ReactComponent as Video} from "../icons/video-camera.svg";
import {ReactComponent as Market} from "../icons/shopping-store.svg";
import {ReactComponent as Groups} from "../icons/group.svg";
import {ReactComponent as Gaming} from "../icons/console.svg";
import {ReactComponent as Plus} from "../icons/plus.svg";
import {ReactComponent as Messenger} from "../icons/messenger.svg";
import {ReactComponent as Bell} from "../icons/bell.svg";
import {ReactComponent as Caret} from "../icons/caret.svg";
import {ReactComponent as Logo} from "../icons/linux.svg";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <ul className="navbar-ul-left">
                    <li className="nav-item-left">
                        <a href="#" className="nav-link-left">
                            <Logo/>
                        </a>
                    </li>
                    <li className="nav-item-left">
                        <form>
                            <input type="text" placeholder="Search"/>
                        </form>
                    </li>
                </ul>
            </div>
            <div className="navbar-center">
                <ul className="navbar-ul-center">
                    <li className="nav-item-center">
                        <a href="#" className="nav-link-center">
                            <Home/>
                        </a>
                    </li>
                    <li className="nav-item-center">
                        <a href="#" className="nav-link-center">
                            <Video/>
                        </a>
                    </li>
                    <li className="nav-item-center">
                        <a href="#" className="nav-link-center">
                            <Market/>
                        </a>
                    </li>
                    <li className="nav-item-center">
                        <a href="#" className="nav-link-center">
                            <Groups/>
                        </a>
                    </li>
                    <li className="nav-item-center">
                        <a href="#" className="nav-link-center">
                            <Gaming/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul className="navbar-ul-right">
                    <li className="nav-item-right">
                        <a href="#" className="nav-icon">
                            <Plus/>
                        </a>
                    </li>
                    <li className="nav-item-right">
                        <a href="#" className="nav-icon">
                            <Plus/>
                        </a>
                    </li>
                    <li className="nav-item-right">
                        <a href="#" className="nav-icon">
                            <Messenger/>
                        </a>
                    </li>
                    <li className="nav-item-right">
                        <a href="#" className="nav-icon">
                            <Bell/>
                        </a>
                    </li>
                    <li className="nav-item-right">
                        <a href="#" className="nav-icon">
                            <Caret/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;