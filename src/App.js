import React, { Component } from 'react';
import './App.scss';

import Form from './Form.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      url:"",
      imgUrl:"",
      mq:"",
      hq:"",
      maxRes:""
    }
    this.changeUrl=this.changeUrl.bind(this);
    this.fetchImage=this.fetchImage.bind(this);
  }

  changeUrl=(text)=>{
    //console.log(this.state.url);
    this.setState((prevState)=>({
      url:text
    }));
  }

  fetchImage=()=>{
    if(this.state.url){
      try {
        let aaa = /(.*)(com|be)\/(watch\?v=)?(.{11})[?|&]?.*/g;
        let imgUrl = aaa.exec(this.state.url)[4];
        //console.log(`${imgUrl}`);
        //console.log("Fetching Image for "+this.state.url);
        let newmq="https://i.ytimg.com/vi/"+imgUrl+"/mqdefault.jpg";
        let newhq="https://i.ytimg.com/vi/"+imgUrl+"/hqdefault.jpg";
        let newmaxres="https://i.ytimg.com/vi/"+imgUrl+"/maxresdefault.jpg";
        //console.log(newImgUrl);
        this.setState((prevState)=>({
          mq: newmq,
          hq: newhq,
          maxres: newmaxres
        }))
      }
     catch {
       //console.log(`error`);
       alert(`Link is not valid, please try with a different one.`)
     }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            !this.state.hq?
            <div className="appTitle">
            <a href="http://surajk95.github.io/">
              <div className="appName">YTG</div>
              <div className="appDescription">YOUTUBE THUMBNAIL GRABBER</div>
              </a>
          </div>
        :
        <></>
        }
          <div>
            <Form
              url={this.state.url}
              handleChange={this.changeUrl}
              handleClick={this.fetchImage}
             />
          </div>
        </header>
         {this.state.hq?
         <div>
           Click on an image to download.
           <div className="results-container">
            <div><span className="qualHeader">Max-resolution</span><br/><a href={this.state.maxres} target="_blank" rel="noopener noreferrer">
              <img className="img-container" alt="maxres" src={this.state.maxres}/></a>
            </div>
            <div><span className="qualHeader">Hq-resolution</span><br/><a href={this.state.hq} target="_blank" rel="noopener noreferrer">
              <img className="img-container" alt="hq" src={this.state.hq}/></a>
            </div>
           </div>
          </div>
          : <div></div>}
      </div>
    );
  }
}

export default App;
