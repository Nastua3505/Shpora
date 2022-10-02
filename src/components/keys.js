import React from "react";

function Keys() {
  return (
    <div className="headertext">
      <div className="keys">
        <h1>Ключи</h1>
        <p>
          Ключи помогают React определять, какие элементы были изменены,
          добавлены или удалены. Их необходимо указывать, чтобы React мог
          сопоставлять элементы массива с течением времени:
        </p>

        <div className="componentscode">
          <pre>
            {`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
`}
          </pre>
        </div>
        <p>
          Лучший способ выбрать ключ — это использовать строку, которая будет
          явно отличать элемент списка от его соседей. Чаще всего вы будете
          использовать ID из ваших данных как ключи:
        </p>
        <div className="componentscode">
          <pre>
            {`const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);`}
          </pre>
        </div>

        <h3>React.PureComponent</h3>
        <p>
          {" "}
          React.PureComponent похож на React.Component. Отличие заключается в
          том, что React.Component не реализует shouldComponentUpdate(), а
          React.PureComponent реализует его поверхностным сравнением пропсов и
          состояния.
        </p>
      </div>
    </div>
  );
}

export { Keys };
