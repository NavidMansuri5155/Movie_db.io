import React, { createContext } from 'react';
import "./App.css"
import Nav from "./Component/Nav";
import Card from "./Component/Card"




const Name = createContext();

function App() {
  return (
    <div >
      <Nav  />
      <Card />
      </div>
  )
}
export default App;