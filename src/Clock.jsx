import React, {Component} from 'react';


class Clock extends Component{
 constructor(props){
     super(props)
     this.state = {
         date : new Date()
     }
 }
componentDidMount(){
    setInterval(()=>{
        this.setState({
            date: new Date()
        })
    }, 100)
}
render(){

    return<>
         <h1>State</h1>
         <h2 className="heading">
           {this.state.date.toLocaleTimeString(this.props.local)}
         </h2>
    </>
}

}
export default Clock;