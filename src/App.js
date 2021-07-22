
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";



const App = () => {
  const styles = ({
    body: {
        backgroundColor:'green',
        width:'100%',
        height:'300px',
    },
  })
  return (
    <div className="App">
      <NavBar className="NavBar" />
      <header className="App-header"></header>
      <body className="App-body">
        <ItemListContainer
         className='ItemListContainer'
         styles={styles.body}
        />
      </body>
    </div>
  );
}

export default App;
