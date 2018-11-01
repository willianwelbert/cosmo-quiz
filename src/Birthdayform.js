import React, { Component } from "react";

class Birthdayform extends Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Quando é seu aniversário?</label>
        <br />
        <br />
        <select
          value={this.state.value}
          onChange={this.handleChange}
          name="day"
          className="daySelector"
        >
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
          <option value="7">07</option>
          <option value="8">08</option>
          <option value="9">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <select name="month" className="monthSelector">
          <option value="Janeiro">Janeiro</option>
          <option value="Fevereiro">Fevereiro</option>
          <option value="Março">Março</option>
          <option value="Abril">Abril</option>
          <option value="Maio">Maio</option>
          <option value="Junho">Junho</option>
          <option value="Julho">Julho</option>
          <option value="Agosto">Agosto</option>
          <option value="Setembro">Setembro</option>
          <option value="Outubro">Outubro</option>
          <option value="Novembro">Novembro</option>
          <option value="Dezembro">Dezembro</option>
        </select>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default Birthdayform;
