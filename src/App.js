import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import AppHeader from "./components/header";
import { Home } from "./components/home";
import { Component } from "./components/component";
import { Props } from "./components/props";
import { State } from "./components/state";
import { Lifecycle } from "./components/lifecycle";
import { Keys } from "./components/keys";
import { Async } from "./components/async";
import { VirtualDom } from "./components/virtualdom";
import { ReactFragment } from "./components/reactFragment";
import { ReactMemo } from "./components/reactMemo";
import { UseEffect } from "./components/useEffect";
import { Context } from "./components/context";
import { WorkWithForm } from "./components/workWithForm";

import { Content } from "antd/lib/layout/layout";

const { Header, Footer } = Layout;

const App = () => (
  <div>
    <Layout className="layout">
      <Header style={{ height: "68px" }}>
        <AppHeader />
      </Header>
      <Content>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/component" element={<Component />} />
          <Route path="/props" element={<Props />} />
          <Route path="/state" element={<State />} />
          <Route path="/lifecycle" element={<Lifecycle />} />
          <Route path="/keys" element={<Keys />} />
          <Route path="/async" element={<Async />} />
          <Route path="/virtualDom" element={<VirtualDom />} />
          <Route path="/reactFragment" element={<ReactFragment />} />
          <Route path="/reactMemo" element={<ReactMemo />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/context" element={<Context />} />
          <Route path="/workWithForm" element={<WorkWithForm />} />
        </Routes>
      </Content>
      <Content></Content>
      <Footer className="ant-layout-footer " style={{ textAlign: "center" }}>
        App ©2022 Created by @Nastua.Bykova
      </Footer>
    </Layout>
  </div>
);

export default App;
