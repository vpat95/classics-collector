import '../styles/App.css';
import Header from './Header';
import Card from './Card';
import SearchAndFilter from './SearchAndFilter';
import carData from '../data/carData'

function App() {

  const carCards = carData.map(car => <Card key={car.id} make={car.make} model={car.model} year={car.year} price={car.price.toLocaleString()} image={car.image} specs={car.specs}/>)

  return (
    <div className="App">
      <Header isLoggedIn={false}/>
      <SearchAndFilter />
      <main>
        {carCards}
      </main>
    </div>
  );
}

export default App;
