import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout";
import AddQuestion from "../pages/admin/AddQuestion";
import Home from "../pages/admin/home";
import CreateContest from "../pages/admin/CreateContest";
import AddEmployee from "../pages/admin/AddEmployee";
import RoundFilerDetails from "../pages/admin/RoundFilter";
const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="createContest" element={<CreateContest />} />
        <Route path="roundFilter" element={<RoundFilerDetails  />} />
        <Route path="hrAssign" element={<CreateContest />} />
        <Route path="addQuestion" element={<AddQuestion />} />
        <Route path="addEmployee" element={<AddEmployee />} />
        <Route path="contestInfo" element={<CreateContest />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
