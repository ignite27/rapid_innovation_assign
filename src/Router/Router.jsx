import { Route, Routes } from "react-router-dom"; // Updated the import to "react-router-dom"
import Home from "../components/Home";
import Contact from '../components/Contact'
import Task from '../components/Task'


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/task" element={<Task/>} />

    </Routes>
  );
};

export default Router;
