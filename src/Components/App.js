// This is just a container component with no concerns of DOM markup and passes data to the 
// presentational component (here Main)  which receives data via props and is concerned wuth DOM markup

import Main from './Main';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';
import { withRouter } from 'react-router';
function mapStateToProps(state){
    // Maps the state living inside store with the props in the from of posts
    return {
        posts: state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch)
}

// connecting the main component to receive the state from store as props
const App = withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))
// returns new connected component app where main componenet is connected to the store

export default App