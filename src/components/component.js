import React from "react";

function Component() {
  return (
    <div className="headertext">
      <div className="components">
        <h1>Функциональные и классовые компоненты</h1>
        <p>
          Компоненты позволяют разбить интерфейс на независимые части, про
          которые легко думать в отдельности.
        </p>
        <p>Проще всего объявить React-компонент как функцию:</p>
        <div className="componentscode">
          <pre>
            <code>
              {` function Welcome() {
                return <h1>Привет, мир! </h1>;
            }`}
            </code>
          </pre>
        </div>
        <p>
          Эта функция — компонент, потому что она получает данные в одном
          объекте («пропсы») в качестве параметра и возвращает React-элемент.
          <br></br> Мы будем называть такие компоненты «функциональными», так
          как они буквально являются функциями. Ещё компоненты можно определять
          как классы ES6:
        </p>
        <div className="componentscode">
          <pre>
            <code>
              {`   class Welcome extends React.Component {
                render() {
                    return <h1>Привет, мир!</h1>;
                }
            }`}
            </code>
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

export { Component };
