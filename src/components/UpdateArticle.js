import { Component } from 'react';

class UpdateArticle extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc,
      level:this.props.data.level
    }
  }
  inputFormHander(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

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
            this.props.onSubmit(e.target.title.value,e.target.desc.value,this.state.id, e.target.level.value);
          }}>
            <input type='hidden' name='id' value={this.state.id}/>
            <p>
              <input 
                type='text' 
                name='title' 
                placeholder='title' 
                value={this.state.title}
                onChange={e=>{
                  this.inputFormHander(e)
                }}
              />
            </p>
            <p>
              <textarea 
              name='desc' 
              placeholder='description'
              value={this.state.desc}
              onChange={e=>{
                this.inputFormHander(e)
              }}
              ></textarea>
            </p>
            <p>
              <input type='number' min='4' name='level' value={this.state.level}                 onChange={e=>{
                  this.inputFormHander(e)
                }}/>
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