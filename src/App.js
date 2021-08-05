import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ItemCardContainer from "./components/ItemCardContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartWidget from "./components/CartWidget";
import ContextsCartProvider from "./context/ContextsCart";
import Cart from "./components/Cart";

const App = () => {
  const styles = {
    body: {
      backgroundColor: "green",
      width: "100%",
      height: "300px",
    },
  };

  return (
    <ContextsCartProvider>
      <Router>
        <NavBar className="NavBar" />
        <div className="App">
          <Switch>
            <body className="App-body">
              <Route exact path="/">
                <ItemCardContainer />
              </Route>
              <Route exact path="/category/:categoryId">
                <ItemCardContainer
                  className="ItemCardContainer"
                  styles={styles.body}
                />
              </Route>
              <Route exact path="/detail/:prodId">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/cart">
                <Cart/>
              </Route>
            </body>
          </Switch>
        </div>
      </Router>
    </ContextsCartProvider>
  );
};

export default App;
