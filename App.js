import React from 'react';
import './App.css';
import data from "./quotes.js"
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quotes : {
        text : "\"Remember no one can make you feel inferior without your consent.\"",
        author : "Eleanor Roosevelt"
      }
    }
  }

  handleClick(){
    const rand = Math.floor(Math.random()*9)
    this.setState({
      quotes : data[rand]
    })
  }

  render(){
  return (
    <div className="container-fluid">
      <h1 padding-top="500px" id="text" className="text-center">{this.state.quotes.text}</h1>
      <p id="author"className="text-center" >{this.state.quotes.author}</p>
      <a id="tweet-quote" href="twitter.com/intent/tweet"><i className="fab fa-twitter"></i></a>
      <button  id="new-quote" onClick ={this.handleClick.bind(this)} className="default-btn text-center button">Random Quotes</button>
    </div>
  )
  }
}

export default App;
