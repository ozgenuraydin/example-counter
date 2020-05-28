import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
   constructor(props) {
       super(props);
       this.state={
           count:0
       }
   }

increment =()=>{
       this.setState({
           count:this.state.count+1
       })
}

decrement =()=>{
       this.setState({
           count:this.state.count-1
       })
}
    render(){
        const {count}=this.state;
        return (
            <div className="App">
                <h1>⏳ COUNTER APP⏳</h1>
                <p>{count} </p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement} >-</button>
            </div>
        )
    }
}



/*
 //ortak bir fonksiyon ile  yazmak isteseydik:

class App extends React.Component{
   constructor(props) {
       super(props);
       this.state={
           count:0
       }
   }

degistir = (operation) =>{
  this.setState({
    count: operation == "azalt" ? this.state.count-1 : this.state.count+1
})
}
    render(){
        const {count}=this.state;
        return (
            <div className="App">
                <h1>COUNTER APP</h1>
                <p>{count} </p>
                <button onClick={()=>{this.degistir("arttır")}}>+</button>
                <button onClick={()=>{this.degistir("azalt")}}>-</button>
            </div>
        )
    }

}*/

export default App;
