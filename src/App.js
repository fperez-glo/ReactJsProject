import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
            <ItemListContainer/>
          </Route>
          <Route exact path="/detail/:prodId">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer
              className="ItemListContainer"
              styles={styles.body}
            />
          </Route>
          </body>
        </Switch>
        
        
      </div>
    </Router>
  );
};

export default App;
