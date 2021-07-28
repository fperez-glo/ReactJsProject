import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ItemCartContainer from "./components/ItemCartContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartWidget from "./components/CartWidget";

const App = () => {
  const styles = {
    body: {
      backgroundColor: "green",
      width: "100%",
      height: "300px",
    },
  };

  return (
    <Router>
      <NavBar className="NavBar" />
      <div className="App">
        <Switch>
          <body className="App-body">
            <Route exact path="/">
              <ItemCartContainer/>
            </Route>
            {/* <Route exact path="/detail/:prodId">
              <ItemDetailContainer/>
            </Route> */}
            <Route exact path="/category/:categoryId">
              <ItemCartContainer
                className="ItemCartContainer"
                styles={styles.body}
              />
            </Route>
            <Route exact path="/detail/:prodId">
              <ItemDetailContainer/>
            </Route>
          </body>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
