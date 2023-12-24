import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Nav_Components/Home";
import Dashboard from "./Nav_Components/Dashboard";
import Login from "./Login_Components/Login";
import Portal from "./Portal/Portal";
import Register from "./Login_Components/Register";
import ForgotPassword from "./Login_Components/ForgotPassword";
import ResetPassword from "./Login_Components/ResetPassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot/password" element={<ForgotPassword />} />
          <Route path="/reset/password/:token" element={<ResetPassword />} />
          <Route path="/portal" element={<Portal />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="home" element={<Home />} />
            
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
