import React, { Component } from 'react';
import Movie from '../component/showmovie'
import Boxmovie from '../component/boxmovie'
import { connect } from 'react-redux'

import { getdetailMovie,getMoviestatus }  from '../actions/detailmovie'


class Dashboard extends Component {

  constructor(props) {
    super(props)
    
    this.toggle = this.toggle.bind(this);
    this.state = {
     
      data: (this.props.datamovie) ? this.props.datamovie.data: null,
      status: ''
      
    }
    // this.handleChange= this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
   
  }

    // handleChange(event){
    //   this.setState({status: event});
    //   var filteredData = this.props.data.filter(function (item){
    //     return item.status === event;
    //   })
    // }

  async handleClick(event) {
    this.val = event.target.value;
    // this.setState({statue: val})
    console.log("val",this.val);
      this.props._onLoadStatusMovie(this.val);
    return this.val
    
  }

  


  toggle() {
    const newArray = this.state.value;
    this.setState({
      value: !newArray,
    });
  }


  _onBySlectClick = () => {
    this.props._onLoadStatusMovie()
  }

  componentDidMount() {

    this.props._onLoadDataMovie()
    
  
  }   

  render() {
    console.log("testdata",(this.props.datamovie)? this.val : null)
    return (
      <div className="animated fadeIn">
       <Boxmovie 
       detaildata = {(this.props.datamovie) ? this.props.datamovie.data: null}
       toggle={this.toggle}
       clicked={this.handleClick}
       />
       <Movie 
       details = {(this.props.datamovie) ? this.props.datamovie: null} 
       filters = {(this.props.datamovie) ? this.val : null}
       />
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  datamovie : state.detailmovie.detail
})

const mapDispatchToProps = dispatch => ({
  
  _onLoadDataMovie: () => dispatch(getdetailMovie()),
  _onLoadStatusMovie: (value) => dispatch(getMoviestatus(value))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)