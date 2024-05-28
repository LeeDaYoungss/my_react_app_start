import { Component } from 'react';

class Controls extends Component {
  render(){
    console.log("Controls 실행");
    return (
      <ul className='controls'>
        <li><a href="" onClick={(e)=>{
          e.preventDefault();
          this.props.onChangeMode('Update');
        }}>Update</a></li>
        <li><a href="" onClick={(e)=>{
          e.preventDefault();
          this.props.onChangeMode('Delete');
        }}>Delete</a></li>
        <li><button onClick={()=>{
          this.props.onChangeMode('create');
        }}>Create</button></li>
      </ul>
    )
  }
}
export default Controls;