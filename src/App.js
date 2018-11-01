import React, { Component } from "react";
import "./App.css";
import Birthdayform from "./Birthdayform";
import Quiz from "./Quiz";
import Results from "./Results";

let month = "";
let day = 0;
let zodiacSign = "";

class App extends Component {
  constructor() {
    super();
    this.state = {
      phase: "opening",
      question: 1,
      birthday: 0,
      birthMonth: "",
      zodiacSign: "",
      styleSign: ""
    };
  }

  //each logical test determines a day when the next sign begins
  zodiacSignDefinition = (dayTest, nextSign, currentSign) => {
    zodiacSign = dayTest ? nextSign : currentSign;
  };

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  collectBirthday = () => {
    let day = document.querySelector(".daySelector").value;
    let month = document.querySelector(".monthSelector").value;

    this.setState({ phase: "quiz" });
    //does a switch from month, case month then logical test
    switch (month) {
      case "Janeiro":
        this.zodiacSignDefinition(day > 19, "Aquário", "Capricórnio");
        break;
      case "Fevereiro":
        this.zodiacSignDefinition(day > 18, "Peixes", "Aquário");
        break;
      case "Março":
        this.zodiacSignDefinition(day > 20, "Áries", "Peixes");
        break;
      case "Abril":
        this.zodiacSignDefinition(day > 19, "Touro", "Áries");
        break;
      case "Maio":
        this.zodiacSignDefinition(day > 20, "Gêmeos", "Touro");
        break;
      case "Junho":
        this.zodiacSignDefinition(day > 20, "Câncer", "Gêmeos");
        break;
      case "Julho":
        this.zodiacSignDefinition(day > 22, "Leão", "Câncer");
        break;
      case "Agosto":
        this.zodiacSignDefinition(day > 22, "Virgem", "Leão");
        break;
      case "Setembro":
        this.zodiacSignDefinition(day > 22, "Libra", "Virgem");
        break;
      case "Outubro":
        this.zodiacSignDefinition(day > 22, "Escorpião", "Libra");
        break;
      case "Novembro":
        this.zodiacSignDefinition(day > 21, "Sagitário", "Escorpião");
        break;
      case "Dezembro":
        this.zodiacSignDefinition(day > 21, "Capricórnio", "Sagitário");
        break;
      default:
        console.log("Signo indisponível");
    }
    console.log(day, month, zodiacSign);
  };

  render() {
    return (
      <div className="App">
        <span style={{ fontSize: 162 }} role="img" aria-label="cosmo emojis">
          🔮
        </span>
        {this.state.phase === "opening" ? (
          <Birthdayform
            collectBirthday={this.collectBirthday}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <Quiz />
        )}
      </div>
    );
  }
}

export default App;
