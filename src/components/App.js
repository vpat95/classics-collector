import '../styles/App.css';
import Header from './Header';
import SearchAndFilter from './SearchAndFilter';
import HomePage from './HomePage';

/*
Component Hierarchy
|- App
|--- Header
|----- Login
|--- SearchAndFilter
|--- HomePage
|----- Card
|----- NewCarForm
*/

function App() {

  return (
    <div className="App">
      <Header />
      <SearchAndFilter />
      <HomePage />
    </div>
  );
}

export default App;
