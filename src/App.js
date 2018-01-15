import React from 'react'
import { connect } from 'react-redux'
import { addNum, removeNum, addNumAsync } from './index.redux'

// const mapStateProps = (state) => {
//   return {num: state}
// }
// const actionCreators = { addNum, removeNum, addNumAsync }
// App = connect(mapStateProps, actionCreators)(App) // 装饰器

@connect(
  // state什么属性放到porps里
  state => ({num: state}),
  // 想要什么方法放到props里，自动dispatch
  { addNum, removeNum, addNumAsync }
  ) // babel-plugin-transform-decorators-legacy插件来改进connect

class App extends React.Component {
  render() {
      // const store = this.props.store
      // const num = store.getState() 
      // const addNum = this.props.addNum
      // const removeNum = this.props.removeNum
      // const addNumAsync = this.props.addNumAsync
      console.log(this.props)
      return(
        <div>
          <h1>现在的数量是{this.props.num.read}</h1>
          {/*<button onClick ={() => store.dispatch(addNum())}>加</button>*/}
          <button onClick ={this.props.addNum}>加</button>
          <button onClick ={this.props.removeNum}>减</button>
          <button onClick ={this.props.addNumAsync}>延迟2秒再加</button>
        </div> 
      )
  }
}

export default App

/*
// import 'antd-mobile/dist/antd-mobile.css'
import { Button,List } from 'antd-mobile'

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
  componentWillMount() {
    console.log('组件即将加载')
  }
  componentDidMount() {
    console.log('组件已经加载')
  }
  render() {
    console.log('组件正在加载')
    // const name = '学习React'
    return(
      <div>
        <h2>我正在{this.props.name}</h2>
        {<button onClick={() => this.readBook()}>点击阅读</button>}
        <Button type='primary' onClick={this.readBook}>点击阅读</Button>
        <List>
          {this.state.book.map((v)=> {
            return(
              <List.Item key={v}>
                {v}
              </List.Item>
            )
          })}
        </List>
        {/*<ul>
          {this.state.book.map( v => {
            return <li key={v}>{v}</li>
          })}
        </ul>}
      </div>
    )
  }
}

export default App
*/