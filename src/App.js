import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';

const App = () => {
  return (
    <div className="App">
      < CitySearch />
      < EventList />
      < NumberOfEvents />
    </div>
  );
}

export default App;
