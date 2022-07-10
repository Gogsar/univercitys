import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      univers: []
    }
    this.myRef = React.createRef('')
  }



findUnivers = () => {
  fetch(`http://universities.hipolabs.com/search?country=${this.myRef.current.value}`)
  .then(data => data.json())
  .then(res => this.setState({
    univers: res
  }))
}

render() {
  return (
      <section>
        <input ref={this.myRef}/>
        <button onClick={this.findUnivers}>find univers</button>
        {
          <ul>
            {this.state.univers.map(unive => {
              return <li key={Math.random()} className = 'item'>
                {unive.alpha_two_code}
                <br/>
                {unive.country}
                <br/>
                {unive.domains[0]}
              </li>
            })}
          </ul>
        }
      </section>
    )
  }
}


export default App