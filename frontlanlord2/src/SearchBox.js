import React, {Component} from "react";

export default class SearchBox extends Component{
  constructor(props){
    super(props);
  }

  onEnter(evt) {
    console.log(evt.target.value);
    this.props.search(evt.target.value);
  }

  render(){
    return(<div>
      <input type="text"
        placeholder="search"
        onInput= {this.onEnter.bind(this)}/>
      </div>
    );
  }
}
