import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCategories } from '../actions/addonsBrowse';

class BrowsePage extends Component {
  componentWillMount(){
    if (!this.props.addonsBrowse.items.length > 0){
      this.props.fetchCategories("WOW");
    }
  }

  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    addonsBrowse: state.addonsBrowse
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCategories: fetchCategories}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage);
