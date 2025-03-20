import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products
    .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
    .filter((product) => (category ? product.category === category : true))
    .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Store</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", margin: "10px 0", width: "100%" }}
      />
      <select
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "10px", margin: "10px 0", width: "100%" }}
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
      </select>
      <div style={{ margin: "10px 0" }}>
        <button onClick={() => setSortOrder("asc")} style={{ marginRight: "10px" }}>
          Price: Low to High
        </button>
        <button onClick={() => setSortOrder("desc")}>Price: High to Low</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
            <img src={product.image} alt={product.title} width="100" />
            <h2 style={{ fontSize: "16px" }}>{product.title}</h2>
            <p style={{ fontWeight: "bold" }}>${product.price}</p>
            <Link to={`/product/${product.id}`} style={{ color: "blue", textDecoration: "underline" }}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} alt={product.title} width="200" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p style={{ fontWeight: "bold" }}>${product.price}</p>
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Back to Home
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;