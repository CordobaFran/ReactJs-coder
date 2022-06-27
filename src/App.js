import './App.css';
import ItemCounter from './components/ItemCounter';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  const handleAdd = ()=>{
    console.log("se agregó el producto al carrito")
  }

  return (
    <div className="container-fluid px-0">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a Petshop Store"}/>
      <ItemCounter handleAdd={handleAdd} initialStock={7} />
    </div>
  );
}

export default App;
