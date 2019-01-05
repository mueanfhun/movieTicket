import React, { Component } from 'react';
import {Container,Table,Row, Col, Card, CardHeader, CardBody, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, ButtonGroup, ButtonToolbar, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';



class showmovie extends Component {
  render() {
    console.log("show",(this.props.details)? this.props.details.data : '')
    return ( 
     
         <div className="card-deck">
          <Row>
         
            <div className="card">
           <img  className="card-img" src={(this.props.details)? this.props.details.data[0].image : ''} />
              <div className="card-body">
                <h2 className="card-title text-center">{(this.props.details)? this.props.details.data[0].name : ''}</h2>
               
              </div>
              <div className="card-footer">
                <small className="text-center"><h3>ราคา  {(this.props.details)? this.props.details.data[0].price : ''}</h3></small>
              </div>
            </div> 
  
            <div className="card">
          <img className="card-img" src={(this.props.details)? this.props.details.data[1].image : ''} />
              <div className="card-body">
                <h2 className="card-title text-center">{(this.props.details)? this.props.details.data[1].name : ''}</h2>
              
              </div>
              <div className="card-footer">
              <small className="text-center"><h3>ราคา  {(this.props.details)? this.props.details.data[1].price : ''}</h3></small>
              </div>
            </div>

            <div className="card">
            <img className="card-img" src={(this.props.details)? this.props.details.data[2].image : ''} />
              <div className="card-body">
                <h2 className="card-title text-center">{(this.props.details)? this.props.details.data[2].name : ''}</h2>
                  
                </div>
              <div className="card-footer">
              <small className="text-center"><h3>ราคา  {(this.props.details)? this.props.details.data[2].price : ''}</h3></small>
              </div>
            </div>

            <div className="card">
          <img className="card-img" src={(this.props.details)? this.props.details.data[3].image : ''} />
                    <div className="card-body">
                      <h2 className="card-title text-center">{(this.props.details)? this.props.details.data[3].name : ''}</h2>
                    
                    </div>
              <div className="card-footer">
              <small className="text-center"><h3>ราคา  {(this.props.details)? this.props.details.data[3].price : ''}</h3></small>
              </div>
            </div>
          
            </Row>
         
  <br/><br/>
  
        <div >
          <Row>
              <div className="card">
              <img className="card-img" src={(this.props.details)? this.props.details.data[4].image : ''} />
                <div className="card-body">
                  <h2 className="card-title text-center">{(this.props.details)? this.props.details.data[4].name : ''}</h2>
                
                </div>
                <div className="card-footer">
                <small className="text-center"><h3>ราคา  {(this.props.details)? this.props.details.data[4].price : ''}</h3></small>
                </div>
              </div> 
 
              <div className="card">
               <img className="card-img" src={(this.props.details)? this.props.details.data[5].image : ''} />
                <div className="card-body">
                  <h2 className="card-title text-center">{(this.props.details)? this.props.details.data[5].name : ''}</h2>
                 
                </div>
                <div className="card-footer">
                <small className="text-center"><h3>ราคา  {(this.props.details)? this.props.details.data[5].price : ''}</h3></small>
                </div>
              </div>

              <div className="card">
            <img className="card-img" src={(this.props.details)? this.props.details.data[6].image : ''} />
                  <div className="card-body">
                    <h2 className="card-title text-center">{(this.props.details)? this.props.details.data[6].name : ''}</h2>
                     
                  </div>
                <div className="card-footer">
                <small className="text-center"><h3>ราคา  {(this.props.details)? this.props.details.data[6].price : ''}</h3></small>
                </div>
              </div>

              <div className="card">
              <img className="card-img" src={(this.props.details)? this.props.details.data[7].image : ''} />
                      <div className="card-body">
                        <h2 className="card-title text-center">{(this.props.details)? this.props.details.data[7].name : ''}</h2>
                       
                      </div>
                <div className="card-footer">
                <small className="text-center"><h3>ราคา  {(this.props.details)? this.props.details.data[7].price : ''}</h3></small>
                </div>
              </div>

              </Row>
          </div>
     
     <br/><br/>
 
        <div >
            <Row>

                <div className="card">
                 <img className="card-img" src={(this.props.details)? this.props.details.data[8].image : ''} />
                  <div className="card-body">
                    <h2 className="card-title text-center">{(this.props.details)? this.props.details.data[8].name : ''}</h2>
                  
                  </div>
                  <div className="card-footer">
                  <small className="text-center"><h3>ราคา  {(this.props.details)? this.props.details.data[8].price : ''}</h3></small>
                  </div>
                </div> 
          
                <div className="card">
                <img className="card-img" src={(this.props.details)? this.props.details.data[9].image : ''} />
                  <div className="card-body">
                    <h2 className="card-title text-center">{(this.props.details)? this.props.details.data[9].name : ''}</h2>
                   
                  </div>
                  <div className="card-footer">
                  <small className="text-center"><h3>ราคา  {(this.props.details)? this.props.details.data[9].price : ''}</h3></small>
                  </div>
                </div>

                <div className="card">
                <img className="card-img" src={(this.props.details)? this.props.details.data[10].image : ''} />
                    <div className="card-body">
                      <h2 className="card-title text-center">{(this.props.details)? this.props.details.data[10].name : ''}</h2>
                       
                    </div>
                  <div className="card-footer">
                  <small className="text-center"><h3>ราคา  {(this.props.details)? this.props.details.data[10].price : ''}</h3></small>
                  </div>
                </div>

                <div className="card">
                <img className="card-img" src={(this.props.details)? this.props.details.data[11].image : ''} />
                        <div className="card-body">
                          <h2 className="card-title text-center">{(this.props.details)? this.props.details.data[11].name : ''}</h2>
                        
                        </div>
                  <div className="card-footer">
                  <small className="text-center"><h3>ราคา  {(this.props.details)? this.props.details.data[11].price : ''}</h3></small>
                  </div>
                </div>

                </Row>
            </div>
    
      </div>
     
     
        

       
    );
  }
}

export default showmovie;