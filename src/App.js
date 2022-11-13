
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import {Routes, Route} from 'react-router-dom'
import CountryDetails from './components/CountryDetails';
import {useState} from 'react'
import countries from './countries.json'

function App() {
  const [allCountries, setAllCountries] = useState(countries)

  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <Routes>
      <Route path='/:id' element={<CountryDetails countries={allCountries}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
