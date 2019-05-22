import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.displayData = "";
    this.changeSub = this.changeSub.bind(this);
  }
  changeSub(e) {
    let title = document.getElementById('title').value;
    let message = document.getElementById('message').value;

    document.getElementById('notes').innerHTML += `<div className="note_body"><pre><div className="note_header">${title}</div><div className="note_message">${message}</div></pre></div>`;
    e.preventDefault();
  }
  


  render(){
    return (
      <div className="App">

        <form className="main_form" onSubmit={this.changeSub}>
          <input type="text" id="title" name="title" placeholder="title"/>
          <input type="text" id="message" name="message" placeholder="message" />
          <button type="submit" id="btn" >Add note</button>
        </form>
        <div className="notes_section" id="notes">
          {/* {this.state.showdata} */}
        </div>

      </div>
    );
  }
}

export default App;
