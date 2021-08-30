import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ItemCardContainer from "./components/ItemsCards/ItemCardContainer";
import ItemDetailContainer from "./components/ItemsCards/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContextsCartProvider from "./context/ContextsCart";
import Cart from "./components/Cart/Cart";
import NavBar2 from "./components/NavBar/NavBar2";

const App = () => {
  const styles = {
    body: {
      width: "100%",
      height: "300px",
    },
  };

  return (
    <ContextsCartProvider>
      <Router>
        {/* <NavBar className="NavBar" /> */}
        <NavBar2 className="NavBar"/>
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
              <Route exact path="/cart" id="RouterNavLink">
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
