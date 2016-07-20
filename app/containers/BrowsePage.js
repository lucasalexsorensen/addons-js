import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCategories, fetchAll } from '../actions/addonsBrowse';

class BrowsePage extends Component {
  componentWillMount() {
    if (!this.props.addonsBrowse.categories.items.length > 0) {
      this.props.fetchCategories('WOW');
    }
    if (!this.props.addonsBrowse.all.items.length > 0) {
      this.props.fetchAll('WOW');
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    addonsBrowse: state.addonsBrowse,
    gamesMeta: state.gamesMeta
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategories, fetchAll }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage);
