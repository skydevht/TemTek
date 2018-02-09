import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Choices.css';

class Choices extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { selected: -1 };
  }

  onClick(index) {
    this.setState({ selected: index });
  }

  render() {
    return (
      <div className="Choices">
        {this.props.data.map((item, idx) => (
          <div onClick={() => this.onClick(idx)}key={idx} className="choice">
            <span>{item}</span>
            { idx === this.state.selected ?
                <i className="icon-check_circle" />
                : null }
          </div>
        ))}
      </div>
    );
  }
}

export default Choices;
