import React,{Component} from 'react';
import PhotoWall from './photowall';
import AddPhoto from './AddPhoto';
import {Link, Route} from 'react-router-dom';

// import {removePost} from '../redux/actions';
// We are using React redux for storing the state which has better state management.
// Redux is single store where state is read-only and can only trigger actions, component 
// can't directly update the state, instead they request the reducer to update the state and hence 
// show the updated UI.

// If there are multiple intermediate child components for the props from parent component to reach the 
// destination child component, then this task can get tedious, so we use redux for the prop to be 
// accessible from anywhere.

class Main extends Component{
    constructor(){
        super()
    }

    render(){
      console.log(this.props.posts);
      return (<div>
        <h1>
          <Link to="/"> PhotoWall </Link>
        </h1>
        <Route exact path='/' render= {() => (
        <div>
           {/* posts = props.post, remove = props.remove .... => use ES6 spread */}
          <PhotoWall {...this.props}/>
        </div>
        )}/>
        <Route path='/AddPhoto' render= {({history}) => (
          <AddPhoto {...this.props}/>
        )}/> 

        
      </div>)
    }
  }

export default Main