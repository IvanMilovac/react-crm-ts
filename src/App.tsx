import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { currentUser } = useAuth();
  return <Router>{currentUser ? <Home /> : <Landing />}</Router>;
}

export default App;
