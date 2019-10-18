import React, { Component } from 'react';
import logoDark from '../assets/images/logo_dark.png';

import '../styles/DesktopMenu.scss';

export default class DesktopMenu extends Component {
    render() {
        return (
            <aside className="desktop-menu-container">
                <img src={logoDark} />
                <nav id="desktop-menu">
                    <ul>
                        <li>
                            <button>Trailers</button>
                        </li>
                        <li>
                            <button className="logout-button" onClick={this.props.funcaoLogout}>Logout</button>
                        </li>
                    </ul>
                </nav>
            </aside>
        )
    }
}
