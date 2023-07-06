import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Product from "./Product";
import axios from "axios";
import Footer from "./Footer";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filerChange, setFilterChange] = useState(false);
  const getData = async () => {
    const url = import.meta.env.VITE_REACT_APP_BASE_URL;
    const { data } = await axios.get(url);
    setData(data);
    setAllProducts(data);
  };
  useEffect(() => {
    getData();
    console.log(data);
  }, [filerChange]);
  return (
    <>
      <Header
        data={data}
        search={search}
        setSearch={setSearch}
        setFilterChange={setFilterChange}
        setData={setData}
        allProducts={allProducts}
      />
      <Product
        data={data}
        setFilterChange={setFilterChange}
        setData={setData}
        allProducts={allProducts}
      />
      <Footer />
    </>
  );
}

export default App;
