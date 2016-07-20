import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TextField, GridList, GridTile } from 'material-ui';

import { updateCategoriesFilter } from '../actions/addonsBrowse';

class BrowseCategories extends Component {
  handleUpdateInput(event){
    this.props.updateCategoriesFilter(event.target.value);
  }

  renderCategories() {
    let mainCats = ['19','94','20','22','112','18','55','39','25','26','155','17','95','109','24','97','100','146','146','96','45','114','113','40','98','147','21','27','154'];
  }

  render() {
    return (
      <div>
        <TextField
          onChange={this.handleUpdateInput.bind(this)}
          value={this.props.addonsBrowse.categories.filter}
          hintText="Search addon categories"
          style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'block'}}
          underlineShow={true}
        />
        <br/>

        <div style={{
          width: '80%',
          overflowY: 'auto',
          height: '60vh',
          margin: '-2px auto',
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: (this.props.addonsBrowse.categories.isFetching) ? 'center' : 'flex-start'
        }}>
          <div style={{alignSelf: 'center', position: 'absolute', textAlign: 'center', display: (this.props.addonsBrowse.categories.isFetching) ? 'flex' : 'none'}} >
            <div className="preloader-wrapper active">
              <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div>
                <div className="gap-patch">
                  <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
            <p>Fetching from MMOUI...</p>
          </div>
          {this.props.addonsBrowse.categories.items.map((category) => {
            return (
              <div key={category.UICATID} style={{
                height: 80,
                padding: 2,
                boxSizing: 'border-box',
                width: '25%',
                display: (category.UICATTitle.toLowerCase().indexOf(this.props.addonsBrowse.categories.filter.toLowerCase()) !== -1) ? 'flex' : 'none'
              }}>
                <Link style={{width: '100%'}} to={`/myGames/${this.props.game.gameId}/browse/categories/${category.UICATID}`}>
                  <div cols="1" rows="1" style={{position: 'relative', display: 'block', width: '100%', height: '100%', overflow: 'hidden'}}>
                    <img src={category.UICATICON} style={{position: 'relative', width: '100%', transform: 'translateY(-30%)', top: '30%'}} />
                    <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: '50%', display: 'flex', alignItems: 'center', background: 'rgba(0,0,0,0.4)'}}>
                      <div style={{flexGrow: '1', marginLeft: 16, marginRight: 0, color: 'rgb(255, 255, 255)', overflow: 'hidden'}}>
                        <div style={{fontSize: 16, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{category.UICATTitle}</div>
                        <div style={{fontSize: 12, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}><b>{category.UICATFileCount}</b> files</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
          <br/><br/>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state, routerProps) {
  let currGame = null;
  for (let game of state.installationsList){
    if (game.id == routerProps.params.id){
      currGame = game;
      break;
    }
  }

  return {
    game: currGame,
    gamesMeta: state.gamesMeta,
    addonsBrowse: state.addonsBrowse
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateCategoriesFilter: updateCategoriesFilter}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseCategories);
