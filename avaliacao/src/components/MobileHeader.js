import React, { Component } from 'react'
import { ReactComponent as Loader } from '../assets/images/loader.svg';
import { ReactComponent as Logout } from '../assets/images/logout.svg';

import '../styles/MobileHeader.scss';

export default class MobileHeader extends Component {
    render() {
        return(
        <header className="mobile-header">
            <nav id="mobile-menu">
                <ul>
                    <li className="logo-menu-container">
                        <Loader width="45" height="45" className="min-logo" />
                    </li>
                    <li className="button-menu-container">
                        <button onClick={this.props.funcaoLogout}>
                            <Logout width="25" height="25" className="logout-icon" />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
        )
    }
}
