import React from "react";
import axios from "axios";

function Header(props) {
  const handleChange = (e) => {
    props.setSearch(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const data = props.data;
    console.log(props.search);
    if (props.search === "") {
      props.setData(props.allProducts);
      return;
    } else {
      const filterBySearch = data.filter((item) => {
        if (item.title.toLowerCase().includes(props.search.toLowerCase())) {
          return item;
        }
      });
      props.setData(filterBySearch);
    }
  };
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">Shop Now</a>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleChange}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={handleClick}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
