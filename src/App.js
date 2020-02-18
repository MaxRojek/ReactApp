import React from "react";

import "./App.css";

const Peaks = () => {
  return <button class="btn1 default">Like !</button>;
};

function App() {
  return (
    <div className="App">
      <div class="widget center">
        <div class="blur"></div>

        <div class="text center">
          <h1 class="">Live CSS Blur</h1>
          <p>Go ahead, resize me.</p>
          <Peaks />
        </div>
      </div>
    </div>
  );
}

export default App;
