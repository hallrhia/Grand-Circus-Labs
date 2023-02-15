import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MenuList } from "./components/MenuList";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import OrderContextProvider from "./context/OrderContextProvider";

function App() {
  return (
    <div className="App">
      <OrderContextProvider>
        <Header />
        <div className="container">
          <MenuList />
          <Sidebar />
        </div>
      </OrderContextProvider>
    </div>
  );
}

export default App;
