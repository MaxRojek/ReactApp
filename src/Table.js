import React from "react";
import axios from "axios";
import "./Table.css";

function Row({ month, sales, profit }) {
  return (
    <tr>
      <td class="text-left">{month}</td>
      <td class="text-left">{sales}</td>
      <td class="text-left">{profit}</td>
    </tr>
  );
}

class Table extends React.Component {
  state = {
    dane: []
  };
  //"https://192.168.1.109:3001/api" - url
  // {this.state.dane.map(dane => (
  //  <li>{dane.month}</li>
  //  ))}
  componentDidMount() {
    axios.get("http://192.168.1.109:3001/api").then(res => {
      //const dane = JSON.stringify(res.data);
      //console.log("dane" + dane);
      this.setState({ dane: res.data });
      console.log(this.state.dane[0].sales);
      console.log(this.state.dane[0].month);
      const x = this.state.dane[0].month;
    });
  }

  render() {
    return (
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample1">
          <div class="card card-body">
            <table class="table-fill">
              <thead>
                <tr>
                  <th class="text-left">Month</th>
                  <th class="text-left">Sales</th>
                  <th class="text-left">Profit</th>
                </tr>
              </thead>
              {this.state.dane.map(dane => (
                <Row month={dane.month} sales={dane.sales} profit={dane.profit} />
              ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Table;
