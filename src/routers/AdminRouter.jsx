import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import LoginPage from "../components/Loginpage/LoginPage";
import CreateContest from "../pages/admin/CreateContest";
import AddQuestion from "../pages/admin/AddQuestion";
import AddEmployee from "../pages/admin/AddEmployee";
import RoundFilerDetails from "../pages/admin/RoundFilter";
import Home from "../pages/admin/home/index";
import RoundFilter from "../pages/RoundFilter/RoundFilter";
import AddQuestionSetup from "../pages/admin/AddQuestion/AddQuestionsetup";
import HRhome from "../pages/HR_flow/HRhome/HRhome";
import ContestName from "../pages/HR_flow/ContestName/ContestName";
import HrLayout from "../layout/hrflow";
import ViewCode from "../pages/HR_flow/ViewCode/ViewCode";
import FeedbackPage from "../pages/HR_flow/Feedbackpage/FeedbackPage";
import ContestLog from "../pages/HR_flow/contestlog/ContestLog";
import RescheduleReq from "../pages/HR_flow/RescheduleReq/RescheduleReq";
import ViewFeedback from "../pages/HR_flow/ViewFeed/ViewFeedback";
import Forgetpassword from "../components/ForgotPassword/ForgotPassword";
import MeetingRoom from "../pages/HR_flow/Meeting/MeetingRoom";
import ChangePassword from "../components/ChangePassword/ChangePassword";
import LogHome from "../pages/HR_flow/ContestLogHome/LogHome";
import Resetpassword from "../components/ResetPassword/ResetPassword";
import AvailabilityCheck from "../pages/HR_flow/AvailabilityCheck/AvailabilityCheck";
import HRAssigned from "../pages/hr-assign/view-status/assigned";
import HRmainPage from "../pages/hr-assign/index-page";
import HRUnAssigned from "../pages/hr-assign/view-status/unassigned";
import RescheduleAccepted from "../pages/hr-assign/reschedule";
import Reschedule from "../components/hr-components/reschedule";
import ViewSchedule from "../components/hr-components/reschedule/view-schedule";
import TokenRedirection from "../components/hr-components/page/tokenRedirection";
import Contestinfo from "../pages/admin/Contestinfo";
import HomePage from "../pages/user/HomePage/HomePage";
import MCqPage from "../pages/user/McqPage/index";
import CodingPage from "../pages/user/CodingPage/index";
import Resumeupload from "../pages/user/Resumeupload/index";
import Currentview from "../pages/admin/Contestinfo/Currentview/index";
import Sidebar from "../components/Sidebar/Sidebar";
import UserLayout from "../layout/userflow";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Layout />}>
        <Route path="home/:id" element={<Home />} />
        <Route path="createcontest" element={<CreateContest />} />
        <Route path="roundFilterdetails" element={<RoundFilerDetails />} />
        <Route
          path="addQuestion/addQuestionSetup/:type"
          element={<AddQuestionSetup />}
        />
        <Route path="HrAssign" element={""} />
        <Route path="addQuestion" element={<AddQuestion />} />
        <Route path="addEmployee" element={<AddEmployee />} />
        <Route path="roundFilter" element={<RoundFilter />} />
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
        <Route
          path="/admin/page/redirection:id"
          element={<TokenRedirection />}
        />
        <Route path="addQuestion" element={<AddQuestion />} />
        <Route path="addEmployee" element={<AddEmployee />} />
        <Route path="contestinfo" element={<Contestinfo />} />
        <Route path="contestinfo/currentview" element={<Currentview />} />
        <Route
          path="contestinfo/completeContestView"
          element={<Currentview />}
        />
      </Route>

      <Route path="/hr" element={<HrLayout />}>
        <Route path="sidebar" element={<Sidebar />} />
        <Route path="hrhome/:id" element={<HRhome />} />
        <Route path="contestname/:contestId" element={<ContestName />} />
        <Route path="viewcode/:codingId" element={<ViewCode />} />
        <Route path="hrfeedback/:interviewId" element={<FeedbackPage />} />
        <Route path="contestlog/:contestId" element={<ContestLog />} />
        <Route path="reschedulereq/:interviewId" element={<RescheduleReq />} />
        <Route path="viewfeedback/" element={<ViewFeedback />} />
        <Route path="meetingroom" element={<MeetingRoom />} />
        <Route path="resetpassword" element={<Resetpassword />} />
        <Route path="changepassword" element={<ChangePassword />} />
        <Route path="loghome/:id" element={<LogHome />} />
        <Route path="availabilitycheck" element={<AvailabilityCheck />} />
      </Route>
      <Route path="/user" element={<UserLayout />}>
        <Route path="userhome" element={<HomePage />} />
        <Route path="MCQ" element={<MCqPage />} />
        <Route path="Coding" element={<CodingPage />} />
        <Route path="Resumeupload" element={<Resumeupload />} />
        <Route path="resetpassword" element={<Resetpassword />} />
        <Route path="changepassword" element={<ChangePassword />} />
      </Route>

      <Route path="/" element={<LoginPage />} />
      <Route path="/forgetpassword" element={<Forgetpassword />} />
    </Routes>
  );
};

export default AdminRouter;
