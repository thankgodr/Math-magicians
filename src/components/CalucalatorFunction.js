import React from 'react';
import PropTypes from 'prop-types';

export default class CalculatorFunction extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.add(this.props.name);
  }

  render() {
    return (
            <div className={this.props.className} onClick={this.clickHandler} id={this.props.id}>
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
  id: PropTypes.string.isRequired,
  add: PropTypes.func,
};