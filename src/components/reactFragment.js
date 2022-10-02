import React from "react";

function ReactFragment() {
  return (
    <div className="headertext">
      <div className="react">
        <h1>Фрагменты</h1>
        <p>
          Компонента не может возвращать несколько элементов, а может только
          один. И для этого нам нужно обернуть весь код в родительский элемент
          например div
        </p>

        <div className="componentscode">
          <pre>
            <code>
              {`
                class Columns extends React.Component {
                    render() {
                      return (
                        <div>
                          <td>Привет</td>
                          <td>Мир</td>
                        </div>
                      );
                    }
                  }
                  
                  <table>
                    <tr>
                      <div>
                        <td>Привет</td>
                        <td>Мир</td>
                      </div>
                    </tr>
                  </table>
                `}
            </code>
          </pre>
        </div>
        <p>
          В примере выше мы обернули элементы в div и при рендоре он добавиться
          в DOM
        </p>
        <div className="componentscode">
          <pre>
            <code>
              {`
                    class Columns extends React.Component {
                        render() {
                          return (
                            <React.Fragment>
                              <td>Привет</td>
                              <td>Мир</td>
                            </React.Fragment>
                          );
                        }
                      }
                      
                      <table>
                        <tr>
                          <td>Привет</td>
                          <td>Мир</td>
                        </tr>
                      </table>
                    `}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
export { ReactFragment };
