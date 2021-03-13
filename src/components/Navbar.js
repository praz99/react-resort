import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleToggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button type="button" className="nav-btn" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
