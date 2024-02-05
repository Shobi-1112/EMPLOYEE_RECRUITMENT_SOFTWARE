import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home";
import CreateContest from "../pages/CreateContest";
const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="createContest" element={<CreateContest />} />
        <Route path="roundFilter" element={<CreateContest />} />
        <Route path="hrAssign" element={<CreateContest />} />
        <Route path="addQuestion" element={<CreateContest />} />
        <Route path="addEmployee" element={<CreateContest />} />
        <Route path="contestInfo" element={<CreateContest />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
