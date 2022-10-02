import React from "react";

function UseEffect() {
  return (
    <div className="headertext">
      <div className="useEfect">
        <h1>Хук UseEffect</h1>
        <p>
          Хук эффекта даёт вам возможность выполнять побочные эффекты в
          функциональном компоненте:
        </p>

        <div className="componentscode">
          <pre>
            <code>
              {` import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = 'Вы нажали count раз';
  });

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}
                `}
            </code>
          </pre>
        </div>
        <h2>componentDidMount и componentWillUnmount</h2>
        <p>
          {" "}
          componentDidMountсрабатывает только при первом рендоре компонента и
          аналогично ему хук выглядит так:
        </p>

        <div className="componentscode">
          <pre>
            <code>
              {`  useEffect(() => {
  // стработает 1 раз при первом рендре компонента
  // здесь код работает как componentDidMount
  return () => {
    // return здесь работает как componentWillUnmount
  };
}, []);
            `}
            </code>
          </pre>
        </div>
        <p>
          Если оставить второй параметр как пустой масив, то хук сработает как
          классовый метод componentDidMount
        </p>
        <h2>componentDidMount</h2>
        <div className="componentscode">
          <pre>
            <code>
              {`useEffect(() => {
  // будет срабатывать только тогда, когда изменится параметр smt
}, [smt]);
            
            `}
            </code>
          </pre>
        </div>
        <p>Этот хук принимает два парраметра:</p>
        <ul>
          <li> Анонимную функцию</li>
          <li>Масcив значений который нужно отслеживать</li>
        </ul>
        <p>
          Если не указать второй параметр, то при каждом изменении компонента
          этот тух будет срабатывать
        </p>
      </div>
    </div>
  );
}
export { UseEffect };
