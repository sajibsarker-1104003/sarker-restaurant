import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loading from './Loading';

const mapStateToProps=(state)=>{
  //console.log("mapStateToProps",state);
  return{
    a:state.dishes
  }
}
class Home extends Component {
  componentDidMount(){
    //console.log("Home State:",this.state);
    //console.log("Home Props:",this.props);

    this.props.dispatch({
      type:'TEST',
      str:"Sarker"
    })
  }
  componentDidUpdate(){
    //console.log("Home Props Updated:",this.props);
  }

  
  render(){
    document.title="Sarker's Restaurant";
    return(
      <div>
      <Loading/>
      </div>
      );
  }
}
export default  connect(mapStateToProps)(Home);