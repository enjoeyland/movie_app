import React from "react"
import PropTypes from "prop-types"

class App extends React.Component {
  state = {
    count: 0
  }

  add = ()=> {
    // state는 readonly field이다. 

    // setState을 통해 state을 바꿔야 한다.
    // setState에서 render를 다시 실해하도록 한다.
    
    // 또한 setState에서는 state을 비동기적으로 바꾼다.
    // 그래서 동기화가 안된 데이터를 안사용하도록  직접사용하지 말고 lamda 식을 통해 업데이트할 현재 state을 받아야 한다. 
    this.setState(current => ({count: current.count+1}))
  }
  minus = ()=> {
    this.setState(current => ({count: current.count-1}))
  }

  render() {
    return (
      <div>
        <h1>I'm a class {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }

  componentDidMount() {

  }
  componentDidUpdate() {

  }
}

export default App
