import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openConfigure, closeConfigure } from '../actions/toggleConfigureDialog'

import { Dialog, RaisedButton } from 'material-ui';

class ConfigureDialog extends Component {
  render() {
    return (
      <Dialog open={this.props.dialogState}>
        <h3>Hello configure!</h3>
        <p>
          Configure lorem ipsum.

          asdfjaa
          sdf
          df
        </p>
        <RaisedButton primary={true} onClick={() => this.props.closeConfigure()}>Done</RaisedButton>
      </Dialog>
    );
  }
}

function mapStateToProps(state){
  return {
    dialogState: state.toggleConfigureDialog
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({openConfigure: openConfigure, closeConfigure: closeConfigure}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigureDialog);
