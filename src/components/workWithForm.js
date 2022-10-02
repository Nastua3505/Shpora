import React from "react";

function WorkWithForm() {
  return (
    <div className="headertext">
      <div className=" WorkWithForm">
        <h1>Работа с формами</h1>
        <p>
          В React HTML-элементы формы ведут себя немного иначе по сравнению с
          DOM-элементами, так как у элементов формы изначально есть внутреннее
          состояние. К примеру, в эту HTML-форму можно ввести имя
        </p>

        <div className="componentscode">
          <pre>
            <code>
              {` <form>
  <label>
    Имя:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Отправить" />
</form>
                `}
            </code>
          </pre>
        </div>

        <p>
          По умолчанию браузер переходит на другую страницу при отправке
          HTML-форм, в том числе и этой. Если вас это устраивает, то не надо
          ничего менять, в React формы работают как обычно. Однако чаще всего
          форму удобнее обрабатывать с помощью JavaScript-функции, у которой
          есть доступ к введённым данным. Стандартный способ реализации такого
          поведения называется «управляемые компоненты».
        </p>
      </div>
    </div>
  );
}
export { WorkWithForm };
