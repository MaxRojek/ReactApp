import React from "react";
import "./Elhover.css";
const axios = require("axios");

const Table = () => {
  return (
    <div class="row">
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample1">
          <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
    </div>
  );
};
class Email extends React.Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <form>
              <input name="name" type="text" class="feedback-input" placeholder="Name" />
              <input
                name="email"
                value={this.state.value}
                onChange={this.handleChange}
                class="feedback-input"
                placeholder="email"
              />
              <textarea name="text" id="message" class="feedback-input" placeholder="Comment"></textarea>

              <button type="button" class="btn btn-outline-secondary" onClick={sendEmail}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
function sendEmail() {
  alert("wysyłam");
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
