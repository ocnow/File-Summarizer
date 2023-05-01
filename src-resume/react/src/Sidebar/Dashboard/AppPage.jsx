import { useState } from "react";
import {BsFillCloudUploadFill} from "react-icons/bs";
import Sidebar from '../SideBar'
import Homepage from "./DashContent";
const Dashboard = () => {

  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <Homepage />
    </div>
  );
};
export default Dashboard;