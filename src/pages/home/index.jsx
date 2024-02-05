import React from "react";
import Table from "../../components/Table";
import "./Home.scss";
import SearchBox from "../../components/SearchBox";

const Home = () => {
  return (
    <div className="Home">
      home page
      <Table />
      <SearchBox/>
    </div>
  );
};

export default Home;
