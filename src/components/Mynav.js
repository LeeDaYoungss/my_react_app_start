import { Component } from 'react';

class Mynav extends Component{
  render(){
    console.log("mynav 실행");
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while(i<data.length){
      // 반복분을 사용할 땐 key 라는 값이 있어야함
      lists.push(<li key={data[i].id}><a href="" data-id={data[i].id} onClick={(e)=> {
        e.preventDefault();
        this.props.onChangePage(e.target.getAttribute('data-id'));
      }}>{data[i].title}</a></li>);
      i++;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

// 내보내기
export default Mynav;