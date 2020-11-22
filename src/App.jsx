import React from 'react'
import { connect } from 'react-redux'
import {display} from './store/action'
class App extends React.Component{
    render(){
        console.log("From App Props===>",this.props)
        return(
            <div>
                <h1>App</h1>
                <button onClick={this.props.display}>Click</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return state

}
const mapDispatachToProps=(dispatch)=>({

    display:()=>dispatch(display())


})
export default connect (mapStateToProps,mapDispatachToProps)(App);