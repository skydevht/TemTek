import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Main.css';

class Main extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={styles.base}>

      </div>
    );
  }
}

export default Main;
