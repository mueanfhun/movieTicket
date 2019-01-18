import React, { Component } from 'react';
import {Container,FormGroup,Table,Row, Col, Card, CardHeader, CardBody, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, ButtonGroup, ButtonToolbar, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';




const _renderTable = (props) => {
  return props.detaildata.map(element => {
    return (
      element.now_showing
      );
  })
}

// var moviedata = [
//   {name:(this.props.detaildata) ? this.props.detaildata.name :'',}
// ]

// const filtered = _renderTable(this.props).filter(str =>{
//   return str._renderTable(this.props).now_showing == "true";
// });

class boxmovie extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
     
      data: this.props.datamovie,
      statue: ''
      
    }
  }
  
  
  
  render() {
    
    console.log("status",(this.props.detaildata) ? _renderTable(this.props):'')
   
    
    return (
      
      <FormGroup row  toggle={() =>  this.props.toggle() }>
     
      <Col xs="12" md="9">
        <Input type="select" name="select" id="select" onClick={(event) => this.props.clicked(event)} >
          <option value="ALL" >ALL</option>
          <option value="true">NOW SHOWING</option>
          <option value="false" >BEEN OUT</option>
        </Input>  
      </Col>
    </FormGroup>


    
    );
    }
}


export default boxmovie;