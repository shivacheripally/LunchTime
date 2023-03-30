import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
// Setup up a React Code from Scratch
// to which displays "Breakfast Time" if
// the current time is before 12:00 in
// the morning, "Lunch Time" if the time is
// between 12:00 to 18:00, and "Dinner Time".

// if the current time is after 18:00.
// Sample Output at 15:00.
class Breakfast extends React.Component {
  render() {
    return <h1 className="breakfast">Breakfast Time!</h1>;
  }
}

class Lunch extends React.Component {
  render() {
    return <h1 className="lunch">Lunch Time!</h1>;
  }
}

class Dinner extends React.Component {
  render() {
    return <h1 className="dinner">Dinner Time!</h1>;
  }
}
const now = new Date();
const hours = now.getHours().toString().padStart(2, "0");
const root = document.getElementById("root");
ReactDOM.render(
  <div className="box">
    {hours <= 12 && <Breakfast />}
    {12 < hours && hours < 18 && <Lunch />}
    {hours >= 18 && <Dinner />}
  </div>,
  root
);
