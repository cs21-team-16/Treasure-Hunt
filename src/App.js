import React from "react";
import axios from "axios";

function App() {
  const headers = {
    headers: { Authorization: "Token ee4d02e90a62518c038956d82a7dd9914e94774a" }
  };
  axios
    .get("https://lambda-treasure-hunt.herokuapp.com/api/adv/init/", headers)
    .then(function(response) {
      console.log("response", response);
    })
    .catch(function(error) {
      console.log("error", error);
    });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn React</h1>
      </header>
    </div>
  );
}

export default App;
