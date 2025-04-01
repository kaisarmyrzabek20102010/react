import React, { useState, useEffect } from "react";
import axios from "axios";

const SuperheroSearch = () => {
  const [heroes, setHeroes] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedHero, setSelectedHero] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://akabab.github.io/superhero-api/api/all.json")
      .then((response) => {
        setHeroes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again.");
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    if (!search.trim()) return; 

    const hero = heroes.find(
      (h) => h.name.toLowerCase() === search.toLowerCase()
    );
    setSelectedHero(hero || null);
    if (!hero) {
      setError("Superhero not found.");
    } else {
      setError(""); 
    }
  };

  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Superhero Search</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter name"
          className="border p-2 flex-1 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center">Loading superheroes...</p>}

      {error && <p className="text-center text-red-500">{error}</p>}

      {selectedHero && !loading && (
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{selectedHero.name}</h2>
          {selectedHero.images && selectedHero.images.md ? (
            <img
              src={selectedHero.images.md}
              alt={selectedHero.name}
              className="w-full h-auto mt-2"
            />
          ) : (
            <p>No image available</p>
          )}
          <p>
            <strong>Full Name:</strong> {selectedHero.biography?.fullName || "Unknown"}
          </p>
          <p>
            <strong>Powerstats:</strong> Strength - {selectedHero.powerstats?.strength || "N/A"},
            Speed - {selectedHero.powerstats?.speed || "N/A"}
          </p>
          <p>
            <strong>Publisher:</strong> {selectedHero.biography?.publisher || "Unknown"}
          </p>
        </div>
      )}
    </div>
  );
};

export default SuperheroSearch;
