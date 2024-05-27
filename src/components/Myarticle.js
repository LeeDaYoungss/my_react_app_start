import { Component } from 'react';

class Myarticle extends Component{
  render(){
    console.log("myarticle 실행");
    return (
      <section>
        <article>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
        </article>
      </section>
    );
  }
}

// 내보내기
export default Myarticle;