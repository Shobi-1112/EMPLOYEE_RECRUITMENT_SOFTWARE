import React from "react";
import "./Home.scss";
import Table from "../../../components/Table";
import SearchBox from "../../../components/SearchBox";

const Home = () => {
  const DummyData = [
    {
      Name: "Student Name",
      College: "College Name",
      Rank: "one",
    },
  ];
  return (
    <div className="Home">
      home page
      <Table data={DummyData} />
      <SearchBox />
    </div>
  );
};

export default Home;
