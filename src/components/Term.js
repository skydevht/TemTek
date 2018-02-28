import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';
import './Term.css';

const Term = compose(
  withState('opened', 'isOpened', false),
  withHandlers({
    toggle: ({ isOpened }) => () => isOpened(open => !open),
  }),
)(props => (
    <div className="term-row" onClick={props.toggle}>
      <h5 className="term">{ props.term.term } <span>{props.term.trans}</span></h5>
      <div className={`content ${props.opened ? 'opened' : 'closed'}`}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta laoreet ultrices. Duis sagittis massa fermentum, iaculis odio eu, aliquam elit. Duis dapibus dolor non consectetur volutpat. Nullam et neque viverra, imperdiet quam eu, imperdiet dui. Etiam tincidunt vel erat eget dignissim. In vitae felis ut tellus scelerisque pretium eget a diam. Pellentesque id erat nulla.
        </p>
      </div>
    </div>
));

Term.displayName = 'Term';

Term.propTypes = {
  term: PropTypes.object.isRequired,
};

export default Term;
