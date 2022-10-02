import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
      <img
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC
             4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPS
             IjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0
             iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0i
             NC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K
             "
        height="20"
      />
      <a href="https://ru.reactjs.org/" class="react">
        React
      </a>
      <Menu.Item>
        {" "}
        <Link to="/home">Home</Link>{" "}
      </Menu.Item>
      <Menu.Item>
        {" "}
        <Link to="/component">Component</Link>{" "}
      </Menu.Item>
      <Menu.Item>
        {" "}
        <Link to="/props">Props</Link>{" "}
      </Menu.Item>
      <Menu.Item>
        {" "}
        <Link to="/state">State</Link>{" "}
      </Menu.Item>
      <Menu.Item>
        {" "}
        <Link to="/lifecycle">Lifecycle</Link>{" "}
      </Menu.Item>
      <Menu.Item>
        {" "}
        <Link to="/keys">Keys</Link>{" "}
      </Menu.Item>
      <Menu.Item>
        {" "}
        <Link to="/async">Async</Link>{" "}
      </Menu.Item>
      <Menu.Item>
        {" "}
        <Link to="/virtualDom">Virtual Dom</Link>{" "}
      </Menu.Item>
      <Menu.Item>
        {" "}
        <Link to="/reactFragment">ReactFragment</Link>{" "}
      </Menu.Item>
      <Menu.Item>
        {" "}
        <Link to="/reactMemo"> React Memo</Link>{" "}
      </Menu.Item>
      <Menu.Item>
        {" "}
        <Link to="/useEffect">Use Effect</Link>{" "}
      </Menu.Item>

      <Menu.Item>
        {" "}
        <Link to="/context">Context</Link>{" "}
      </Menu.Item>
      <Menu.Item>
        {" "}
        <Link to="/WorkWithForm ">Work With Form</Link>{" "}
      </Menu.Item>
    </Menu>
  );
}

export default AppHeader;
