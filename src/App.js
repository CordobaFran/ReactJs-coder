import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="container-fluid px-0">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a Petshop Store"}/>
    </div>
  );
}

export default App;
