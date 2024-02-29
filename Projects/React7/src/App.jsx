import { Component } from "react";
import Movies from "../../React7/src/Movies";

function App() {
  return(
    <div className='app'>
      <h2>Comedy Movies</h2>
      <Movies />
      <h2>Action Movies</h2>
      <Movies />
    </div>
  )
}

export default App;
