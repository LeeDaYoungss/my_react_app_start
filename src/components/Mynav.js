import { Component } from 'react';

class Mynav extends Component{
  render(){
    return (
      <nav>
        <ul>
          <li><a href="">HTML</a></li>
          <li><a href="">CSS</a></li>
          <li><a href="">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

// 내보내기
export default Mynav;