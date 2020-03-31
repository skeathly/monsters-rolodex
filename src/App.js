import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => setMonsters(users))
      .catch(err => console.log(err.message));
  }, []);

  useEffect(() => {
    const results = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, monsters]);

  const handleChange = ev => {
    setSearchTerm(ev.target.value);
  };

  return (
    <div className="App">
      <SearchBox
        placeholder="Search monsters"
        handleChange={handleChange}
        searchTerm={searchTerm}
      />
      <br />
      <CardList monsters={searchResults} />
    </div>
  );
};

export default App;
