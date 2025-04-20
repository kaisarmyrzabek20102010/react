import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FlightContext } from "./flightProvider";

function FlightsList() {
  const { loading, setLoading } = useState(true);
  const { search, setSearch } = useState("");
  const { flights, setFlights } = useContext(FlightContext);

  const navigate = useNavigate();

  const mockFlights = [
    { id: 1, name: "Flight 1", price: 100 },
    { id: 2, name: "Flight 2", price: 200 },
    { id: 3, name: "Flight 3", price: 300 },
  ];

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    setLoading(true);
    setTimeout(() => {
      setFLights(mockFlights);
      setLoading(false);
    }, 1000);
  };
}

const filteredFlights = flights.filter(
  (flight) =>
    flight.from.toLowerCase().includes(search.toLowerCase()) ||
    flight.to.toLowerCase().includes(search.toLowerCase())
);

return (
    <div>
        <h1>Flights List</h1>
        <input
        type="text"
        placeholder="Search by from or to"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        {loading ? (
        <p>Loading...</p>
        ) : (
        <ul>
            {filteredFlights.map((flight) => (
            <li key={flight.id}>
                {flight.name} - {flight.price} $
                <button onClick={() => navigate(`/Booking/${flight.id}`)}>
                Book Now
                </button>
            </li>
            ))}
        </ul>
        )}
    </div>
);
