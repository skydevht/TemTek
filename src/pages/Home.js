import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="grid-6 grid--offset-3">
            <h3 className="welcome">Byenvini nan</h3>
            <h1 className="brand">TèmTèk</h1>
            <p className="intro">TèmTèk se yon platfòm kote ou ap ka jwenn tradiksyon tout tèm teknolojik ki genyen ak definisyon. Se itilizatè tankou ou ki pwopoze yo e vote sou yo. Konsa tou ou menm ou kapab pwopoze tou e vote jodi a menm. Nou ap rettann kontribisyon pa ou nan mouvman an.</p>
            <div className="txt--center"><a className="btn btn--large login">Kòmanse jodi a</a></div>
          </div>
        </div>
        <nav>
          <ul>
            <li><Link to="/glossary">Glosè</Link></li>
            <li><a>Enfo</a></li>
            <li><a>Skydev</a></li>
            <li><a>Experts Online</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Home;
