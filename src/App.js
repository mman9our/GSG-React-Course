import "./App.css";
import { UserContext } from "./Contexts/UserContext";
import LoanForm from "./components/LoanForm";

function App() {
  return (
    <div className="App" style={{ marginTop: "250px" }}>
      <UserContext.Provider value={{userName : "mman9our", name : "Mohamed" , email : "mohamed@gmail.com"}}>
        <LoanForm />
        </UserContext.Provider>
    </div>
  );
}

export default App;
