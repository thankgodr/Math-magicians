import React from 'react';
import PropTypes from 'prop-types';

export default class CalculatorFunction extends React.Component {
  render() {
    return (
            <div className={this.props.className}>
               <p className='text-center'> {this.props.name}</p>
            </div>
    );
  }
}

CalculatorFunction.defaultProps = {
  func: () => {},
  name: '=',
  className: 'col-md-3 function',
};

CalculatorFunction.propTypes = {
  name: PropTypes.string.isRequired,
  func: PropTypes.func,
  className: PropTypes.string.isRequired,
};