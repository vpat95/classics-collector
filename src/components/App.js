import '../styles/App.css';
import Header from './Header';
import HomePage from './HomePage';
import SearchAndFilter from './SearchAndFilter';
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
