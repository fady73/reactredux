import React, {Component} from "react";
import {connect} from "react-redux";
import reducer from './_app.js'
class Hefny extends Component {
    static getInitialProps({store, isServer, pathname, query}) {
                store.dispatch({type: 'fady', payload: 'fadyyy'});

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <div>Prop from Redux {this.props.fady}</div>
                <div>Prop from Redux {this.props.hfny}</div>

                <div>Prop from getInitialProps </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     console.log(state)
//     return {
   
//         hfny: reducer.hfny,
              
       
          
//     };
//   };
//   const mapDispatchToProps = dispatch => {
//     return {
//       Popular_Channels: () => dispatch(stream.Popular_Channels()),
//       Featured_Channels: () => dispatch(stream.Featured_Channels()),
//       Favorites_Channels: () => dispatch(stream.Favorites_Channels())
//     };
//   };
export default connect(state => state)(Hefny);