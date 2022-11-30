import React from 'react';
import PropTypes from 'prop-types';

export default class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.add(this.props.name);
  }

  render() {
    return (
            <div className={this.props.className} onClick={this.clickHandler} id={this.props.name}>
               <p className='text-center'> {this.props.name}</p>
            </div>
    );
  }
}

CalculatorButton.defaultProps = {
  name: '0',
  className: 'col-md-3 btn_number',
};

CalculatorButton.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  add: PropTypes.func,
};