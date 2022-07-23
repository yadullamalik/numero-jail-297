import { Route, Routes } from "react-router-dom";
import { Billinandinvoice } from "../Components/Billing/Billingandinvoice";
import CurrentJobs from "../Components/career page1/CurrentJobs";
import Demo from "../Components/career page1/Demo";
import ToggleTrack from "../Components/career page1/Toggletrack/ToggleTrack";
import { EmployeeTimeTracking } from "../Components/EmployeeTimeTracking/EmployeeTimeTracking";
import Footer from "../Components/Homepage/Footer";
import Homepage from "../Components/Homepage/Homepage";
import { KeyFeatures } from "../Components/keyFeatures/KeyFeatures";
import Login from "../Components/Loging/Login";
import Signup1 from "../Components/Loging/Signup1";
import Navbar from "../Components/navbar/Navbar";
import Price from "../Components/page/Price/Price";
import { FreeLance } from "../Components/WhyTrack/Freelance";

export const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup1 />} />
        <Route path="/keyfeatures" element={<KeyFeatures />} />
        <Route
          path="/employeetimetracking"
          element={<EmployeeTimeTracking />}
        />
        <Route path="/billing" element={<Billinandinvoice />} />
        <Route path="/freelance" element={<FreeLance />} />
        <Route path="/price" element={<Price />} />
        <Route path="/currentjobs" element={<CurrentJobs />} />
        <Route path="/toggletrack" element={<ToggleTrack />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      <Footer />
    </div>
  );
};
