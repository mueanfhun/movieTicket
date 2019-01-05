import React, { Component } from 'react';
import Movie from '../component/showmovie'
import { connect } from 'react-redux'

import { getdetailMovie }  from '../actions/detailmovie'


class Dashboard extends Component {

  componentDidMount() {
    this.props._onLoadDataMovie()
  
  }   

  render() {
    console.log("testdata",(this.props.datamovie)? this.props.datamovie : null)
    return (
      <div className="animated fadeIn">
       <Movie details = {(this.props.datamovie) ? this.props.datamovie: null}/>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  datamovie : state.detailmovie.detail
})

const mapDispatchToProps = dispatch => ({
  _onLoadDataMovie: () => dispatch(getdetailMovie())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)