import React from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";

function Props() {
  return (
    <div className="headertext">
      <div className="props">
        <h1>Пропсы</h1>
        <p>
          {" "}
          Пропсы ринимают произвольные входные данные (так называемые «пропсы»)
          и возвращают React-элементы, описывающие, что мы хотим увидеть на
          экране.
        </p>
        <p>Например, этот компонент выведет «Привет, Алиса» на страницу:</p>
        <div className="componentscode">
          <pre>
            <code>
              function Welcome(props) {"{"} <br />
              return {"<h1>"}Привет, {"{"}props.name{"}"}
              {"<h1>"}; <br />
              {"}"} <br />
              const element = <welcome name="Алиса" />; <br />
              ReactDOM.render( <br />
              element, <br />
              document.getElementById('root') <br />
              );
            </code>
          </pre>
        </div>
        <p>
          {" "}
          <ExclamationCircleOutlined width={60} /> Пропсы можно только читать
        </p>
      </div>
    </div>
  );
}

export { Props };
