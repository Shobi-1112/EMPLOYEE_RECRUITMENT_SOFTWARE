import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/admin/home";
import CreateContest from "../pages/admin/CreateContest";
import AddQuestion from "../pages/admin/AddQuestion";
import AddEmployee from "../pages/admin/AddEmployee";
import RoundFilerDetails from "../pages/admin/RoundFilter";
import HRAssigned from "../pages/hr-assign/view-status/assigned";
import HRmainPage from "../pages/hr-assign/index-page";
import HRUnAssigned from "../pages/hr-assign/view-status/unassigned";
import RescheduleAccepted from "../pages/hr-assign/reschedule";
import Reschedule from "../components/hr-components/reschedule";
import ViewSchedule from "../components/hr-components/reschedule/view-schedule";
import TokenRedirection from "../components/hr-components/page/tokenRedirection";
const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Layout />}>
        <Route index path="home" element={<Home />} />
        <Route path="createcontest" element={<CreateContest />} />
        <Route path="roundFilter" element={<RoundFilerDetails />} />
        <Route path="hrAssign" element={<HRmainPage />}></Route>
        <Route path="hrAssign/contestdetails" element={<HRAssigned />} />
        <Route path="hrAssign/contesthrset" element={<HRUnAssigned />} />
        <Route path="hrAssign/reschedulelog" element={<Reschedule />} />
        <Route
          path="hrAssign/reschedulelog/viewstatus"
          element={<ViewSchedule />}
        />
        <Route
          path="hrAssign/rescheduleaccepted"
          element={<RescheduleAccepted />}
        />
        <Route path="/admin/page/redirection:id" element={<TokenRedirection/>}/>
        <Route path="addQuestion" element={<AddQuestion />} />
        <Route path="addEmployee" element={<AddEmployee />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
