import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Main.css';


const choice = [
  'Menm jan an',
  'Adisk',
  'Disk di',
];

class Main extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="Main">
        <div className="navbar">
          <div className="menu">
            <i className="icon-menu" />
          </div>
          <div className="spacer" />
          <div className="brand">
            TèmTèk
          </div>
          <div className="spacer" />
        </div>
        <div className="page">
          <div className="row">
            <div className="grid-6 grid--offset-3">
              <div className="term-card">
                <h3 className="term">Hard Drive</h3>
                <p className="definition">A hard disk drive (HDD), hard disk, hard drive or fixed disk is a data storage device that uses magnetic storage to store and retrieve digital information using one or more rigid rapidly rotating disks (platters) coated with magnetic material.</p>
              </div>
              { choice.map((item, idx) => (
                <div key={idx} className="choice">
                  <span>{item}</span>
                  <i className="icon-check_circle" />
                </div>
              ))}
              <form className="new-term">
                <input type="text"  placeholder="Ajoute yon lòt tradisksyon"/>
                <button className="add-term icon-check"></button>
              </form>
              <button className="submit btn btn--color btn--size-l">Anrejistre</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
