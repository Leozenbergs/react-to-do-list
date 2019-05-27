import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.displayData = "";
    this.submitNote = this.submitNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.msgAlert = this.msgAlert.bind(this);
    this.state = {
      datas: [],
      act: 0,
      index: ''
    }
  }
  
  msgAlert(){
    document.getElementById('note_form').innerHTML+="<h3 style='color: red'> Please enter the respectives field values</h3>";
  }
  removeNote=(e)=>{
    let datas = this.state.datas;
    datas.splice(e, 1);
    this.setState({
      datas: datas
    });

  }

  editNote=(e)=>{
    let datas = this.state.datas[e];
    this.refs.title.value = datas.title;
    this.refs.message.value = datas.message;

    this.setState({
      act: 1,
      index: e
    });
  }
  submitNote=(e)=> {
    e.preventDefault();
    let datas = this.state.datas;    
    let title = this.refs.title.value;
    let message = this.refs.message.value;
    

    if(this.state.act === 0){
      let data = {
        title, message
      }
     datas.push(data);

    }else{
      let index = this.state.index;
      datas[index].title = title;
      datas[index].message = message;
    }


    this.setState({
      datas: datas
    });
    
    // title !== '' && message !== ''? document.getElementById('notes').innerHTML += `<div class="note_body"><div class="note_header">${title}<span class="pull-right c-pointer">&times;</span></div><div class="note_message">${message}</div></div>`: this.msgAlert();
    
  }
  componentDidMount(){
    // document.addEventListener('click', (e)=>{
    //   this.removeNote(e);
    // });    
    this.refs.title.focus();
  }
  


  render(){
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2 className="text-center">Add notes</h2>
        <form className="main_form" id="note_form" ref="note_form" >
          <input type="text" id="title" ref="title" placeholder="title"/>
          <textarea id="message" ref="message" rows="4" placeholder="Message"></textarea>
          <button type="button" id="btn" className="main_btn no-border c-pointer" onClick={(e)=>this.submitNote(e)} >Add note</button>
        </form>
        <pre>
        {datas.map((data, i) => 
          <li key={i}>
            {i+1}. {data.title}, {data.message}
            <button type="button" onClick={()=>this.editNote(i)}> Edit </button>
            <button type="button" onClick={()=>this.removeNote(i)}> Remove </button>
          </li>
        )}
        </pre>
          

      </div>
    );
  }
}

export default App;
