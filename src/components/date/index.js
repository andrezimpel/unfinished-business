import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/de';

class FormatDate extends Component {
  render() {
    let { date, format } = this.props;
    moment.locale('de');

    const dateString = moment(date).format(format);

    return (
      <span>{dateString}</span>
    );
  }
}

FormatDate.propTypes = {
  date: PropTypes.string.isRequired,
  format: PropTypes.string
}

Image.defaultProps = {
  date: Date.now(),
  format: 'DD. MMMM YYYY'
}


export default FormatDate;
