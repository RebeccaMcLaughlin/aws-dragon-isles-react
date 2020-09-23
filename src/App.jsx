import React, { useEffect } from "react";
import "./App.css";
import Dragons from "./components/Dragons";
import DecodeIDToken from "./services/DecodeIDToken";
import SetToken from "./services/SetToken";

function App() {
  const [authenticated, setAuthenticated] = React.useState(false);

  useEffect(() => {
    SetToken();

    if (DecodeIDToken(localStorage.getItem("token"))) {
      setAuthenticated(DecodeIDToken(localStorage.getItem("token")));
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dragon species</h1>
        {authenticated ? (
          <p>
            Logged in as:
            {authenticated.email}
          </p>
        ) : null}
        <Dragons />
        {!authenticated ? (
          <a href="https://d3c76cpagptuvw.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=5bd8r2mnjdll9epbq13pce4ves&redirect_uri=http://localhost:3000">
            Login
          </a>
        ) : null}
      </header>
    </div>
  );
}

export default App;
