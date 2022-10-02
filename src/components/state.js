import React from "react";

function State() {
  return (
    <div className="headertext">
      <div className="state">
        <h1>Cостояние</h1>
        <div className="componentscode">
          <pre>
            <code>
              {`class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
            `}
            </code>
          </pre>
        </div>
        <p>
          {" "}
          Обратите внимание, что мы передаём props базовому (родительскому)
          конструктору:
        </p>
        <div className="componentscode">
          <pre>
            <code>
              {`constructor(props) {
  super(props);
  this.state = {date: new Date()};
}
          `}
            </code>
          </pre>
        </div>
        <p>
          Классовые компоненты всегда должны вызывать базовый конструктор с
          аргументом props.
        </p>
      </div>
    </div>
  );
}
export { State };
