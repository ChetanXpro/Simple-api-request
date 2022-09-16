import { useEffect, useState } from "react";
import "./App.css";

import Api from "./Components/API";
import LoadingPage from "./Components/LoadingPage";

function App() {
  const [users, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    const res = await fetch("https://api.github.com/users");
    setIsLoading(false);
    const data = await res.json();

    setUser(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      {!isLoading ? <Api users={users} /> : <LoadingPage />}
    </div>
  );
}

export default App;
