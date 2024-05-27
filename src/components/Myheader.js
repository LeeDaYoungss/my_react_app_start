import { Component } from 'react';

class Myheader extends Component{
  render(){
    console.log("myheader 실행");
    return (
      <header>
        <h1 className="logo">
          <a href=""onClick={(e)=> {
              e.preventDefault();
              this.props.onChangePage('welcome');
          }}>{this.props.title}</a>
        </h1>
        <p>{this.props.desc}</p>
      </header>
    );
  }
}

// 내보내기
export default Myheader;