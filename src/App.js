import React, {Component} from 'react';
// import Nav from './Nav';
import './App.css';
import { BrowserRouter as Router, Route, Link, browserHistory} from "react-router-dom";


class App extends Component {
  constructor(props){
    super(props);
    this.displayData = "";
    this.changeSub = this.changeSub.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.msgAlert = this.msgAlert.bind(this);
    // this.toggleNav = this.toggleNav.bind(this);
  }
  
  msgAlert(){
    document.getElementById('note_form').innerHTML+="<h3 style='color: red'> Please enter the respectives field values</h3>";
  }
  removeNote(e){
    var tgt = e.target;
    if (tgt.tagName === "SPAN") {
      tgt.parentNode.parentNode.remove();
    }
  }
  changeSub(e) {
    let title = document.getElementById('title').value;
    let message = document.getElementById('message').value;

    title !== '' && message !== ''? document.getElementById('notes').innerHTML += `<div class="note_body"><div class="note_header">${title}<span class="pull-right c-pointer">&times;</span></div><div class="note_message">${message}</div></div>`: this.msgAlert();
    e.preventDefault();
  }
  componentDidMount(){
    document.addEventListener('click', (e)=>{
      this.removeNote(e);
    });    
  }
  


  render(){
    return (
      <div className="App">
        <h2 className="text-center">Add notes</h2>
        <form className="main_form" id="note_form" onSubmit={this.changeSub}>
          <input type="text" id="title" name="title" placeholder="title"/>
          <textarea id="message" rows="4" placeholder="Message"></textarea>
          <button type="submit" className="main_btn no-border c-pointer" id="btn" >Add note</button>
        </form>
        <div className="notes_section" id="notes">
          {/* {this.state.showdata} */}
        </div>

      </div>
    );
  }
}

export default App;
