import React from 'react';
import PropTypes from 'prop-types';

export default class ResultView extends React.Component {
  render() {
    return (
            <div className="col-md-12 resultview">
              <p className='result'>{this.props.result}</p>
            </div>
    );
  }
}

ResultView.defaultProps = {
  result: 0,
};

ResultView.propTypes = {
  result: PropTypes.number,
};