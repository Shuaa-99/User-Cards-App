import { useState } from "react";
import { useEffect } from "react";
import User from "./components/User";

import "./App.css";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const response = await fetch(url).then((res) => res.json());
    setUsers(response);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      {users.map((user) => (
        <div key={user.id} className="card">
          <User user={user} />
        </div>
      ))}
    </div>
  );
}

export default App;
