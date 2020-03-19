import React, { Component } from 'react';
import './App.scss';

class Form extends Component {
  constructor(props){
    super(props);
    this.submitUrl=this.submitUrl.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange=(e)=>{
      let text=e.target.value;
      this.props.handleChange(text);
  }

  submitUrl=(e)=>{
    e.preventDefault();
    this.props.handleClick();
    //console.log(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitUrl} className="Form">
          <input
            autoFocus
            className="Input"
            type="text"placeholder="PASTE LINK HERE"
            value={this.props.url}
            onChange={this.handleChange}
            >
          </input>
          {/* &nbsp;
          <button
            className="Button"
            type="submit"
            onClick={this.submitUrl}
          >
            GET
          </button> */}
        </form>
      </div>
    );
  }
}

export default Form;
