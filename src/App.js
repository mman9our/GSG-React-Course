import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import ProtectedDashboard from "./Routes/ProtectedDashboard";
import ProtectedAuth from "./Routes/ProtectedAuth";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={
            <ProtectedAuth>
              <SignIn />

            </ProtectedAuth>
          } path="/" />
          <Route element={<ProtectedAuth>
            <SignUp />

          </ProtectedAuth>} path="/signup" />
          <Route path="/dashboard" element={
            <ProtectedDashboard>
              <Dashboard />
            </ProtectedDashboard>

          }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
