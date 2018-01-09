import React from 'react'

class App extends React.Component {
  render() {
    const boss = 'suning'
    return(
      <div>
        <h1>公司是{boss}</h1>
        <Project name='学习React,Vue'></Project>
        <Learn name='node.js'></Learn>
      </div>
    )
  }
}

function Learn(props) {
  return <h2>还要学习{props.name}</h2>
}

class Project extends React.Component {
  constructor(props) { // 初始化数据
    super(props)
    this.state = {
      book: ['vue', 'nodejs', 'react']
    }
    // this.readBook = this.readBook.bind(this) 强制把this绑定在函数上  或通过箭头函数 包括render内和写方法时候
  }
  readBook = () => {
    this.setState({
      book:[...this.state.book, 'jquery'+ Math.random()]
    })
  }
  render() {
    // const name = '学习React'
    return(
      <div>
        <h2>我正在{this.props.name}</h2>
        {/*<button onClick={() => this.readBook()}>点击阅读</button>*/}
        <button onClick={this.readBook}>点击阅读</button>
        <ul>
          {this.state.book.map( v => {
            return <li key={v}>{v}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App