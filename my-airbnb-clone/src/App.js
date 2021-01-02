import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
/*1. Avvolgere il contenuto si "app" attorno di -Router- come se inizializzassimo le proprieta' 
  2. Switch servira a riconoscere il percorso da renderare. NB tutto quello che non e' presente dentro switch rimarra' staticamente intatto.
  3. Con route indichiamo a -Switch- il percorso che deve seguire per presentare una determinata pagina.
*/
function App() {
  return (
    <div className="app">
      {/* Pseudo coddiamo lol. inziamo a dare un "ombra al nostro codice" tutta la bella compagnia sottostante e' contenuta nella home */}

      {/*Home*/}
      {/* Header */}
      {/* Banner */}
      {/*Search*/}
      {/* Cards */}
      {/* Footer */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
