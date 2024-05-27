import { Component } from 'react';

class Myheader extends Component{
  render(){
    console.log(this);
    return (
      <header>
        <h1 className="logo">{this.props.title}</h1>
        <p>{this.props.desc}</p>
      </header>
    );
  }
}

// 내보내기
export default Myheader;