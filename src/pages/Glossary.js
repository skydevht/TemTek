import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import './Glossary.css';


const terms = [
  {
    term: 'abend',
    trans: 'abend',
  },
  {
    term: 'access',
    trans: 'aksè',
  },
  {
    term: 'accumulator',
    trans: 'akimilatè',
  },
];

class Glossary extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="page">
          <h1 className="page-title">Glosè</h1>
          <section className="section">
            <h3 className="section-title">A</h3>
            { terms.map((term, idx) => (
              <div className="term-row" key={idx}>
                <h5 className="term">{ term.term } <span>{term.trans}</span></h5>
              </div>
            ))
            }
          </section>
        </div>
      </div>
    );
  }
}

export default Glossary;
