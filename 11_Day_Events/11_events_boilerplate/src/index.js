// index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {
  };
  // triggered whenever the mouse moves
  handleMouseHover = (e) => {
    e.persist();
    const elem = e.target;

    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    elem.style.left = Math.random() * width + 'px'
    elem.style.top = Math.random() * height + 'px'
    // this.setState();
  };

  render() {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <div
          onMouseEnter={this.handleMouseHover}
          style={{
            width: "200px",
            height: "100px",
            backgroundColor: "crimson",
            position: "absolute",
            top: "150px",
            left: "250px",
          }}
        ></div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
