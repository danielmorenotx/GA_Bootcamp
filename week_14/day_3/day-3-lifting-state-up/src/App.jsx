import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import Home from "./containers/Home/Home";
import Search from "./containers/Search/Search";
import About from "./containers/About/About";
import Profile from "./containers/Profile/Profile";
import "./App.css";
import ProductDetail from "./components/ProductDetail/ProductDetail";


const App = () => {
  const products = [
    {
      id: 1,
      name: "Apple",
      price: 1.0,
      category: "Fruits",
      description: "Fresh and juicy red apples, perfect for a healthy snack.",
      inStock: true,
      origin: "USA",
    },
    {
      id: 2,
      name: "Bread",
      price: 2.5,
      category: "Bakery",
      description:
        "Soft, freshly baked bread with a golden crust, ideal for sandwiches.",
      inStock: true,
      origin: "France",
    },
    {
      id: 3,
      name: "Carrot",
      price: 0.5,
      category: "Vegetables",
      description:
        "Organic carrots with a sweet flavor, great for cooking or raw consumption.",
      inStock: false,
      origin: "Mexico",
    },
    {
      id: 4,
      name: "Chicken",
      price: 5.0,
      category: "Meat",
      description:
        "High-quality, farm-raised chicken, perfect for a variety of dishes.",
      inStock: true,
      origin: "USA",
    },
    {
      id: 5,
      name: "Fish",
      price: 3.5,
      category: "Seafood",
      description: "Freshly caught fish, rich in omega-3 fatty acids.",
      inStock: true,
      origin: "Norway",
    },
    {
      id: 6,
      name: "Milk",
      price: 1.5,
      category: "Dairy",
      description: "Organic, whole milk from grass-fed cows.",
      inStock: true,
      origin: "Canada",
    },
    {
      id: 7,
      name: "Cheese",
      price: 2.0,
      category: "Dairy",
      description: "Aged cheddar cheese with a rich, sharp flavor.",
      inStock: false,
      origin: "Switzerland",
    },
    {
      id: 8,
      name: "Eggplant",
      price: 1.25,
      category: "Vegetables",
      description:
        "Versatile eggplant that is perfect for roasting, frying, or baking.",
      inStock: true,
      origin: "Italy",
    },
    {
      id: 9,
      name: "Pasta",
      price: 1.75,
      category: "Grains",
      description:
        "High-quality, Italian pasta, ideal for traditional recipes.",
      inStock: true,
      origin: "Italy",
    },
    {
      id: 10,
      name: "Coffee",
      price: 4.0,
      category: "Beverage",
      description:
        "Rich and smooth coffee beans, with a deep, full-bodied flavor.",
      inStock: true,
      origin: "Brazil",
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    console.log(product);
    setCartItems([...cartItems, product]);
  };

  const userProfileDetail = {
    username: "John",
    address: "123444 austin texas",
    profilePicture: "example.com/pic/1234"
  }

  return (
    <div>
      <div className="header">
        <div className="logo">MyShop</div>
        <NavBar />
        <Cart count={cartItems.length} />
      </div>
      <Routes>
        <Route
          path="/"
          element={<Home onAddToCart={handleAddToCart} products={products} />}
        />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile userProfileDetail={userProfileDetail} />} />
        <Route
          path="/products/:productId"
          element={
            <ProductDetail products={products} onAddToCart={handleAddToCart} />
          }
        />
        <Route path="*" element={<h2>Sorry no page with that name!</h2>} />
      </Routes>
    </div>
  );
};

export default App;
