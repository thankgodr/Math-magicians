import React from 'react';
import PropTypes from 'prop-types';

export default class CalculatorButton extends React.Component {
  render() {
    return (
            <div className={this.props.className}>
               <p className='text-center'> {this.props.name}</p>
            </div>
    );
  }
}

CalculatorButton.defaultProps = {
  name: 0,
  className: 'col-md-3 btn_number',
};

CalculatorButton.propTypes = {
  name: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};