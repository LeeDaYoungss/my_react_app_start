import { Component } from 'react';

class UpdateArticle extends Component{
  render(){
    console.log("UpdateArticle 실행");
    return (
      <section>
        <article>
          <h2>Update Article</h2>
          <form method='post' onSubmit={(e)=>{
            e.preventDefault();
            // debugger; 실행전에 멈춰줘서 과정 확인 가능
            console.log(e.target.title.value);
            this.props.onSubmit(e.target.title.value,e.target.desc.value);
          }}>
            <p>
              <input type='text' name='title' placeholder='title' value={this.props.data.title}/>
            </p>
            <p>
              <textarea name='desc' placeholder='description'>{this.props.data.desc}</textarea>
            </p>
            <button type="submit">입력</button>
          </form>
        </article>
      </section>
    );
  }
}

// 내보내기
export default UpdateArticle;