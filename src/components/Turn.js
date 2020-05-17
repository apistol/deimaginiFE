import React, { Component } from "react";
import Booklet from "booklet-react-component";

class UsingBookletComponent extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      flipPageIndex: 0,
    };
  }
  genNextPages = () => {
    this.setState({
      index: this.state.index + 2,
    });
  };
  genPrevPages = () => {
    this.setState({
      index: this.state.index - 2,
    });
  };
  flipPageIndexForward = () => {
    this.setState({
      flipPageIndex: this.state.flipPageIndex + 1,
    });
  };
  flipPageIndexBack = () => {
    this.setState({
      flipPageIndex: this.state.flipPageIndex - 1,
    });
  };
  render() {
    return (
      <div>
        <button>Class</button>
        <Booklet
          flipPageIndex={this.state.flipPageIndex}
          index={this.state.index}
          nextPage={this.genNextPages}
          prevPage={this.genPrevPages}
          pages={[
            <div> Ele 0</div>,
            <div> Ele 1</div>,
            <div> Ele 2</div>,
            <div> Ele 3</div>,
            <div> Ele 4</div>,
            <div> Ele 5</div>,
            <div> Ele 6</div>,
          ]}
        />

        <div className="button-container" style={{ position: "absolute" }}>
          <button onClick={this.flipPageIndexForward}>Next Pages</button>
          <button onClick={this.flipPageIndexBack}>Prev Pages</button>
        </div>
      </div>
    );
  }
}

export default UsingBookletComponent;
