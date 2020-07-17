import React from 'react';
import './header.css';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {}

interface HeaderState {
  dropDownToggled: boolean,
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      dropDownToggled: false,
    }

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({
      dropDownToggled: !this.state.dropDownToggled
    })
  }

  render() {
    return (
      <div>
        <div className="Header-bar">
          <div className="Header">
            <img src={logo} className="Header-image" height={70} alt="subcord logo" />
            <h1 className="Header-text">
              SUBCORD
            </h1>
            <div className="Header-link-container">
              <a href="#" className="Header-link Header-desktop-link active-link">
                Home
              </a>
              <a href="#" className="Header-link Header-desktop-link">
                Reddit
              </a>
              <a href="#" className="Header-link Header-desktop-link">
                Panley Entertainment
              </a>
              <a href="#" className="Header-link Header-desktop-link reddit">
                <FontAwesomeIcon icon={faReddit} />
                Sign in with Reddit
              </a>
            </div>

            <div className="Header-hamburger">
              <button onClick={this.toggleDropdown} className="Header-hamburger-button"><FontAwesomeIcon className="Header-hamburger-icon" icon={faBars} /></button>
            </div>
          </div>
        </div>
        <div className="Header-content-block"></div>
        <div className="Header-mobile-menu" style={{height: this.state.dropDownToggled ? '50%' : 0}}>
          <a href="#" className="Header-link Header-mobile-link active-link">
            Home
          </a>
          <a href="#" className="Header-link Header-mobile-link">
            Reddit
          </a>
          <a href="#" className="Header-link Header-mobile-link">
            Panley Entertainment
          </a>
          <a href="#" className="Header-link Header-mobile-link reddit">
            <FontAwesomeIcon icon={faReddit} />
            Sign in with Reddit
          </a>
          <div className="Header-mobile-spacer"></div>
        </div>
      </div>
    );
  }
}

export default Header;
