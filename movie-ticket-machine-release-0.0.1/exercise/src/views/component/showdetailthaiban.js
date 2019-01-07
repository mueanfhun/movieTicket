import React, { Component } from 'react';
import {Container,Table,Row, Col, Card, CardHeader, CardBody, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, ButtonGroup, ButtonToolbar, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { connect } from 'react-redux'

import { getdetailMovie }  from '../actions/detailmovie'



class showdetailthaiban extends Component {

    componentDidMount() {
        this.props._onLoadDataMovie()
      
      }   

  render() {
   
    return ( 
  
        <div class="card col-md-6 .offset-md-3 text-center">
       <img  className="card-img" src={(this.props.datamovie)? this.props.datamovie.data[2].image : ''} />
        <div class="card-body">
        <h2 className="card-title text-center">{(this.props.datamovie)? this.props.datamovie.data[2].name : ''}</h2>
          <p className="card-text text-center">{(this.props.datamovie)? this.props.datamovie.data[2].shot_description : ''}</p>
        </div>
        </div>

    
       
    )
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
)(showdetailthaiban)