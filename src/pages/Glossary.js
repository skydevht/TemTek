import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Term from '../components/Term';
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

const index = [
  'Tout',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

class Glossary extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="page">
          <h1 className="page-title">Glosè</h1>
          <ul className="navigation">
            {
              index.map((c, idx) => (
                <li key={idx} >{c}</li>
              ))
            }
          </ul>
          <section className="section">
            <h3 className="section-title">A</h3>
            { terms.map((term, idx) => (
              <Term key={idx} term={term} />
            ))
            }
          </section>
        </div>
      </div>
    );
  }
}

export default Glossary;
