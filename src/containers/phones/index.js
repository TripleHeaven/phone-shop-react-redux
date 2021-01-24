import React , { useState, useEffect, Component} from 'react';
import {connect} from 'react-redux';

import {fetchPhones} from "../actions";

const mapDispatchToProps = {
  fetchPhones
}


class Phones extends Component {
  componentDidMount() {
    this.props.fetchPhones();
  }

  render () {
    return (
      <div>Phones</div>
    )
  }
}



export default connect(null, mapDispatchToProps) (Phones);