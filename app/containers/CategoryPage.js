import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CategoryPage extends Component {
  render() {
    return (
      <h5 style={{textAlign: 'center'}}>{this.props.category.UICATTitle || "Cat not found"}</h5>
    )
  }
}

function mapStateToProps(state, routerProps){
  let currCategory = null;
  for (let category of state.addonsBrowse.items) {
    if (category.UICATID == routerProps.params.catId) {
      currCategory = category;
      break;
    }
  }
  return {
    category: currCategory
  }
}

export default connect(mapStateToProps)(CategoryPage);
