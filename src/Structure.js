import React, { Component } from "react";

class Structure extends Component {
  render() {
    let Tela;

    return (
      <div>
        <h3>
          <span style={{ fontSize: 162 }} role="img" aria-label="cosmo emojis">
            🔮
          </span>
          <Birthdayform />
          <Quiz />
          <Results />
        </h3>
      </div>
    );
  }
}

export default Structure;
