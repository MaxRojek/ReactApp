import React from "react";
import "./Elhover.css";
import Table from "./Table";
const axios = require("axios");

class Email extends React.Component {
  state = {
    email: "",
    name: "",
    message: ""
  };
  sendEmail(x, y) {
    axios({
      url: "http://192.168.1.109:3001/login",
      method: "post",
      data: {
        mail: x,
        name: y
      }
    });
  }

  handleclick = event => {
    this.sendEmail(this.state.email, this.state.name);
    //alert(this.state.mail);
  };

  handleChange = event => {
    this.setState({ email: event.target.value });
  };
  handleChange1 = event => {
    this.setState({ name: event.target.value });
  };
  handleChange2 = event => {
    this.setState({ message: event.target.value });
  };
  render() {
    return (
      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <form>
              <input
                name="name"
                value={this.state.name}
                onChange={this.handleChange1}
                type="text"
                class="feedback-input"
                placeholder="Name"
              />
              <input
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                class="feedback-input"
                placeholder="email"
              />
              <textarea
                name="text"
                value={this.state.message}
                onChange={this.handleChange2}
                id="message"
                class="feedback-input"
                placeholder="Comment"
              ></textarea>

              <button type="button" class="btn btn-outline-secondary" onClick={this.handleclick}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function Elhover() {
  return (
    <section class="n1">
      <div class="box-1">
        <div class="btn2 btn2-one">
          <span>
            <a>click</a>
          </span>
        </div>
      </div>

      <div class="box-2">
        <div
          class="btn2 btn2-two"
          data-toggle="collapse"
          href="#multiCollapseExample2"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
          <span>Contact me </span>
        </div>
      </div>
      <Email />
      <div class="box-3">
        <div
          class="btn2 btn2-three"
          data-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          <span>HOVER ME</span>
        </div>
      </div>
      <Table />
    </section>
  );
}

export default Elhover;
